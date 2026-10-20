<script setup>
// 活動報告の一覧（カード表示・タグ絞り込み・「もっと見る」）
import { posts } from '@temp/report-posts.js'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter, withBase } from 'vuepress/client'

const PAGE_SIZE = 12
const router = useRouter()
const activeTag = ref('')
const shown = ref(PAGE_SIZE)

const tagCounts = computed(() => {
  const m = new Map()
  for (const p of posts) for (const t of p.tags) m.set(t, (m.get(t) || 0) + 1)
  return [...m.entries()].sort((a, b) => b[1] - a[1])
})
const filtered = computed(() =>
  activeTag.value ? posts.filter((p) => p.tags.includes(activeTag.value)) : posts,
)
const visible = computed(() => filtered.value.slice(0, shown.value))

const fmtDate = (p) => {
  if (p.period) return p.period
  const [y, m, d] = p.date.split('-').map(Number)
  return `${y}年${m}月${d}日`
}

const selectTag = (t) => {
  activeTag.value = activeTag.value === t ? '' : t
  shown.value = PAGE_SIZE
  const url = new URL(window.location.href)
  if (activeTag.value) url.searchParams.set('tag', activeTag.value)
  else url.searchParams.delete('tag')
  window.history.replaceState(window.history.state, '', url)
}

onMounted(() => {
  // 旧URL（report.html#見出し）で来た場合は該当記事へ移動
  const hash = decodeURIComponent(window.location.hash.slice(1))
  if (hash) {
    const hit = posts.find((p) => p.legacyId === hash)
    if (hit) {
      router.replace(hit.path)
      return
    }
  }
  const tag = new URLSearchParams(window.location.search).get('tag')
  if (tag && posts.some((p) => p.tags.includes(tag))) activeTag.value = tag
})

watch(activeTag, () => (shown.value = PAGE_SIZE))
</script>

<template>
  <div class="report-list">
    <div class="report-tags" role="group" aria-label="タグで絞り込む">
      <button type="button" :class="{ active: !activeTag }" @click="activeTag && selectTag(activeTag)">
        すべて <span>{{ posts.length }}</span>
      </button>
      <button
        v-for="[t, n] in tagCounts"
        :key="t"
        type="button"
        :class="{ active: activeTag === t }"
        @click="selectTag(t)"
      >
        {{ t }} <span>{{ n }}</span>
      </button>
    </div>

    <ul class="report-cards">
      <li v-for="p in visible" :key="p.path" class="report-card">
        <a :href="withBase(p.path)" class="report-card-link" @click.prevent="router.push(p.path)">
          <div class="report-card-cover" :class="{ empty: !p.cover }">
            <img v-if="p.cover" :src="withBase(p.cover)" :alt="p.title" loading="lazy" />
            <img v-else :src="withBase('/assets/img/logo3.png')" alt="" class="placeholder" />
          </div>
          <div class="report-card-body">
            <time>{{ fmtDate(p) }}</time>
            <h2>{{ p.title }}</h2>
            <p v-if="p.excerpt">{{ p.excerpt }}…</p>
            <div class="report-card-tags">
              <span v-for="t in p.tags" :key="t">#{{ t }}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>

    <div v-if="filtered.length > shown" class="report-more">
      <button type="button" @click="shown += PAGE_SIZE">
        もっと見る（残り {{ filtered.length - shown }} 件）
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.report-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;

  button {
    padding: 0.3rem 0.9rem;
    border: 1px solid var(--vp-c-border);
    border-radius: 999px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;

    span {
      margin-left: 0.2rem;
      color: var(--vp-c-text-mute);
      font-size: 0.75rem;
    }

    &:hover {
      border-color: var(--vp-c-accent-bg);
    }

    &.active {
      border-color: var(--vp-c-accent-bg);
      background: var(--vp-c-accent-bg);
      color: #fff;

      span {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}

.report-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

[vp-content] .report-cards li + li {
  margin-top: 0;
}

.report-card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text) !important;
  transition:
    box-shadow 0.2s,
    transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
}

.report-card-cover {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--vp-c-bg-alt);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.empty {
    display: flex;
    align-items: center;
    justify-content: center;

    img.placeholder {
      width: 60%;
      height: auto;
      opacity: 0.35;
      object-fit: contain;
    }
  }
}

.report-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.8rem 1rem 1rem;

  time {
    color: var(--vp-c-text-mute);
    font-size: 0.8rem;
  }

  h2 {
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    font-size: 1rem !important;
    line-height: 1.45;
  }

  p {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin: 0 !important;
    color: var(--vp-c-text-mute);
    font-size: 0.85rem;
    line-height: 1.6;
  }
}

.report-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 0.3rem;
  color: var(--vp-c-accent);
  font-size: 0.75rem;
}

.report-more {
  margin: 2rem 0;
  text-align: center;

  button {
    padding: 0.6rem 1.6rem;
    border: 2px solid var(--vp-c-accent-bg);
    border-radius: 4px;
    background: var(--vp-c-bg);
    color: var(--vp-c-accent);
    font-size: 0.95rem;
    cursor: pointer;

    &:hover {
      background: var(--vp-c-accent-bg);
      color: #fff;
    }
  }
}
</style>
