<template>
    <div class="route-page">
        <NavBar selecteditem="impact" />
        
        <div class="subsection subsection-head mob-center">
            <h1>Our Impact</h1>
            <span class="underbar"></span>
        </div>

        <WaveDivider position="top" foreground="gradient" background="#F5F5F5" />

        <div class="subsection mob-center" style="background: #F5F5F5;">
            <h2><i class="fa fa-users text-gradient" style="padding-right: 16px;"></i>Success Stories</h2>
            <span class="underbar"></span>
            <div class="cards-holder">
                <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px; font-weight: 500">
                    <success-stories></success-stories>
                </div>
            </div>
        </div>

        <WaveDivider position="bottom" foreground="#FFFFFF" background="#F5F5F5" />
        <div class="subsection mob-center" style="background: #FFFFFF;">
            <h2><i class="fa fa-newspaper text-gradient" style="padding-right: 16px;"></i>Yasham In The News</h2>
            <span class="underbar"></span>
            <div class="cards-holder">
                <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px; font-weight: 500">
                    <news-carousel></news-carousel>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import Footer from '@/components/Footer.vue'
    import WaveDivider from '@/components/WaveDivider.vue'
    import SuccessStories from './SuccessStories.vue'
    import NewsCarousel from './NewsCarousel.vue'

    export default {
        components: {
            NavBar,
            Footer,
            WaveDivider,
            SuccessStories,
                NewsCarousel
        }
    }
</script>

<style>
    .card-list-elevate{
        width: 100%;
        margin-top: -160px;
        transform: translateZ(2px);
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .card-elevate{
        max-width: 480px;
        width: 100%;
        background: #FFF;
        min-height: 320px;
        margin: 0px 32px;
        flex-grow: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 64px 32px;
        border-radius: 8px;
    }

    .card-elevate-icon{
        font-size: 48px; 
        color: var(--color-primary);
        padding: 32px; 
        background: #fe8a0030; 
        border-radius: 50%;
    }

    .donate-field{
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: left;
        width: 100%;
        padding: 4px 16px;
    }
    @media screen and (max-width: 960px) {
        .card-list-elevate{
            flex-direction: column;
            align-items: center;
        }

        .card-elevate{
            margin: 32px 0px;
        }
    }
</style>