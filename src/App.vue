<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import MinWallpaper from './components/MinWallpaper.vue'
</script>

<template>
  <header>  
    <div class="container">
      <div class="child">
        <MinWallpaper />
        <LoginForm v-if="true" />
        <RegisterForm v-if="false" />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.container {
  display: grid;
  max-width: 100vw;
  height: 100vh;
  background-image: url('../src/assets/wallpaperSpace.svg');
  background-position: center center;
  background-repeat: no-repeat; 
  background-clip: content-box;
  background-size: cover;
  justify-content: center;
  align-items: center;
}
.child {
  min-width: 330px;
  border-radius: 10px;
  background: rgb(2,0,36);
  background: linear-gradient(125deg, #290710 1%, rgb(10, 10, 10) 80%, #290710 100%);
  box-shadow: 0 0 100px 0px #ff00005a;
}
</style>