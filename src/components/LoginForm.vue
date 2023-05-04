<template>
  <form @submit.prevent="login">
    <h1>Sign In</h1>
    <div class="email">
      <span class="material-symbols-rounded user">
        person
      </span>
      <input type="email" name="email" v-model="email" placeholder="e-mail" required>
    </div>
    <div class="password">
      <span class="material-symbols-rounded pass">
        visibility
      </span>
      <input type="password" name="password" v-model="password" placeholder="password" required>
      <div class="info">
        <span class="material-symbols-rounded info">
          info
        </span>
      </div>
    </div>
    <div>
      <button type="submit">LETS ' GO
        <span class="material-symbols-rounded arrow">
          play_arrow
        </span>
      </button>
    </div>
    <p>Don't have an account ?<a href="/about"> register now</a> </p>
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

<style scoped>
form h1 {
  text-align: center; 
  font-style: italic; 
  color: #9C9C9C;
  font-weight: 400; 
  font-size: 20px;
  padding: 15px; 
}

form div {
  justify-content: center;
  padding: 0 0px;
  display: flex;
}

form div .user, form div .pass {
  background-color: #FF0044;
  border-radius: 2px;
  padding: 5px 10px;
  user-select: none;
  font-size: 22px;
  color: #fff;
}

form div input {
  background-color: #272727;
  border-radius: 0 5px 5px 0;
  min-width: 200px;
  padding: 10px;
  border: none;
}

form div .info {
  user-select: none;
  position: absolute;
  color: #ffffff;
  font-size: 16px;
  margin-left: 10px;
  margin: 12px 0 0 125px;
}

form div button {
  border: 1px solid #FF0044;
  background-color: #272727;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  font-style: italic;
  font-weight: bold;
  margin-top: 25px;
  cursor: pointer;
  color: #fff;
  display: flex;
  border: none;
}

form div .arrow {
  margin-left: 10px;
  user-select: none;
  color: #ffffff;
  font-size: 16px;
}

form button:hover {
  background-color: #FF0044;
  color: #fff;
  box-shadow: 0 0 10px 1px #fff;
}

form p {
  padding: 30px;
  color: #9C9C9C;
  text-align: center;
  font-size: 12px;
}

form p a {
  color: #9C9C9C;
  font-weight: bold;
}


form .password {
  margin-top: 25px;
}


</style>