<template>
  <div class="about">
    <div class="center-box">
      <a href="/LoginForm">Login</a>
    </div>
  </div>
</template>

<style>
.about {
  top: 0;
  left: 0;    
  position: absolute;
  display: inline-block;
  width: 100vw;
  height: 100vh;
  background-color: #2d2d2d9b;
}

.about .center-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FF0044;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 30%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
