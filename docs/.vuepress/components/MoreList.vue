<script setup>
// 中の箇条書きを最初の20件だけ表示し、「続きを読む」で残りを表示する
// 使い方（Markdown）:
//   <MoreList>
//
//   * 項目
//   * 項目
//
//   </MoreList>
import { onMounted, ref } from 'vue'

const LIMIT = 20 // 変える場合は下の CSS の n + 21 も合わせて変更

const root = ref(null)
const open = ref(false)
const rest = ref(0)

onMounted(() => {
  const items = root.value?.querySelectorAll(':scope > ul > li') ?? []
  rest.value = Math.max(0, items.length - LIMIT)
})
</script>

<template>
  <div ref="root" class="more-list" :class="{ open }">
    <slot />
    <p v-if="rest > 0" class="more-list-toggle">
      <a href="#" role="button" :aria-expanded="open" @click.prevent="open = !open">
        {{ open ? '閉じる' : `続きを読む（ほか ${rest} 件）` }}
      </a>
    </p>
  </div>
</template>

<style lang="scss">
// 21件目以降を隠す（JavaScript が動く前から隠れるよう CSS で指定）
.more-list:not(.open) > ul > li:nth-child(n + 21) {
  display: none;
}

.more-list-toggle {
  margin-top: 0.5rem;
}
</style>
