<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main>
    <RouterView />
  </main>

  <AppFooter />
</template>

<style scoped>
main {
  min-height: 80vh; /* 푸터가 항상 아래에 있도록 최소 높이 설정 */
}
</style>
