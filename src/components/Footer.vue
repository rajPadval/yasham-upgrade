<template>
    <div class="footer">
        <div class="footer-inner">
            <div class="footer-section">
                <h4>Links</h4>
                <div style="font-weight: 600;">
                    <a href="https://www.instagram.com/yasham_foundation/"><i class="fab fa-instagram" style="display: inline-block; width: 32px;"></i> Instagram</a>
                    <a href="https://www.facebook.com/101851225485402/posts/104813755189149/"><i class="fab fa-facebook" style="display: inline-block; width: 32px;"></i> Facebook</a>
                    <a href="https://www.linkedin.com/company/yasham-foundation"><i class="fab fa-linkedin" style="display: inline-block; width: 32px;"></i> LinkedIn</a>
                    <a href="https://twitter.com/YashamFoundati2?s=09"><i class="fab fa-twitter" style="display: inline-block; width: 32px;"></i> Twitter</a>
                </div>
            </div>
            <div class="footer-section">
                <h4>Contact Us</h4>
                <span><i class="far fa-envelope" style="display: inline-block; width: 32px;"></i> yasham<wbr>foundation<wbr>@gmail<wbr>.com</span>
                <span><i class="fa fa-phone" style="display: inline-block; width: 32px;"></i> +91 9820373390</span>
            </div>
        </div>
        <div class="footer-bottom">&copy; Yasham Foundation 2023 | Developed by <a href="https://github.com/Akharote1">Aditya Kharote</a> & <a href="https://github.com/hardikg2907">Hardik Garg</a></div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .footer{
        background: var(--color-gradient);
        padding: 32px 128px;
        padding-bottom: 16px;
        color: #FFF;
    }
    .footer a{
        transition: all 0.25s;
        font-weight: 500;
        color: rgba(255,255,255,0.8);
    }

    .footer a:hover{
        color: #FFF;
        text-decoration: none;
    }

    .footer-section{
        width: fit-content;
        margin-right: 32px;
        flex-grow: 1;
    }

    .footer-section span{
        margin-bottom: 8px;
        display: block;
    }

    .footer-section a{
        margin-bottom: 8px;
        display: block;
    }

    .footer-inner{
        width: 100%;
        display: flex;
        flex-direction: row;
        
    }

    .footer-bottom{
        border-top: solid 1px #FFFFFF40;
        padding-top: 16px;
        color: rgba(255,255,255,0.8);
        margin-top: 32px;
        text-align: center;
    }

    @media screen and (max-width: 840px){
        .footer{
            padding: 16px 48px;
        }
    }

    @media screen and (max-width: 640px){
        .footer-inner{
            flex-direction: column;
        }
    }
</style>