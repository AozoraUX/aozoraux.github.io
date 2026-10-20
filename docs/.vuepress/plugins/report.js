// 活動報告（docs/report/*.md）をブログとして扱うためのローカルプラグイン
// - 記事一覧のデータを @temp/report-posts.js に書き出す（ReportList.vue が読み込む）
// - 各記事に Post レイアウトと「前の記事／次の記事」リンクを設定する
const DIR = 'report/'

const toText = (md) =>
  md
    .replace(/^---[\s\S]*?---/, '')
    .replace(/<[^>]+>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^[#>\-*:\s]+/gm, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const isPost = (page) => page.filePathRelative?.startsWith(DIR)

export const reportPlugin = () => ({
  name: 'local-report',

  extendsPage(page) {
    if (!isPost(page)) return
    page.frontmatter.layout ??= 'Post'
  },

  async onInitialized(app) {
    const posts = app.pages
      .filter((p) => isPost(p) && !p.frontmatter.draft)
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.path < b.path ? 1 : -1))

    posts.forEach((page, i) => {
      const newer = posts[i - 1]
      const older = posts[i + 1]
      const fm = page.frontmatter
      fm.prev ??= older ? { text: older.title, link: older.path } : false
      fm.next ??= newer ? { text: newer.title, link: newer.path } : false
    })

    const list = posts.map((p) => ({
      path: p.path,
      title: p.title,
      date: p.date,
      period: p.frontmatter.period || '',
      tags: p.frontmatter.tags || [],
      cover: p.frontmatter.cover || '',
      excerpt: (p.frontmatter.description || toText(p.content)).slice(0, 90),
      legacyId: p.frontmatter.legacy_id || '',
    }))
    await app.writeTemp('report-posts.js', `export const posts = ${JSON.stringify(list)}\n`)
  },
})
