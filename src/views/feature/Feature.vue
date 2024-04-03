<template>
    <div class="route-page">
        <img id="parallax-bg" class="parallax-bg" src="@/assets/images/image_placeholder3.jpg" />
        <MinNavBar title="Featured"></MinNavBar>
        
        <div style="background: rgba(0,0,0,0.5) !important;" class="subsection subsection-head mob-center">
            <h1>{{feature.title}}</h1>
            <span class="underbar"></span>
            <p v-if="feature.subtitle">{{feature.subtitle}}</p>
        </div> 

        <WaveDivider position="bottom" foreground="#FFF" background="rgba(0,0,0,0.5)" />

        <div class="subsection mob-center slide-in-left" style="background: #FFF;">
            <p id="md-holder" style="line-height: 28px;" v-html="contentHtml">

            </p>
        </div>
    

        <Footer />
    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    import WaveDivider from '@/components/WaveDivider.vue'
    import MinNavBar from '@/components/MinNavBar.vue'
    import featureList from '@/content/features.json'

    export default {
        components: {
            Footer,
            WaveDivider,
            MinNavBar
        },
        data: function(){
            return {
                contentHtml: ""
            }
        },
        computed: {
            feature(){
                for(let i=0;i<featureList.length;i++){
                    if(featureList[i].id==this.$route.params.featureId) return featureList[i];
                }
                return {
                    title: "Not Found"
                };
            }
        },
        mounted: function(){
            let element = document.getElementById("parallax-bg");
            window.addEventListener('scroll', function(){
                element.style.transform = `scale(${1+Math.min(1,0.1 * window.scrollY/window.innerHeight)})`;
            });
            // eslint-disable-next-line no-undef
            this.contentHtml = markdownit().render(this.feature.descriptionMarkdown)
        }
    }
</script>

<style scoped>
    .parallax-bg{
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: -1;
        object-fit: cover;
        object-position: center;
        top: 0;
        transform: scale(1);
    }

    .cards-holder{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .mcard{
        margin: 16px 16px 0px 0px;
        flex-grow: 1;
        max-width: calc(50% - 16px);
    }

    @media screen and (max-width: 840px) {
        .cards-holder{
            flex-direction: column;
            align-items: center;
        }
        .mcard{
            margin: 16px 0px 0px 0px;
            max-width: 540px;
            width: 100%;
        }
    }
</style>