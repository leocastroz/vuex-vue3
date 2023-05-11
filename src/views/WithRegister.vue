<template>
  <div>  
    <div class="spiner" v-if="isLoading">
      <div class="lds-ripple"><div></div><div></div></div>
      Cadastrando
    </div>    
    <div class="body" :class="{ 'section' : isSection }">
      <img src="https://pbs.twimg.com/media/Fs-nbpZXsAIexfz.png:small" alt="" width="180">
        <div class="centered">
          <p>Parabéns, você conseguiu se registrar !</p>
          <a href="/">Vamos lá - Entrar</a>
        </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
setup() {
  let timeoutId;
  const isLoading = ref(true)
  const isSection = ref(false)

  onMounted(() => {
    timeoutId = setTimeout(() => {
      isLoading.value = false
      isSection.value = true
      console.log('teste')
    }, 4000);
  });

  onUnmounted(() => {
    clearTimeout(timeoutId)
  });

  return {
    isLoading,
    isSection,
    isLoadingLogout: false
  };
},
}
</script>

<style scoped>

.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  max-width: 250px;
  height: 100px;
  background-color: #FF0044;
  background: linear-gradient(170deg, #46fa39 1%, #1a6914 80%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 0 5px;
  font-size: 15px;
}

img {
  margin-top: -280px;
}

.centered a {
  text-decoration: none;
  padding-top: 15px;
  color: #28401d;
  font-size: 13px;
  font-weight: bold;
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


div .body {
  opacity: 0;
}

div .section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #16161676;
  color: #ffffff;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

div .spiner {
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


</style>