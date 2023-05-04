<template>
    <div>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
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
        if (this.email === 'usuario@exemplo.com' && this.password === 'senha123') {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify({ email: this.email }));
  
          if (this.$store) {
            this.$store.commit('setLoggedIn', true);
            this.$store.commit('setUser', { email: this.email });
          }

          this.$router.push('/area-restrita');
        } else {
          console.log('Credenciais inválidas');
        }
      }
    }
  };
  </script>
  