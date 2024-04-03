<template>
  <div class="route-page">
    <NavBar selecteditem="home" />
    <Landing />
    <WaveDivider background="rgba(0,0,0,0.5)"></WaveDivider>
    <div class="subsection mob-center scroll-reveal">
      <h2>
        <i class="fas fa-school text-gradient" style="padding-right: 16px"></i
        >Vision & Mission
      </h2>
      <span class="underbar"></span>
      <div class="about">
        <iframe
          src="https://www.youtube.com/embed/NpEaa2P7qZI"
          title="video placeholder"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="vert-bar"></div>
        <p style="line-height: 28px">
          <b>Educate. Enlighten. Empower.</b><br />
          <!-- – a mind that challenges itself is a mind that shines through tough
          circumstances.<br />
          Our mission is to remind everyone of their humanity, to be better and
          do better every single day.<br />
          We serve to enlighten today’s minds, so they may be empowered to do
          the same for the generations to come.
          <br /><br />
          Yasham works each day to empower society holistically, through changes
          big or small. To be able to guide and assist the many promising minds
          is one of the most gratifying feelings that motivate us. We
          predominantly work in the domain of education, to sharpen young minds
          today so that they might red-pencil the labels which have been harshly
          assigned to them. Our endeavour is to provide the assistance children
          require, using the latest tools and technology, irrespective of their
          background. To achieve our vision, we play an active role as a
          mediator between a child's aspirations and the acquisition of their
          goals. -->
          Yasham works at the grassroots level with a holistic approach to
          create a tangible change in every life yasham touches upon with a
          lifelong perspective.<br />We guide, counsel, support and when
          required sponsor school/college students in the field of education.<br /> To
          achieve our mission and vision we also work in the field of health,
          creating awareness in women of their power and youth mobilization.
        </p>
      </div>
    </div>

    <Statistics />

    <div class="subsection mob-center scroll-reveal">
      <h2>
        <i class="fas fa-school text-gradient" style="padding-right: 16px"></i
        >Recent Programmes
      </h2>
      <span class="underbar"></span>
      <div class="cards-holder">
        <CardItem
          class="mcard"
          v-for="item in programmes"
          :route="'programmes/' + item.slug.current"
          :key="item.slug.current"
          :item="item"
        ></CardItem>
      </div>
      <router-link class="bigbtn" style="margin-top: 32px" to="what-we-do"
        >View More</router-link
      >
    </div>

    <WaveDivider position="bottom" foreground="#F5F5F5" background="#FFFFFF" />

    <div
      class="subsection mob-center scroll-reveal"
      style="background: #f5f5f5"
    >
      <h2>
        <i class="fas fa-school text-gradient" style="padding-right: 16px"></i
        >Testimonials
      </h2>
      <span class="underbar"></span>
      <Testimonials />
    </div>

    <Footer />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import WaveDivider from "@/components/WaveDivider.vue";
import CardItem from "@/components/CardItem.vue";
import Landing from "./Landing.vue";
import Statistics from "./Statistics.vue";
// import programmeList from "@/content/programmes.json";
import Testimonials from "./Testimonials.vue";
import client from "../../client";

export default {
  components: {
    NavBar,
    Footer,
    Landing,
    Statistics,
    WaveDivider,
    CardItem,
    Testimonials,
  },
  data: function () {
    return {
      programmes: [],
    };
  },
  async mounted() {
    const query =
      '*[_type == "post" && type=="programme"] | order(_createdAt desc)[0..2]';
    const data = await client.fetch(query);
    this.programmes = data;
    // this.programmes = data.filter(e=>e.type=='programme')
    console.log(data);
  },
};
</script>

<style>
h2 {
  text-transform: uppercase;
}
.bigbtn {
  display: inline-block;
  border-radius: 64px;
  background: var(--color-gradient);
  color: #fff;
  padding: 20px 42px;
  width: fit-content;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
}

.bigbtn:hover {
  transform: scale(1.05);
}

.bigbtn:active {
  transform: scale(0.95);
}
.vert-bar {
  width: 3px;
  /* margin-left: 10px;
        margin-right: 10px; */
  margin: auto 45px auto 45px;
  height: 310px;
  /* background-color: rgb(220, 220, 220); */
  background: linear-gradient(#d5420f, #fe8a00);
  border-radius: 4px;
}
</style>

<style scoped>
.about {
  display: flex;
}
.about iframe {
  width: 600px;
  height: 300px;
  margin-top: auto;
  margin-bottom: auto;
}
.about p {
  width: 900px;
}
.cards-holder {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.mcard {
  margin: 16px 16px 0px 0px;
  flex-grow: 1;
  max-width: calc(50% - 16px);
}

@media screen and (max-width: 840px) {
  .cards-holder {
    flex-direction: column;
    align-items: center;
  }
  .mcard {
    margin: 16px 0px 0px 0px;
    max-width: 540px;
    width: 100%;
  }
}

@media screen and (max-width: 950px) {
  .about {
    flex-direction: column;
    align-items: center;
  }
  .vert-bar {
    width: 50vw;
    /* margin-left: 10px;
        margin-right: 10px; */
    /* margin: 45px auto 45px auto; */
    margin-top: 45px;
    height: 5px;
    /* background-color: rgb(220, 220, 220); */
    background: linear-gradient(#d5420f, #fe8a00);
    border-radius: 4px;
  }
  .about p {
    text-align: center;
    width: auto;
  }
  .about iframe {
    /* width: 600px; */
    width: 70vw;
    height: 300px;
  }
}
</style>