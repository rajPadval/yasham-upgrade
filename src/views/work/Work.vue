<template>
  <div class="route-page">
    <NavBar selecteditem="work" />

    <div class="subsection subsection-head mob-center">
      <h1>What Does Yasham Do?</h1>
      <span class="underbar"></span>
      <!-- <p>With our main focus on Education, we follow a five-point program.</p> -->
    </div>

    <Goals></Goals>

    <div class="subsection mob-center">
      <h2>
        <i
          class="fas fa-hands-helping text-gradient"
          style="padding-right: 16px"
        ></i
        >Our Programmes
      </h2>
      <span class="underbar"></span>
      <div class="cards-holder">
        <CardItem
          class="mcard"
          v-for="(item) in programmes"
          :route="'programmes/' + item.slug.current"
          :key="item.slug.current"
          :item="item"
        ></CardItem>
      </div>
    </div>

    <div class="subsection mob-center">
      <h2>
        <i class="fa fa-users text-gradient" style="padding-right: 16px"></i
        >Yasham Communities
      </h2>
      <span class="underbar"></span>
      <div class="cards-holder">
        <CardItem
          class="mcard"
          v-for="(item) in communities"
          :route="'communities/' + item.slug.current"
          :key="item.slug.current"
          :item="item"
        ></CardItem>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import CardItem from "@/components/CardItem.vue";
import Goals from "./Goals.vue";
import client from '../../client'
// import imageUrlBuilder from '@sanity/image-url'
// const imageBuilder = imageUrlBuilder(client);


export default {
  components: {
    NavBar,
    Footer,
    Goals,
    CardItem,
  },
  data: function () {
    return {
      programmes: [],
      communities: [],
    };
  },
  async mounted() {
    console.log("This is the mounted function.");

    const query = '*[_type == "post"]'
    const data = await client.fetch(query);
    this.programmes = data.filter(e=>e.type=='programme')
    this.communities = data.filter(e=>e.type=='community')
    console.log(data)
  },
  methods: {
    // imageUrlFor(source) {
    //   return imageBuilder.image(source);
    // },
  }
}
</script>

<style scoped>
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
</style>