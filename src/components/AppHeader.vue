<script setup lang="ts">
// 1. RouterLink를 import 합니다.
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/" class="logo">FOURBERRY</RouterLink>
      <nav class="navigation">
        <RouterLink to="/about">회사소개</RouterLink>
        <RouterLink to="/projects">SI/SM</RouterLink>
        <RouterLink to="/solutions">솔루션</RouterLink>
        <RouterLink to="/contact">문의하기</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #ffffff;
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: #2c3e50;
}
.navigation a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #2c3e50;
}
</style>
