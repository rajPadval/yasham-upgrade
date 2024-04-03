<template>
    <div style="width: 100%;">
        <div class="nc-item" id="nc-animator">
            <div>
                <img :src="news[currentNews].image" />
            </div>
            <div class="nc-right">
                <h2>{{news[currentNews].title}}</h2>
                <span style="">
                    <span class="nc-apos">"</span>
                    {{news[currentNews].subtitle}}
                    <span class="nc-apos">"</span>
                </span>
                <p style="line-height: 28px" v-html="news[currentNews].content"></p>
            </div>
        </div>
        
        <div class="carousel-select">
            <span v-for="(news, index) in news" v-on:click="selectNews(index)" v-bind:key="index" v-bind:selected="currentNews==index"></span>
        </div>
    </div>
</template>

<script>
    let newsImages = [
        require('@/assets/images/image_placeholder3.jpg'),
        require('@/assets/images/image_placeholder2.jpg'),
        require('@/assets/images/image_placeholder3bw.jpg'),
    ]


    export default {
        components: {
        },
        methods: {
            selectNews(index){
                let ncAnimator = document.getElementById("nc-animator");
                ncAnimator.classList.remove("slide-in");
                ncAnimator.classList.add("slide-out");

                setTimeout(()=>{
                    this.currentNews = index;
                    ncAnimator.classList.remove("slide-out");
                    ncAnimator.classList.add("slide-in");
                },250);
                
            }
        },
        data: function(){
            return {
                news: [
                    {
                        title: "MUMBAI MIRROR",
                        subtitle: "Keeping their JEE, NEET dreams alive",
                        content: `
                            Yasham Foundation has always aspired to help the youth of this nation work towards a brighter future by helping them realise their dreams.\n\nAnd the same can be said when a group of students approached our Founder, Sunita Mandelia for help with finances to enrol for JEE and NEET classes. Despite not having the funds to aid the students fully, the foundation found a way to help these bright minds.\n\nAnd help came from ‘one of the foundation’s brightest students, Shivam’. Despite preparing for JEE himself he chose to help his peers by coaching them twice a week. Since then several other professionals have joined the foundation in helping these young, driven minds in coming one step closer their goals. After all, in the words of our founder, ‘the future belongs to the youths, if we nurture them, they will be the nation’s glory.’
                            `,
                        image: newsImages[0]
                    },
                    {
                        title: "THE AFTERNOON DISPATCH & COURIER",
                        subtitle: "90 underprivileged kids get Road Safety lessons",
                        content: `
                            Educating children in all aspects of life is of utmost importance as they are the future of tomorrow and they can help us strive towards a better and safer tomorrow.\n\nYasham Foundation was extremely privileged and happy to collaborate with the Ministry of Road Transport and Highways for the 30th Road Safety Week campaign in February, 2019.\n\nYasham conducted a training session for children aged 6-8 on the importance of road safety; crossing along a zebra crossing, using footpaths, bus danger zones etc. This was done through various games like ‘ring and win’ and ‘wheel of safety’.\n\nEducating children in road safety is extremely important so that they are aware of rules and regulations and they can learn how to keep themselves safe, especially since a large number of children commute to and from school by walking.
                            `,
                        image: newsImages[0]
                    },
                    {
                        title: "DNA DOWNSOUTH",
                        subtitle: "Leading the way with small steps",
                        content: `
                            It is important for society to realise their privilege and help those without it and it brings Yasham great joy in facilitating this change especially when the youth of the nation choose to help their community.
                            Stuti and Ishita were two sisters who volunteered with us and set an example on how they can use their privilege to help others and fulfil their hearts. Like them we have had several more volunteers who have done their bit by making a choice to do better each day.
                            `,
                        image: newsImages[0]
                    }
                ],
                currentNews: 0
            }
        }
    }
</script>

<style scoped>
    .nc-item{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
    }

    .nc-item img{
        width: 320px;
        height: 320px;
        object-fit: cover;
        object-position: center;
        border-radius: 8px;
    }

    .nc-item p{
        color: rgba(0, 0, 0, 0.75);
    }

    .nc-right{
        margin-left: 32px;
        font-size: 14px;
    }

    .nc-apos{
        color: var(--color-primary);
    }

    .slide-out{
        animation: slide-out 0.2s;
        animation-fill-mode: forwards;
    }

    .slide-in{
        animation: slide-in 0.2s;
        animation-fill-mode: forwards;
    }

    .fade-out{
        animation: fade-out 0.2s;
        animation-fill-mode: forwards;
    }

    .fade-in{
        animation: fade-in 0.2s;
        animation-fill-mode: forwards;
    }

    .carousel-select{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 32px;
    }

    .carousel-select span{
        display: block;
        width: 12px;
        height: 12px;
        background: var(--color-primary);
        border-radius: 16px;
        margin: 0px 8px;
        opacity: 0.5;
        transform: scale(0.75);
        cursor: pointer;
        transition: all 0.25s;
    }

    .carousel-select span[selected]{
        opacity: 1;
        transform: scale(1);
    }

    @media screen and (max-width: 1080px) {
        .nc-item{
            flex-direction: column;
        }

        .nc-right{
            margin-top: 32px;
            margin-left: 0px;
        }
    }

    @keyframes slide-in {
        from {
            opacity: 0;
            transform: translateX(-128px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    @keyframes slide-out {
        from {
            opacity: 1;
            transform: translateX(0px);
        }
        to {
            opacity: 0;
            transform: translateX(128px);
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>