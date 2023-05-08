<template>
    <div>  
      <div class="spiner" v-if="isLoading">
        <div class="lds-ripple"><div></div><div></div></div>
        carregando
      </div>

      
      <div class="body" :class="{ 'section' : isSection }">
        <div class="container">
          <p>Welcome</p>
          <a href="/" @click="logoutHome">Logout</a>
        </div>
        
        <section class="dev">
          <p>Under development</p>
          <img src="../assets/memoji-girl.png" alt="" width="200">
        </section>
        
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
  // methods: {
  //   logoutHome() {
  //     setTimeout(() => {
  //       this.isLoadingLogout = true
  //       console.log('teste')
  //   }, 1500)
  //   }
  // }
}
</script>

<style scoped>
.dev {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.dev img {
  background-color: #d242d5;
  background: linear-gradient(170deg, #2e0f2e 1%, #d242d5 80%);
  border-radius: 100%;
  box-shadow: 0 0 300px 5px  #d242d5;
}
.dev p {
  font-weight: bold;
  color: #d242d5;
  padding: 20px;
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
  background-color: #d242d5;
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
  background-color: #212121;
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