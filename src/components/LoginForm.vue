  <template>
    <form @submit.prevent="login" :class="{ 'loading': isLoading }">
      <MinWallpaper/>
      <h1>Entrar</h1>
      <div class="email">
        <span class="user">
          <img src="../assets/person.svg" alt="">
        </span>
        <input type="email" name="email" v-model="email" placeholder="e-mail" required>
      </div>
      <div class="password">
        <span class="pass">
          <img src="../assets/visibility.svg" alt="">
        </span>
        <input type="password" name="password" v-model="password" placeholder="senha" required>
        <div v-if="userNotFound" class="info" @click="openMinModal">
          <span class="material-symbols-rounded info">
            info
          </span>
        </div>
        <div class="min-modal" v-if="minModal">
          <p>register a user</p>
        </div>
      </div>
      <div>
        <button type="submit" :disabled="!email || !password">Entrar
          <span class="arrow">
            <img src="../assets/ssid_chart.svg" alt="">
          </span>
        </button>
      </div>
      <p>Não tem uma conta? ?<span @click="sendRoute">  registre agora</span></p>
      <DevProfile />
    </form>
  </template>
  <script>
  import MinWallpaper from './MinWallpaper.vue'
  import DevProfile from './DevProfile.vue'
  export default {
    components: {
      DevProfile,
      MinWallpaper,
    },
    data() {
      return {
        email: '',
        password: '',
        minModal: false,
        isLoading: true,
      };
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    },
    computed: {
      userNotFound() {
        return this.$store.state.userNotFound
      }
    },
    watch: {
      userNotFound(newVal) {  
        if (newVal) {
          setTimeout(() => {
            this.$store.commit('clearUserNotFound')
          }, 6000)
        }
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login', { email: this.email, password: this.password })
      },
      openMinModal() {
        this.minModal = true
        setTimeout(() => {
          this.minModal = false
        }, 3000)
      },
      sendRoute() {
        this.$emit('close')
      }
    }
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
  padding: 20px; 
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
  display: flex;
}
form div .user img, form div .pass img {
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

form div input::placeholder {
  padding: 10px;
  text-align: start;
}

form div .info {
  user-select: none;
  position: absolute;
  color: #FF0044;
  font-size: 20px;
  margin-left: 10px;
  margin: 12px 0 0 125px;
  background-color: #fff;
  border-radius: 100%;
  cursor: pointer;
}

form div .min-modal {
  position: absolute;
  color: #ffffff;
  background-color: #FF0044;
  border-radius: 5px;
  min-width: 150px;
  height: 35px;
  margin: 50px 0 0 200px;
  box-shadow: 0 0 10px 0.1px#e3e3e3;
}

form div .min-modal p {
  color: #fff;
  margin: -20px 0 0 0px;
}

form div button {
  background: rgb(2,0,36);
  background: linear-gradient(125deg, #c60135ab 1%, #2b0c14 60%, #c601354a 100%);
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
  transition: 500ms linear; 
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

form p {
  padding: 30px;
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


form .password {
  margin-top: 25px;
}


</style>