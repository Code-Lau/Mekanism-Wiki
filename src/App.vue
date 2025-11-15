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
        <Transition name="fade" mode="out-in">
          <router-view />
        </Transition>
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
</script>

<style scoped>
</style>
