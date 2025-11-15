<template>
  <div>
    <SiteHeader />
    <NavigationBar />
    <MobileNav />
    <main>
      <aside id="sidebarA">
        <SidebarResources />
      </aside>
      <section>
          <router-view />
      </section>
      <aside id="sidebarB">
        <SidebarPreparation />
      </aside>
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
