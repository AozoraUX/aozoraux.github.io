// researchmap の公開APIから業績を取得し、サイト表示用に整形して保存します。
// 使い方: node scripts/fetch-researchmap.mjs
// 取得に失敗した場合は既存の JSON をそのまま使います（ビルドは止めません）。
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'

const PERMALINK = 'tktmr'
const OUT = 'docs/.vuepress/data/researchmap.json'
const TYPES = [
  'published_papers', 'presentations', 'awards', 'research_projects',
  'books_etc', 'misc', 'works', 'social_contribution', 'media_coverage',
]

/* ---- 整形（browser でも同じコードを使えるよう依存なし） ---- */
const ml = (v) => (v ? v.ja || v.en || '' : '')
const mlBoth = (v) => (v ? { ja: v.ja || '', en: v.en || '' } : { ja: '', en: '' })
const names = (v) => {
  if (!v) return []
  const list = v.ja?.length ? v.ja : v.en || []
  return list.map((p) => (p.name || '').trim()).filter(Boolean)
}
const firstUrl = (it) => {
  const doi = it.identifiers?.doi?.[0]
  if (doi) return `https://doi.org/${doi}`
  const sa = (it.see_also || []).find((s) => s['@id'])
  return sa ? sa['@id'] : ''
}
const pages = (it) =>
  it.starting_page
    ? it.ending_page && it.ending_page !== it.starting_page
      ? `pp.${it.starting_page}-${it.ending_page}`
      : `p.${it.starting_page}`
    : ''

export function normalize(type, it) {
  const base = { id: it['rm:id'], type }
  switch (type) {
    case 'published_papers':
      return { ...base, title: mlBoth(it.paper_title), people: names(it.authors),
        venue: ml(it.publication_name), volume: it.volume || '', number: it.number || '',
        pages: pages(it), date: it.publication_date || '', referee: !!it.referee,
        paperType: it.published_paper_type || '', international: !!it.is_international_journal,
        url: firstUrl(it) }
    case 'misc':
      return { ...base, title: mlBoth(it.paper_title), people: names(it.authors),
        venue: ml(it.publication_name), volume: it.volume || '', number: it.number || '',
        pages: pages(it), date: it.publication_date || '', referee: !!it.referee,
        miscType: it.misc_type || '', url: firstUrl(it) }
    case 'presentations':
      return { ...base, title: mlBoth(it.presentation_title), people: names(it.presenters),
        venue: ml(it.event), location: ml(it.location),
        date: it.from_event_date || it.publication_date || '', toDate: it.to_event_date || '',
        invited: !!it.invited, international: !!it.is_international_presentation,
        presentationType: it.presentation_type || '', url: firstUrl(it) }
    case 'awards':
      return { ...base, title: mlBoth(it.award_name), subject: ml(it.award_title),
        people: names(it.winners), venue: ml(it.association), date: it.award_date || '',
        url: firstUrl(it) }
    case 'research_projects':
      return { ...base, title: mlBoth(it.research_project_title), people: names(it.investigators),
        organization: ml(it.offer_organization), system: ml(it.system_name),
        category: ml(it.category), institution: ml(it.institution_name),
        date: it.from_date || '', toDate: it.to_date || '',
        grantNumber: it.identifiers?.grant_number?.[0] || '', url: firstUrl(it) }
    case 'books_etc':
      return { ...base, title: mlBoth(it.book_title), people: names(it.authors),
        venue: ml(it.publisher), date: it.publication_date || '', url: firstUrl(it) }
    case 'works':
      return { ...base, title: mlBoth(it.work_title), people: names(it.authors),
        venue: ml(it.event || it.location), date: it.from_date || '', toDate: it.to_date || '',
        workType: it.work_type || '', url: firstUrl(it) }
    case 'social_contribution':
      return { ...base, title: mlBoth(it.social_contribution_title),
        venue: ml(it.promoter) || ml(it.event), roles: it.social_contribution_roles || [],
        date: it.from_event_date || '', toDate: it.to_event_date || '',
        contributionType: it.social_contribution_type || '', url: firstUrl(it) }
    case 'media_coverage':
      return { ...base, title: mlBoth(it.media_coverage_title), venue: ml(it.publisher),
        date: it.publication_date || '', mediaType: it.media_coverage_type || '',
        url: firstUrl(it) || (/^https?:/.test(ml(it.location)) ? ml(it.location) : '') }
    default:
      return base
  }
}

export async function fetchAll(fetchFn = fetch) {
  const data = { permalink: PERMALINK, fetchedAt: new Date().toISOString(), items: {} }
  for (const type of TYPES) {
    const list = []
    for (let start = 1; ; start += 100) {
      const res = await fetchFn(`https://api.researchmap.jp/${PERMALINK}/${type}?limit=100&start=${start}`)
      if (!res.ok) throw new Error(`${type}: HTTP ${res.status}`)
      const json = await res.json()
      const items = json.items || []
      for (const it of items) if (it.display !== 'undisclosed') list.push(normalize(type, it))
      if (items.length < 100) break
    }
    data.items[type] = list
  }
  return data
}

/* ---- CLI ---- */
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('fetch-researchmap.mjs')) {
  try {
    const data = await fetchAll()
    mkdirSync(dirname(OUT), { recursive: true })
    writeFileSync(OUT, JSON.stringify(data, null, 1) + '\n')
    const counts = Object.entries(data.items).map(([k, v]) => `${k}:${v.length}`).join(' ')
    console.log(`researchmap: saved ${OUT} (${counts})`)
  } catch (e) {
    if (existsSync(OUT)) {
      console.warn(`researchmap: 取得に失敗したため保存済みのデータを使います (${e.message})`)
    } else {
      console.error(`researchmap: 取得に失敗し、保存済みデータもありません (${e.message})`)
      process.exit(1)
    }
  }
}
