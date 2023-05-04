<template>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div>
        <button type="submit">Log in</button>
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
            login() {
              this.$store.dispatch('login', { email: this.email, password: this.password });
            }
          }
        };
        </script>