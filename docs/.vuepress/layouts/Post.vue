<script setup>
import Layout from '@vuepress/theme-default/layouts/Layout.vue'
import { computed } from 'vue'
import { usePageData, usePageFrontmatter, withBase } from 'vuepress/client'

const page = usePageData()
const fm = usePageFrontmatter()
const dateLabel = computed(() => {
  if (fm.value.period) return fm.value.period
  const [y, m, d] = (page.value.date || '').split('-').map(Number)
  return y ? `${y}年${m}月${d}日` : ''
})
const tags = computed(() => fm.value.tags || [])
const tagLink = (t) => withBase(`/report.html?tag=${encodeURIComponent(t)}`)
</script>

<template>
  <Layout>
    <template #page-content-top>
      <header class="post-header">
        <a class="post-back" :href="withBase('/report.html')">← 活動報告</a>
        <h1 class="post-title">{{ page.title }}</h1>
        <div class="post-meta">
          <time v-if="dateLabel">{{ dateLabel }}</time>
          <a v-for="t in tags" :key="t" class="post-tag" :href="tagLink(t)">#{{ t }}</a>
        </div>
      </header>
    </template>
    <template #page-content-bottom>
      <p class="post-footer">
        <a :href="withBase('/report.html')">活動報告の一覧へ戻る</a>
      </p>
    </template>
  </Layout>
</template>

<style lang="scss">
.post-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-border);
}
.post-back {
  font-size: 0.85rem;
}
.post-title {
  margin-top: 0.75rem !important;
  padding-top: 0 !important;
  margin-bottom: 0.5rem !important;
  line-height: 1.35;
}
.post-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.8rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-mute);
}
.post-tag {
  padding: 0.1rem 0.6rem;
  border-radius: 999px;
  background: var(--vp-c-accent-soft);
  color: var(--vp-c-accent) !important;
  font-size: 0.8rem;
}
.post-footer {
  margin-top: 3rem;
  text-align: center;
}
</style>
