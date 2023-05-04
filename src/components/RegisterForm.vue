<template>
    <form @submit.prevent="register">
      <div>
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </template>
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        this.$store.dispatch('register', { email: this.email, password: this.password });
      }
    }
  };
  </script>