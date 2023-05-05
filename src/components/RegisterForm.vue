<template>
  <form @submit.prevent="register">
    <div class="email">
      <span class="material-symbols-rounded user">
        person
      </span>
      <input type="email" name="email" v-model="email" placeholder="e-mail">
    </div>
    <div class="password">
      <span class="material-symbols-rounded pass">
        visibility
      </span>
      <input type="password" name="password" v-model="password" placeholder="password">
    </div>
    <div>
      <button type="submit">Register
        <span class="material-symbols-rounded arrow">
          play_arrow
        </span>
      </button>
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
<style scoped>
form div {
  justify-content: center;
  padding: 0 0px;
  display: flex;
  margin-top: 30px;
}

form div .user,
form div .pass {
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

form div button {
  border: 1px solid #FF0044;
  background-color: #272727;
  margin: 5px 0 30px 0;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  font-style: italic;
  font-weight: bold;
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
  box-shadow: 0 0 10px 1px #fff;
  background-color: #FF0044;
  color: #fff;
}

form .password {
  margin-top: 25px;
}
</style>
