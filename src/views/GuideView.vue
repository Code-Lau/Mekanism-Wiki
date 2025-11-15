<script setup>

</script>

<template>
  <main class="wrapper">
    <section class="container">
      <h1>Here's a list of our guides to help you get started!</h1>
      <div>
        <router-link to="/getting-started"><h1>Getting Started</h1></router-link>
        <router-link to=""><h1> Processing</h1></router-link>
        <router-link to=""><h1>Automation</h1></router-link>
        <router-link to=""><h1>Reactors</h1></router-link>
        <router-link to=""><h1>End Game</h1></router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  padding: 0;
}
</style>