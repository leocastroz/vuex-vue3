<template>
    <div class="wr">
        <p>Desenvolvido por:</p>
        <div>
            <div>
                <img src="../assets/profile.jpg" alt="person" width="60">
            </div>
        </div>
    </div>
</template>

<style scoped>


p {
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    text-align: center;
}

.wr {
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.wr div img {
    box-shadow: 0 0 40px 0px #ff004490;
    cursor: pointer;
    border-radius: 100%;
    margin: 20px;
}

</style>