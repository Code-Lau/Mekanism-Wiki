<script setup>

</script>

<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
  </head>
  <body>
    <header>
      <a href="index.html" class="logo">MEKANISM</a>
      <div class="nav-menu">
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">GUIDE</a>
        <a href="">DOWNLOAD</a>
      </div>
    </header>
    <main>
      <section>
        <figure>
          <img src="@/assets/images/variousmachines.webp" alt="A picture of various Mekanism machines">
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
    <footer>
    </footer>
  </body>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Saira Condensed', 'Tahoma', 'Verdana', sans-serif;
  list-style: none;
  text-decoration: none;
  color:#fff;
}

html {
  scroll-behavior: smooth;
}

/* Header */
header {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 10px;
  background-color: #162844;
  position: relative;
}

.logo {
  font-size: 4em;
  font-weight: 700;
  color: white;
  cursor: pointer;
  padding-right: 20px;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  gap:15px;
  padding: 10px 10px;
  background-color: #162844;
  position: relative;
  font-weight: 700;
  color:white;
  font-size: 48px;

}

/* Body */
img {
  width:40%;
  border-radius: 2em;
  object-fit:contain;
  padding:1em;
}

h1 {
  color: #162844;
}

h2 {
  color: #162844;
  margin:1em;
}

.hero-text p {
  color: #162844;
  font-size: 20px;
  padding: 0.5em 1em;
}

.hero-text {
  color: #162844;
  text-align: center;
  line-height: 110%;
  font-weight: 300;
  word-spacing: 5px;
  margin:1em;
}

/* Footer */
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5em;
  background: #162844;
  font-size: 17px;
}
</style>