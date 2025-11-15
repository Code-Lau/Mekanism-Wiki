<script setup>

</script>

<template>
  <footer>
    <div>
      <a href="mailto:laurenleighwoods@gmail.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-envelope"></i>
        info@mekanism.com
      </a>
    </div>
    <ul class="social-icons">
      <li>
        <a href="https://x.com/aidancbrady" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/aidancbrady" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/aidancbrady/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  background: #162844;
  font-size: 17px;
}

footer ul {
  display: flex;
  flex-direction: row;
}

footer ul li {
  margin: 8px;
}

.social-icons, footer div a {
  font-size: 30px;
}

.social-icons, footer div a, .logo, .nav-menu {
  padding: 15px;
}
</style>