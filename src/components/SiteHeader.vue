<script setup>

</script>

<template>
  <header>
    <router-link to="/home" class="logo">MEKANISM</router-link>
    <div class="nav-menu">
      <router-link to="/home">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/guide">GUIDE</router-link>
      <router-link to="/item-list">ITEMS</router-link>
      <router-link to="/downloads">DOWNLOAD</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 10px;
  background-color: #162844;
  position: relative;
}

.logo {
  font-size: 64px;
  font-weight: 700;
  color: white;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  gap:15px;
  margin-top:15px;
  padding: 10px;
  background-color: #162844;
  position: relative;
  font-weight: 700;
  color:white;
  font-size: 40px;
}
</style>