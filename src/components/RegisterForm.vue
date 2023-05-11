<template>
  <form @submit.prevent="register" :class="{ 'loading': isLoading }">
    <MinWallpaper/>
    <h1>Registre-se aqui</h1>
    <p>
      Eu já tenho uma conta!<span @click="registerOk">  Entrar</span></p>
    <div class="email">
      <span class="user">
        <img src="../assets/person.svg" alt="person_icon">
      </span>
      <input type="email" name="email" v-model="email" placeholder="e-mail">
    </div>
    <div class="password">
      <span class="pass">
        <img src="../assets/visibility.svg" alt="eye_icon">
      </span>
      <input type="password" name="password" v-model="password" placeholder="senha">
    </div>
    <div>
      <button type="submit" :disabled="!email || !password">Registrar agora
        <span class="arrow">
          <img src="../assets/bolt.svg" alt="">
        </span>
      </button>
    </div>
  </form>
</template>
<script>
import MinWallpaper from './MinWallpaper.vue'
export default {
  components: {
    MinWallpaper
  },
  data() {
    return {
      email: '',
      password: '',
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  },
  methods: {
    register() {
      this.$store.dispatch('register', { email: this.email, password: this.password })
    },
    registerOk() {
      this.$emit('success')
    }
  },
};
</script>
<style scoped>

form {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

form.loading {
  opacity: 0;
}

form h1 {
  text-align: center; 
  font-style: italic; 
  color: #9C9C9C;
  font-weight: 400; 
  font-size: 20px;
  padding: 20px 0 5px 0; 
}

form div {
  justify-content: center;
  padding: 0 0px;
  display: flex;
}

form p {
  padding: 30px 0 30px 0;
  color: #9C9C9C;
  text-align: center;
  font-size: 12px;
}

form p span {
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
  color: #9C9C9C;
}

form div .user, form div .pass {
  background-color: #FF0044;
  border-radius: 2px;
  padding: 5px 10px;
  user-select: none;
  display: flex;
}

form div .user img, form div .pass img  {
  width: 25px;
}

form div input {
  background: rgb(0, 0, 0);
  background: linear-gradient(125deg, #000000 70%, #c6013525 100%);
  border-radius: 0 5px 5px 0;
  min-width: 200px;
  padding: 10px;
  border: none;
  color: #fff;
  outline: none;
}

form div button {
  border: 1px solid #FF0044;
  background: rgb(2,0,36);
  background: linear-gradient(125deg, #c60135ab 1%, #2b0c14 60%, #c601354a 100%);
  margin: 30px 0 30px 0;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  display: flex;
  border: none;
  transition: 300ms linear; 
}

form div .arrow {
  margin-left: 10px;
  user-select: none;
  display: flex;
}

form div .arrow img {
  width: 20px;
}

form button:hover {
  background-color: #FF0044;
  color: #fff;
  box-shadow: 0 0 20px 1px #ff00449b;
  transition: 300ms linear; 
}

form .password {
  margin-top: 25px;
}



</style>
