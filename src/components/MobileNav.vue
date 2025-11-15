<template>
  <nav class="mobile-nav">
    <button class="menu-btn" @click="toggleMenu" aria-label="Toggle menu">
      <span :class="['bar', { open: isOpen }]"></span>
      <span :class="['bar', { open: isOpen }]"></span>
      <span :class="['bar', { open: isOpen }]"></span>
    </button>
    <Transition name="slide">
      <ul v-if="isOpen" class="menu-list">
        <li v-for="link in navLinks" :key="link.path">
          <router-link :to="link.path" @click="closeMenu">{{ link.name }}</router-link>
        </li>
      </ul>
    </Transition>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import { navLinks } from '../navigation.js'
const isOpen = ref(false)
const toggleMenu = () => isOpen.value = !isOpen.value
const closeMenu = () => isOpen.value = false
</script>

<style scoped>

</style>