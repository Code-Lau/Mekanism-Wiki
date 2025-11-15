<script setup>

</script>

<template>
  <header>
    <a href="../../../index.html" class="logo">MEKANISM</a>
    <div class="nav-menu">
      <a href="">HOME</a>
      <a href="">ABOUT</a>
      <a href="">GUIDE</a>
      <a href="">DOWNLOAD</a>
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
  font-size: 48px;
}
</style>