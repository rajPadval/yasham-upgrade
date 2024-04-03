<template>
    <div id="navbar">
        <a class="navback" v-on:click="$router.back()"><img src="../assets/images/ic_mnav_close.png" /></a>
        <router-link to="/"><img class="navlogo" src="../assets/images/logo_icon.png" /></router-link>
        <div class="nav-title">{{title || "Yasham Foundation"}}</div>
    </div>
</template>

<script>
    export default {
        name: 'MinNavBar',
        props: {
            title: String
        }
    }
</script>

<style scoped>
    #navbar{
        width: 100%;
        height: 84px;
        padding: 0px 20px;
        transition: all 0.25s;
        z-index: 999;
        color: #FFF;
        /* background: rgba(0,0,0,0.5); */
        background: var(--color-gradient);
        display: flex;
        flex-direction: row;
    }

    .navlogo{
        height: 84px;
        padding: 16px;
        filter: saturate(0) brightness(1000);
    }

    .navback{
        height: 84px;
        padding: 20px 20px 20px 20px;
        filter: saturate(0) brightness(1000);
        position: absolute;
        right: 0;
        cursor: pointer;
    }

    .navback img{
        height: 100%;
        border-radius: 50%;
        padding: 4px;
        transition: all 0.25s;
    }

    .navback img:hover{
        background: #FFFFFF20;
    }

    .nav-title{
        height: 84px;
        line-height: 84px;
        font-size: 20px;
        font-weight: 300;
    }

    @media screen and (max-width: 960px) {
        #navbar{
            padding: 0px 32px;
        }
    }

    @media screen and (max-width: 840px) {
        #navbar{
            padding: 0px 0px;
        }
        .nav-title{
            font-size: 16px;
        }
    }
</style>