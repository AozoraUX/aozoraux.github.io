// 成果ページ（docs/works.md）を researchmap のデータと手書きの記述から組み立てるローカルプラグイン
//
// - researchmap のデータ: docs/.vuepress/data/researchmap.json（scripts/fetch-researchmap.mjs が更新）
// - 手書きの記述: docs/works.md の「## 2026年」「### 受賞」…の箇条書き
//   researchmap に同じ実績がある場合は手書きを優先し、researchmap 側は表示しません。
// - works.md の frontmatter で調整できます
//     researchmap_since: 2021-02     … これより前の実績は載せない
//     researchmap_hide: [12345678]   … 表示したくない researchmap の項目ID
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const DATA = resolve(import.meta.dirname, '../data/researchmap.json')
const TARGET = 'works.md'

// 年ごとの見出しの並び順（ここに無い見出しは「外部資金」の前に入ります）
const ORDER = [
  '受賞', '書籍', '査読付き原著論文', '査読付き国際会議', '国内研究会', '記事・解説', '記事',
  'コンペ', '作品', '作品展示イベント', 'メディア紹介', '卒業論文', '修士論文',
  '講演・社会活動', '講演', '外部資金採択・継続',
]
// 自動分類の見出しに対して、その年に既にある別名の見出しがあればそちらへ入れる
const ALIASES = {
  '講演・社会活動': ['講演'],
  '記事・解説': ['記事'],
  '作品': ['作品展示イベント'],
}

/* ---------- 文字列ユーティリティ ---------- */
const CJK = /[぀-ヿ㐀-鿿]/
const norm = (s) =>
  (s || '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, '')
const bigrams = (s) => {
  const set = new Set()
  for (let i = 0; i < s.length - 1; i++) set.add(s.slice(i, i + 2))
  return set
}
const coverage = (needle, hay) => {
  const a = bigrams(norm(needle))
  if (a.size < 4) return 0
  const b = hay instanceof Set ? hay : bigrams(norm(hay))
  let hit = 0
  for (const g of a) if (b.has(g)) hit++
  return hit / a.size
}
const esc = (s) => (s || '').replace(/([\\[\]*_`<>])/g, '\\$1').trim()
const link = (text, url) => (url && !url.includes('api.researchmap.jp') ? `[${esc(text)}](${url})` : esc(text))

const cleanName = (n) => {
  let s = n.replace(/^[○◯]/, '').replace(/[:：]\s*$/, '').trim()
  const m = s.match(/^(.+?),\s*(.+)$/)
  if (m && CJK.test(s)) s = `${m[1]} ${m[2]}`
  return s
}
const people = (list = []) => {
  const names = list.map(cleanName).filter(Boolean)
  return names.join(names.some((n) => CJK.test(n)) ? '，' : ', ')
}
const ym = (d = '') => d.slice(0, 7).replace('-', '/')
const ja = (d = '') => {
  const [y, m, day] = d.split('-').map(Number)
  if (!y) return ''
  return `${y}年${m ? `${m}月` : ''}${day ? `${day}日` : ''}`
}
const range = (a, b) => (b && b !== a ? `${ja(a)} - ${ja(b)}` : ja(a))
// 「日本語題目—English subtitle—研究会名」のような題目は最初の部分だけ使う
const title = (it) => {
  const t = it.title?.ja || it.title?.en || ''
  const [head, ...rest] = t.split(/\s*[—–]\s*/)
  return rest.length && CJK.test(head) ? head : t
}
const vol = (it) =>
  [it.volume && `Vol.${it.volume}`, it.number && `No.${it.number}`, it.pages].filter(Boolean).join(', ')

/* ---------- researchmap の項目 → 見出しと箇条書き ---------- */
const isConfVenue = (v = '') =>
  /proceedings|conference|congress|symposium|lecture notes|lncs|chiuxid|gcce|keer|isase|isis/i.test(v)

function classify(it) {
  switch (it.type) {
    case 'published_papers':
      if (it.paperType === 'doctoral_thesis') return null
      if (['international_conference_proceedings', 'in_book'].includes(it.paperType) || isConfVenue(it.venue))
        return '査読付き国際会議'
      return it.referee === false ? '記事・解説' : '査読付き原著論文'
    case 'presentations':
      return it.international ? '査読付き国際会議' : '国内研究会'
    case 'misc':
      if (it.miscType === 'summary_national_conference') return '国内研究会'
      if (/研究報告|研究会|全国大会|大会|シンポジウム|技報|予稿|論文集|講演/.test(it.venue || '')) return '国内研究会'
      return '記事・解説'
    case 'awards':
      return '受賞'
    case 'books_etc':
      return '書籍'
    case 'media_coverage':
      return 'メディア紹介'
    case 'social_contribution':
      return '講演・社会活動'
    case 'works':
      return '作品'
    case 'research_projects':
      return '外部資金採択・継続'
    default:
      return null
  }
}

function format(it) {
  const t = title(it)
  switch (it.type) {
    case 'published_papers':
    case 'misc': {
      const v = [esc(it.venue), vol(it)].filter(Boolean).join(', ')
      return `${people(it.people)}: ${link(t, it.url)}${v ? `, ${v}` : ''} (${ym(it.date)}).`
    }
    case 'presentations': {
      const where = [range(it.date, it.toDate), it.location && it.location !== ',' ? esc(it.location) : '']
        .filter(Boolean)
        .join('，')
      return `${people(it.people)}: ${link(t, it.url)}, ${esc(it.venue)} (${where}).`
    }
    case 'awards': {
      const subj = it.subject ? `「${esc(it.subject)}」` : ''
      return `${link(`${it.venue ? `${it.venue} ` : ''}${t}`, it.url)}${subj}: ${people(it.people)}, ${ja(it.date)}．`
    }
    case 'books_etc':
      return `${people(it.people)}: ${link(t, it.url)}, ${esc(it.venue)}, (${ym(it.date)}).`
    case 'media_coverage':
      return `${link(t, it.url)}${it.venue ? `, ${esc(it.venue.split('|')[0])}` : ''}, ${ja(it.date)}`
    case 'social_contribution':
      return `${esc(t)}${it.venue ? `, ${esc(it.venue)}` : ''} (${range(it.date, it.toDate)})`
    case 'works':
      return `${link(t, it.url)} (${range(it.date, it.toDate)})`
    case 'research_projects': {
      const sys = [it.organization, it.system, it.category && !(it.system || '').includes(it.category) ? it.category : '']
        .filter(Boolean)
        .join(' ')
      const ppl = (it.people || []).map(cleanName)
      const who = ppl.length ? `${ppl[0]}(代表)${ppl.length > 1 ? `, ${ppl.slice(1).join(', ')}` : ''}` : ''
      return `${link(t, it.url)} ${esc(sys)} ${who} ${range(it.date, it.toDate)}`.replace(/\s+/g, ' ').trim()
    }
    default:
      return esc(t)
  }
}

/* ---------- works.md（手書き部分）の読み取り ---------- */
function parseManual(body) {
  const lines = body.split('\n')
  const first = lines.findIndex((l) => /^##\s+\d{4}年/.test(l))
  const intro = (first < 0 ? lines : lines.slice(0, first)).join('\n').trimEnd()
  const years = new Map() // year -> Map(cat -> [items])
  let year = null
  let cat = null
  let cur = null
  for (const line of first < 0 ? [] : lines.slice(first)) {
    const y = line.match(/^##\s+(\d{4})年/)
    if (y) {
      year = Number(y[1])
      if (!years.has(year)) years.set(year, new Map())
      cat = null
      cur = null
      continue
    }
    const c = line.match(/^###\s+(.+?)\s*$/)
    if (c && year) {
      cat = c[1]
      if (!years.get(year).has(cat)) years.get(year).set(cat, [])
      cur = null
      continue
    }
    if (!year || !cat) continue
    const item = line.match(/^\s*[-*]\s+(.*)$/)
    if (item) {
      cur = { text: item[1].trim() }
      years.get(year).get(cat).push(cur)
    } else if (line.trim() && cur) {
      cur.text += ` ${line.trim()}`
    } else if (!line.trim()) {
      cur = null
    }
  }
  // 「Comming Soon!」のような仮置きは除く
  for (const cats of years.values())
    for (const [k, items] of cats) cats.set(k, items.filter((i) => !/^coming soon|^comming soon/i.test(i.text)))
  return { intro, years }
}

const manualDate = (text) => {
  let m = text.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/)
  if (m) return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`
  m = text.match(/\((\d{4})\/(\d{1,2})(?:\/(\d{1,2}))?/)
  if (m) return `${m[1]}-${m[2].padStart(2, '0')}-${(m[3] || '00').padStart(2, '0')}`
  m = text.match(/(\d{4})年(\d{1,2})月/)
  if (m) return `${m[1]}-${m[2].padStart(2, '0')}-00`
  return ''
}

/* ---------- 組み立て ---------- */
export function buildWorks(source, data, today = new Date()) {
  const fmMatch = source.match(/^---\n([\s\S]*?)\n---\n?/)
  const fmText = fmMatch ? fmMatch[1] : ''
  const body = fmMatch ? source.slice(fmMatch[0].length) : source
  const since = (fmText.match(/researchmap_since:\s*['"]?([\d-]+)/) || [])[1] || '2021-02'
  const hide = new Set(((fmText.match(/researchmap_hide:\s*\[([^\]]*)\]/) || [])[1] || '').split(/[,\s]+/).filter(Boolean))

  const { intro, years } = parseManual(body)
  const manualIndex = []
  for (const [y, cats] of years)
    for (const [c, items] of cats)
      if (!/卒業論文|修士論文/.test(c)) for (const i of items) manualIndex.push({ y, set: bigrams(norm(i.text)) })

  const thisYear = today.getFullYear()
  const sinceYear = Number(since.slice(0, 4))
  const auto = []
  const seen = []
  const all = Object.values(data?.items || {}).flat()
  // 情報量の多い種類を先に処理して、重複時はそちらを残す
  const rank = { published_papers: 0, presentations: 1, misc: 2 }
  all.sort((a, b) => (rank[a.type] ?? 3) - (rank[b.type] ?? 3))

  for (const it of all) {
    if (hide.has(String(it.id))) continue
    const d = it.date || ''
    if (!d || (d.length > 4 ? d < since : Number(d) < sinceYear)) {
      if (it.type !== 'research_projects') continue
    }
    const cat = classify(it)
    if (!cat) continue
    const key = title(it)
    // 手書きとの照合に使う文字列（受賞は賞名だけだと短いので会の名前や受賞者も使う）
    const keys =
      it.type === 'awards'
        ? [`${it.venue || ''}${key}`, `${it.subject || ''}${key}`, `${key}${(it.people || []).join('')}`]
        : it.type === 'research_projects'
          ? [key, `${it.organization || ''}${it.system || ''}`]
          : [key]
    const thr = it.type === 'awards' ? 0.6 : 0.75
    const inManual = (m) => keys.some((k) => coverage(k, m.set) >= thr)
    const y0 = Number(d.slice(0, 4))
    const yearsOf =
      it.type === 'research_projects'
        ? Array.from(
            { length: Math.min(Number((it.toDate || d).slice(0, 4)), thisYear) - Math.max(y0, sinceYear) + 1 },
            (_, i) => Math.max(y0, sinceYear) + i,
          )
        : [y0]
    if (!yearsOf.length) continue
    // 手書きに同じ実績があれば researchmap 側は出さない
    if (it.type !== 'research_projects' && manualIndex.some((m) => Math.abs(m.y - y0) <= 1 && inManual(m))) continue
    // researchmap 内の重複（論文と発表、発表と予稿など）
    if (it.type !== 'research_projects' && seen.some((s) => s.cat === cat && coverage(key, s.key) >= 0.8)) continue
    seen.push({ cat, key })
    for (const y of yearsOf) {
      if (it.type === 'research_projects' && manualIndex.some((m) => m.y === y && inManual(m))) continue
      auto.push({ year: y, cat, text: format(it), date: d.length === 4 ? `${d}-00-00` : d })
    }
  }

  // 年 × 見出しにまとめる
  const merged = new Map()
  const put = (y, cat, item) => {
    if (!merged.has(y)) merged.set(y, new Map())
    const cats = merged.get(y)
    if (!cats.has(cat)) cats.set(cat, [])
    cats.get(cat).push(item)
  }
  for (const [y, cats] of years)
    for (const [cat, items] of cats) items.forEach((i, n) => put(y, cat, { text: i.text, date: manualDate(i.text), n }))
  for (const a of auto) {
    const existing = merged.get(a.year)
    let cat = a.cat
    if (existing && !existing.has(cat)) cat = (ALIASES[cat] || []).find((al) => existing.has(al)) || cat
    put(a.year, cat, { text: a.text, date: a.date, n: 1e6 })
  }

  const ord = (c) => {
    const i = ORDER.indexOf(c)
    return i < 0 ? ORDER.length - 1.5 : i
  }
  let out = `${intro}\n`
  for (const y of [...merged.keys()].sort((a, b) => b - a)) {
    const cats = merged.get(y)
    const names = [...cats.keys()].filter((c) => cats.get(c).length).sort((a, b) => ord(a) - ord(b))
    if (!names.length) continue
    out += `\n## ${y}年\n`
    for (const c of names) {
      const items = cats.get(c)
      // 日付が分かるものは新しい順、分からないものは元の順で後ろへ
      const dated = items.filter((i) => i.date)
      const undated = items.filter((i) => !i.date)
      const sorted = c === '外部資金採択・継続' || c === '卒業論文' || c === '修士論文'
        ? items
        : [...dated.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.n - b.n)), ...undated]
      out += `### ${c}\n${sorted.map((i) => `- ${i.text}`).join('\n')}\n\n`
    }
  }
  const updated = data?.fetchedAt ? data.fetchedAt.slice(0, 10) : ''
  out += `\n---\n\n<small>※ 論文・発表・受賞などの一部は [researchmap](https://researchmap.jp/tktmr) の登録内容から自動で掲載しています${updated ? `（${updated} 取得）` : ''}．</small>\n`
  return (fmMatch ? fmMatch[0] : '') + out
}

export const worksPlugin = () => ({
  name: 'local-works',
  extendsPageOptions(options, app) {
    if (!options.filePath || !options.filePath.endsWith(`/${TARGET}`)) return
    if (options.filePath !== app.dir.source(TARGET)) return
    const data = existsSync(DATA) ? JSON.parse(readFileSync(DATA, 'utf8')) : null
    const source = readFileSync(options.filePath, 'utf8').replace(/\r\n/g, '\n')
    options.content = buildWorks(source, data)
  },
})
