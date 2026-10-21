import { defineClientConfig } from 'vuepress/client'
// PWAプラグインは Service Worker の登録処理を後から読み込みますが、その処理はページの
// load イベントを待つため、ページの読み込みが先に終わると登録されないことがあります。
// ここで最初に読み込んでおき、load イベントを確実に受け取れるようにします。
import 'register-service-worker'
import MoreList from './components/MoreList.vue'
import ReportList from './components/ReportList.vue'
import Post from './layouts/Post.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ReportList', ReportList)
    app.component('MoreList', MoreList)
  },
  layouts: {
    Post,
  },
})
