<template>
  <div class="route-page">
    <MinNavBar title="Programmes"></MinNavBar>

    <div
      style="
        background: var(--color-gradient) !important;
        padding-top: 5px !important;
      "
      class="subsection subsection-head mob-center"
    >
      <h1>{{ programme.title }}</h1>
      <span class="underbar"></span>
      <p v-if="programme.subTitle">{{ programme.subTitle }}</p>
    </div>

    <PhotoGallery :images="images" />
    <!-- <WaveDivider
      position="bottom"
      foreground="#FFF"
      background="transparent"
    /> -->
    <div class="subsection mob-center slide-in-left" style="background: #fff">
      <p id="md-holder" style="line-height: 28px" v-html="contentHtml"></p>
      <!-- <SanityBlocks :blocks="[]" /> -->
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// import WaveDivider from "@/components/WaveDivider.vue";
import MinNavBar from "@/components/MinNavBar.vue";
import PhotoGallery from "../../components/PhotoGallery.vue";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(client);
// import {SanityBlocks} from 'sanity-blocks-vue-component'; 

export default {
  components: {
    Footer,
    // WaveDivider,
    MinNavBar,
    PhotoGallery,
    // SanityBlocks,
    // BlockContent
  },
  data: function () {
    return {
      blocks: [
        {
          _type: 'greeting', // Sanity specific prop, corresponds to the serializer name
          _key: 'example', // Sanity specific prop
          firstname: 'Foobert', // Example custom property for this block type
          lastname: 'Barson', // Example custom property for this block type
        }
      ],
      images: [],
      programme: [],
      contentHtml: ""
    };
  },
  mounted: async function () {
    // eslint-disable-next-line no-undef
    const slug = this.$route.params.programmeId;
    const query = `*[_type == "post" && slug.current == '${slug}']`;
    const programme = await client.fetch(query);
    this.programme = programme[0]
    this.contentHtml = this.programme.body
    // this.blocks = JSON.parse(this.programme.body)
    // Object.assign([],this.blocks)
    this.images = this.programme.photoGallery?.map(e=>this.imageUrlFor(e))
    // console.log(blocks)
  },
  methods: {
    imageUrlFor(source) {
      // console.log(imageBuilder.image(source))
      return imageBuilder.image(source);
    },
  }
};
</script>

<style scoped>
.parallax-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  object-fit: cover;
  object-position: center;
  top: 0;
  transform: scale(1);
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
</style>