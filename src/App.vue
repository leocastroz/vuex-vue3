<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
</script>
<script>
export default {
  data() {
    return {
      isLoading: true,
      loginOpen: true,
      registerClose: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500);
  },
  methods: {
    onClose() {
      this.loginOpen = false
      this.registerClose = true
    },
    onSuccess() {
      this.loginOpen = true
      this.registerClose = false
    }
  }
}

</script>

<template>
  <header>
    <div class="container">
      <div class="child" :class="{ 'loading': isLoading }">
        <LoginForm v-if="loginOpen" @close="onClose" />
        <RegisterForm v-if="registerClose" @success="onSuccess" />
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
  background-image: url('../src/assets/wallpaperSpace.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-clip: content-box;
  justify-content: center;
  background-size: cover;
  align-items: center;
  max-width: 100vw;
  height: 100vh;
  display: grid;
}

.child {
  background: rgb(2, 0, 36);
  background: linear-gradient(125deg, #290710 1%, rgb(10, 10, 10) 80%, #290710 100%);
  box-shadow: 0 0 100px 0px #ff00005a;
  transition: opacity 0.5s ease-in-out;
  border-radius: 10px;
  min-width: 330px;
  opacity: 1;
}

.child.loading {
  opacity: 0;
}
</style>