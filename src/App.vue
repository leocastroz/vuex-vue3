<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import MinWallpaper from './components/MinWallpaper.vue'
import DevProfile from './components/DevProfile.vue'
</script>

<template>
  <header>
    <div class="container">
      <div class="child">
        <MinWallpaper />
        <LoginForm />
        <RegisterForm v-if="false" />
        <DevProfile />
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
  background-image: url('./assets/wallpaperSpace.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-clip: content-box;
  background-size: civer;
  justify-content: center;
  align-items: center;
}
.child {
  min-width: 330px;
  border-radius: 10px;
  background-color: #1D1D1D;
}
</style>