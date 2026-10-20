import { defineClientConfig } from 'vuepress/client'
import ReportList from './components/ReportList.vue'
import Post from './layouts/Post.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ReportList', ReportList)
  },
  layouts: {
    Post,
  },
})
