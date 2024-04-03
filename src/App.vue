<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
</script>

<style>
    html,
    body {
        margin: 0;
        height: 100%;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        background: #FFF;
    }

    #app{
        width: 100%;
        height: 100%;
    }

    * {
        box-sizing: border-box;
        position: relative;
        /* z-index: 1; */
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .route-page{
        width: 100%;
        height: 100%;
    }

    :root {
        --color-primary: #f76f02;
        --color-accent: #fff171;
        --color-gradient: linear-gradient(90deg, #d5420f, #fe8a00);
    }

    .subsection{
        width: 100%;
        background: #FFF;
        padding: 64px 180px;
        transition: all 0.25s;
    }

    .subsection-head{
        background: linear-gradient(90deg,#d5420f,#fe8a00) !important;
        color: #FFF;
    }

    .underbar{
        width: 96px;
        height: 4px;
        background: var(--color-gradient);
        display: inline-block;
        margin-bottom: 16px;
        border-radius: 0px 4px 0px 4px;
    }

    .subsection-head .underbar{
        background: #FFF;
    }

    .text-gradient{
        background: var(--color-gradient);
        color: inherit;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .ylink{
        color: var(--color-primary);
        transition: all 0.25s;
        opacity: 1;
    }

    .ylink:hover{
        opacity: 0.5;
    }

    .ylink:active{
        opacity: 0.8;
    }

    .pcardlist{
        width: 100%;
        overflow-x: hidden;
        padding: 16px;
        display: flex;
        flex-direction: row;
        touch-action: pan-y;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.25s;
        transition-property: opacity, transform;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
        transform: translateY(-96px);
    }

    .yt-embed{
        display: block;
        border: none;
        width: 100%;
        aspect-ratio: 1.75;
        max-width: 720px;
    }

    @media screen and (max-width: 1280px) {
        .subsection{
            padding: 48px 64px;
        }
        .pcontainer{
            padding: 0px 96px;
        }
        .popup-page{
            padding: 48px 96px;
        }
    }

    @media screen and (max-width: 1280px) {
        .subsection{
            padding: 24px 32px;
        }
        .subsection.mob-center{
            text-align: center;
        }
    }
    
</style>