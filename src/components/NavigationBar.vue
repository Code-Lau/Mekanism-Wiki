<template>
  <nav class="desktop-nav">
    <ul>
      <li v-for="link in navLinks" :key="link.path">
        <router-link :to="link.path" class="nav-item">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { navLinks } from '../navigation.js'
</script>

<style scoped>

</style>