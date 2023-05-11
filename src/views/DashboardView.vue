<template>
    <div>  
      <div class="spiner" v-if="isLoading">
        <div class="lds-ripple"><div></div><div></div></div>
        carregando
      </div>
      
      <div class="body" :class="{ 'section' : isSection }">

        <div class="spiner-logout prefect" v-if="isLoadingLogout">
          <div class="lds-ripple"><div></div><div></div></div>
          saindo
        </div>

        <div class="container">
          <p>🎉 Bem-vindo</p>
          <span @click="logoutHome">
            <a>sair</a>
            <span class="logout">
              <img src="../assets/logout.svg" alt="">
            </span>
          </span>
        </div>
        
        <section class="dev">
          <p><span>👻</span> Olá visitante, você está em um portfólio !</p>
          <p class="biografia">
            desenvolvido por <span>Leonardo Castro</span>, um projeto
            com uma finalidade bastante simples. Passar de maneira rápida,
            simples e clara o meu trabalho, e o que eu posso fazer.
          </p>
        </section>

        <section class="dev-1">
          <p class="atention"><span>🚨</span> ATENÇÃO !</p>
          <p class="message">
            -> ao se "cadastrar" ou "fazer login" não será guardado estes dados em um "DB"
            este processo e feito apenas para simular um login e um cadastro. Utilizando
            a "store" do vue.js para guardar os dados. Óbvio que seu navegador irá guarda 
            todos os registros que fizer.

            <br>
            <br>
            Então fique tranquilo, crie quantos cadastros quiser, e faça login com eles.
          </p>
        </section>

      </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import router from '@/router/index.js'

export default {
  setup() {
    let timeoutId
    const isLoading = ref(true)
    const isSection = ref(false)
    const isLoadingLogout = ref(false)

    onMounted(() => {
      timeoutId = setTimeout(() => {
        isLoading.value = false
        isSection.value = true
      }, 4000)
    });

    onUnmounted(() => {
      clearTimeout(timeoutId)
    });



    return {
      isLoading,
      isSection,
      isLoadingLogout,
    };
  },
  methods: {
    logoutHome() {
      console.log('saindo')
      this.isLoadingLogout = true
      setTimeout(() => {
   
        router.push('/') 
    }, 3000)
    }
  }
}
</script>

<style scoped>
.dev {
  top: 80px;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.dev-1 {
  top: 350px;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.dev-1 .atention {
  font-size: 18px;
  color: #FF0044;
  font-weight: bold;
}

.dev-1 .message {
  max-width: 330px;
  font-size: 14px;
  text-align: justify;
  margin-top: 20px;
  line-height: 1.6;
  font-weight: 400;
  color: #b0b0b0;
}

.dev .biografia {
  text-align: justify;
  max-width: 330px;
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.8;
  font-weight: 400;
  color: #b0b0b0;
}

.dev .biografia span {
  color: #ff366c;
  font-size: 13px;
}

.dev p {
  font-weight: 500;
  color: #fff;
  padding: 20px;
  font-size: 18px;
}
.dev p span {
  font-size: 30px;
  margin-right: 5px;
}
.container {
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  background-color: #000000;
  border-bottom: 1px solid #FF0044;

}

.container span {
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}

.container span img {
  width: 20px;
  margin-left: -20px;
}
.container a, .container p {
  color: #ffffff;
  text-decoration: none;
  padding: 0 20px;
}

div .body {
  opacity: 0;
}

div .section {
  top: 0;
  left: 0;    
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(125deg, #000000 80%, #390815 100%);
  color: #ffffff;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

div .spiner {
  display: flex;
  flex-direction: column;
  color: #ffffffa5;
}

div .spiner-logout {
  display: flex;
  flex-direction: column;
  color: #ffffffa5;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  background-color: transparent;
}
.lds-ripple div {
  position: absolute;
  border: 5px solid #FF0044;
  
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}


.prefect {
  top: 0;
  left: 0;    
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #161616e2;
  z-index: 999;
}


div {
    top: 0;
    left: 0;    
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #16161676;
}

</style>