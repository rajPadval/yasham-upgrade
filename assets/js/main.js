let PopupList = {};
PopupList.activePopups = [];

PopupList.push = function(type){
    let ind = this.activePopups.indexOf(type);
    if(ind!=-1)
        this.activePopups.splice(ind,1);
    this.activePopups.push(type);
    document.querySelector("body").style.overflowY = "hidden";
}

PopupList.pop = function(){
    this.activePopups.pop();
    if(this.activePopups.length==0){
        document.querySelector("body").style.overflowY = "scroll";
    }
}

function toggleNav(){
    var navholder = document.getElementById("navholder");
    navholder.setAttribute("mnav-active", navholder.getAttribute("mnav-active")=="true" ? "false" : "true")
}

let animateScroll = function(element, position, velocity){
    if(velocity==0) return;
    let cPosition = element.scrollLeft;
    velocity*=10

    let _animateScroll = function(){
        cPosition+=velocity;
        element.scrollLeft = cPosition
        if(velocity>0 && cPosition>=position){
            element.scrollLeft = position;
        }else if(velocity<0 && cPosition<=position){
            element.scrollLeft = position;
        }
        else
        setTimeout(_animateScroll,10);
    }
    _animateScroll();
}

class SimpleCarousel{
    constructor(parent){
        this.parent = parent;
        this.mousedown = false;
        this.initalX = 0;
        this.initalScroll = 0;
        this.sensitivity = 1.2;
        this.itemWidth = parent.firstElementChild.clientWidth+16;
        this.startTime = 0;
        parent.addEventListener("pointerdown",(event)=>{
            this.mousedown = true;
            this.initalX = event.clientX;
            this.initalScroll = parent.scrollLeft;
            this.itemWidth = parent.firstElementChild.clientWidth+16;
            this.startTime = new Date().getTime()
        })
        parent.addEventListener("pointermove",(event)=>{
            if(this.mousedown){
                parent.scrollLeft = (this.initalScroll-(event.clientX-this.initalX));
            }
        })
        document.addEventListener("pointerup",(event)=>{
            this.mousedown = false;
            let itemWidth = this.itemWidth;
            let sl = parent.scrollLeft;
            let timeDiff = new Date().getTime()-this.startTime;
            let velocity = (sl-this.initalScroll)/timeDiff;
            sl = Math.round(sl/itemWidth+velocity)*itemWidth;
            velocity = Math.max(Math.abs(velocity),1.5)*Math.sign(velocity)
            animateScroll(parent,sl,velocity);            
        })
    }

}

document.addEventListener('DOMContentLoaded',()=>{
    let app = new Vue({
        el: '#vue-root',
        data: {
            content: {
                work: {},
                communities: {}
            }
        }
    });

    app.$root.$emit("showLoader");

    fetch('assets/content/main.json')
    .then(res=>res.json())
    .then(data=>{
        app.content = data;
        app.$root.$emit("hideLoader");
        
        if(window.postLoad){
            setTimeout(window.postLoad,100);
        }
    })
    .catch(err=>{
        console.log(err);
        app.$root.$emit("hideLoader");
        if(window.postLoad){
            setTimeout(window.postLoad,100);
        }
    })

    ScrollReveal().reveal('.scroll-reveal',{
        delay: 400,
        distance: '32px'
    });
    
});

Vue.component('nav-holder', {
    data: function () {
      return {

      }
    },
    props: ["selecteditem"],
    template: `
        <div id="navholder" mnav-active="false">
            <div id="navbar">
                <a href="https://yashamfoundation.org"><img class="navlogo" src="./assets/images/logo_icon.png" /></a>
                <a v-bind:selected="selecteditem=='contact'" href="contact.html" class="navbtn">Contact</a>
                <a v-bind:selected="selecteditem=='support'" href="support-us.html" class="navbtn">Support Us</a>
                <a v-bind:selected="selecteditem=='impact'" href="our-impact.html" class="navbtn">Our Impact</a>
                <a v-bind:selected="selecteditem=='work'" href="our-work.html" class="navbtn">What We Do</a>
                <a v-bind:selected="selecteditem=='about'" class="navbtn" href="about.html">About Us</a>
                <a v-bind:selected="selecteditem=='home'" href="index.html" class="navbtn">Home</a>
                <a class="mnavbtn" onclick="toggleNav()">
                    <img inactive width="48" src="assets/images/ic_mnav.png" />
                    <img active width="48" src="assets/images/ic_mnav_close.png" />
                </a>
            </div>
            <div id="mnav">
                <a href="index.html" class="mnav-item">Home</a>
                <a class="mnav-item" href="about.html">About Us</a>
                <a href="our-work.html" class="mnav-item">What We Do</a>
                <a href="our-impact.html" class="mnav-item">Our Impact</a>
                <a href="support-us.html" class="mnav-item">Support Us</a>
                <a href="contact.html" class="mnav-item">Contact</a>
            </div>
        </div>`
});

Vue.component('footer-holder', {
    data: function () {
      return {}
    },
    template: `
        <div id="footer">
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
                    <span><i class="far fa-envelope" style="display: inline-block; width: 32px;"></i> info<wbr>@yasham<wbr>foundation<wbr>.org</span>
                    <span><i class="fa fa-phone" style="display: inline-block; width: 32px;"></i> +91 9920471772</span>
                </div>
            </div>
            <div class="footer-bottom">&copy; Yasham Foundation 2021 | Developed by <a href="https://github.com/Akharote1">Aditya Kharote</a></div>
        </div>`
});

Vue.component('loading-dialog', {
    data: function () {
        return {
            isShowing: true,
            options: {
                text: "Loading"
            }
        }
    },
    methods: {
    },
    mounted: function(){
        this.$root.$on("showLoader",text=>{
            this.options.text = text;
            this.isShowing = true;
        });
        this.$root.$on("hideLoader",options=>{
            this.isShowing = false;
        });
    },
    template: `
    <div v-if="isShowing" class="loading-popup">
        <div class="loading-card">
            <img class="loading-logo" src="./assets/images/logo_icon.png" />
            <div class="loader" style="margin-top: 32px;"></div>
        </div>
    </div>
    `
});

Vue.component('gallery-popup', {
    data: function () {
        return {
            isShowing: false,
            options: {
                data: [],
                index: 0
            }
        }
    },
    methods: {
        previous(){
            if(this.options.index-1<0){
                this.options.index = this.options.data.length-1;
            }else{
                this.options.index--;
            }
        },
        next(){
            if(this.options.index+1>=this.options.data.length){
                this.options.index = 0;
            }else{
                this.options.index++;
            }
        },
        close(){
            this.isShowing = false;
            PopupList.pop();
        }
    },
    mounted: function(){
        this.$root.$on("showGallery",(data, index)=>{
            this.options.data = data;
            this.options.index = index;
            this.isShowing = true;
            PopupList.push("gallery");
        });
        this.$root.$on("hideGallery",_=>{
            this.close();
        });
    },
    template: `
    <transition name="fade-in">
        <section v-if="isShowing==true" id="gallery-popup" class="overlay-window gallery-popup container">
            <div class="gallery-popup-img">
                <img v-bind:src="options.data[options.index].source" id="gallery-cimage" />
            </div>
            <span style="margin-top: 16px" v-if="options.data[options.index].caption!=''">{{options.data[options.index].caption}}</span>
            <div style="display: flex;">
                <div class="gallery-popup-nav" v-on:click="previous" id="gallery-left"><i style="font-size: 28px; padding-top: 4px;" class="fa fa-chevron-left"></i></div>
                <div class="gallery-popup-nav" v-on:click="close" id="gallery-exit"><i style="font-size: 28px; padding-top: 4px;" class="fa fa-times"></i></div>
                <div class="gallery-popup-nav" v-on:click="next" id="gallery-right"><i style="font-size: 28px; padding-top: 4px;" class="fa fa-chevron-right"></i></div>
            </div>
            
        </section>
    </transtion>
    `
});

Vue.component('work-view-page', {
    data: function () {
        return {
            isShowing: false,
            workData: {},
            markdownHTML: ""
        }
    },
    methods: {
        close(){
            this.isShowing = false;
            this.isLoading = false;
            PopupList.pop();
        }
    },
    mounted: function(){
        this.$root.$on("showWorkPage",(data)=>{
            this.workData = data;
            this.isShowing = true;
            PopupList.push("work");
            this.markdownHTML = window.markdownit().render(data.descriptionMarkdown);
            setTimeout(()=>{
                new SimpleCarousel(document.getElementById("work-gallery-carousel"));
            },100);
            
        });
        this.$root.$on("hideWorkPage",_=>{
            this.close();
        });
    },
    template: `
    <transition name="popup-in">
        <div v-if="isShowing" class="work-popup-page">
            <div style="width: 100%; display: flex; align-items: flex-start; flex-direction: column; background: var(--color-gradient); color: #FFF;">
            <img style="margin: 16px; padding: 12px; align-self: flex-start" class="popup-close" v-on:click="close" src="./assets/images/arrow_back.png" />
            
            <div class="pcontainer slide-in-enter" style="display: flex; flex-direction: column; align-items: flex-start;">
                <span style="font-size: 32px; font-weight: 700; text-align: left;">{{workData.title}}</span>
                <span style="margin-top: 16px; background: #FFF;" class="underbar"></span>

                <p style="font-size: 16px; font-weight: 500; padding-bottom: 16px">
                {{workData.subtext}}
                </p>
            </div>
            </div>
            <div style="width: 100%;">
                <div class="custom-shape-divider-top-1625640904">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs><linearGradient id="gradient"><stop offset="0%" stop-color="#d5420f"></stop><stop offset="100%" stop-color="#fe8a00"></stop></linearGradient></defs>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#gradient)"></path>
                    </svg>
                </div>
            </div>
            

            <div class="pcontainer slide-in-enter" style="text-align: left; color: #FFF; margin-bottom: 32px">
                <div style="padding: 32px 0px" class="work-popup-header-md" v-html="markdownHTML"></div>
                <div id="work-gallery-carousel" class="work-gallery-carousel">
                    <div v-for="(image, index) in workData.gallery" class="work-gallery-item">
                        <img v-on:click="$root.$emit('showGallery', workData.gallery, index)" v-bind:src="image.source" />
                    </div>
                </div>
            </div>
        </div>
    </transition>
    `
});