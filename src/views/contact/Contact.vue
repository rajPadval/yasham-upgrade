<template>
    <div class="route-page">
        <NavBar selecteditem="contact" />
        
        <div class="subsection subsection-head mob-center">
            <h1>Contact Us</h1>
            <span class="underbar" style="background: #FFF;"></span>
        </div>

        <WaveDivider position="top" foreground="gradient" background="#FFF" />

        <div class="subsection mob-center slide-in-left" style="background: #FFF; min-height: calc(100% - 84px);">
            <div class="address-holder">
                <span style="font-size: 18px; font-weight: 600;">Yasham Foundation</span><br>
                <i class="far fa-envelope" style="display: inline-block; width: 32px; color: var(--color-primary)"></i> <a class="ylink" href="mailto:info@yashamfoundation.org">info@yashamfoundation.org</a><br>
                <i class="fa fa-phone" style="display: inline-block; width: 32px; color: var(--color-primary)"></i> <a>+91 9920471772</a><br>
                <br>
                You can also get in touch with us on our social media pages at:
                <div style="font-weight: 600; color: var(--color-primary)">
                    <a href="https://www.instagram.com/yasham_foundation/"><i class="fab fa-instagram" style="display: inline-block; width: 32px;"></i> Instagram</a><br>
                    <a href="https://www.facebook.com/101851225485402/posts/104813755189149/"><i class="fab fa-facebook" style="display: inline-block; width: 32px;"></i> Facebook</a><br>
                    <a href="https://www.linkedin.com/company/yasham-foundation"><i class="fab fa-linkedin" style="display: inline-block; width: 32px;"></i> LinkedIn</a><br>
                    <a href="https://twitter.com/YashamFoundati2?s=09"><i class="fab fa-twitter" style="display: inline-block; width: 32px;"></i> Twitter</a><br>
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

    export default {
        components: {
            NavBar,
            Footer,
            WaveDivider
        }
    }
</script>

<style>
    .address-holder{
        line-height: 28px;
    }
</style>