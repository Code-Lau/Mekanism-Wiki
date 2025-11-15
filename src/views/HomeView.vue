<script setup>

</script>

<template>
  <div class="home-wrapper">
    <main>
      <section class="hero-section">
        <figure>
          <img src="../assets/images/variousmachines.webp" alt="A picture of various Mekanism machines">
        </figure>
        <div class="hero-text">
          <h1>DIVE INTO MEKANISM</h1>
          <p>
            Mekanism is an independent tech mod that brings low, mid, and high tier machinery to Minecraft.
            Mekanism aims to make your life easier with automation, 5x ore processing, nuclear reactors, robots,
            digital miners, jetpacks and many other additions. This involves a scientific and chemistry based
            approach, which if you’re not sure about, we can help you in any stage of the process.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
h1 {
  color: #162844;
}

h2 {
  color: #162844;
  margin:1em;
}

img {
  width:100%;
  border-radius: 2em;
  object-fit:contain;
  padding:8px;
}

.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  margin-top:40px;
}

.hero-text p {
  color: #162844;
  font-size: 20px;
  padding: 20px;
}

.hero-text {
  padding: 12px;
  color: #162844;
  text-align: center;
  line-height: 110%;
  font-weight: 300;
  word-spacing: 5px;
  margin: 0 8px;
}
</style>