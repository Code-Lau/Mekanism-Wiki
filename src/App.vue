<template>
  <div>
    <NavigationBar />
    <SiteHeader />
    <MobileNav />
    <main>
      <section>
        <router-view />
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import NavigationBar from "./components/NavigationBar.vue";
import MobileNav from "./components/MobileNav.vue";
</script>

<style scoped>
</style>
