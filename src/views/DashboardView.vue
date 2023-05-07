<template>
    <div>
        <div class="top-side">
            <p>Bem-vindo </p>
            <!-- <p>leo</p> -->
            <RouterLink to="/">
                Logout
            </RouterLink>
        </div>
         <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style scoped>

div {
    top: 0;
    left: 0;    
    position: absolute;
    display: inline-block;
    width: 100vw;
    height: 100vh;
    background-color: rgb(22, 22, 22);
}

.top-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    height: 8%;
    background-color: red;
}

.top-side p, .top-side a {
    padding: 0 30px;
    text-decoration: none;
    color: #fff;
}

</style>