<script setup>

</script>

<template>
  <div class="home-wrapper">
    <main>
      <section class="hero-section">
        <figure>
            <img src="../assets/images/variousmachines.webp" alt="A picture of various Mekanism machines">
            Your browser does not support the video tag
        </figure>
        <div class="hero-text">
          <h1>WHY USE MEKANISM?</h1>
          <p>
            Mekanism is all about automation and aims to make your resources worth more,
            cut down on base game grinds and to offer a variety of personal tools.
            Mekanism offers a jetpack, a robot companion, an everything-in-one super tool,
            a meka suit and much more. If you would like a preview of whats to come, check out
            the preview video. To learn how to make these tools and more, check out our guide section!
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