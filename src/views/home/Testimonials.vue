<template>
  <div class="testimonials">
    <carousel
      :autoplay="true"
      :loop="true"
      :perPage="changePerPage"
      :navigationEnabled="true"
      :paginationActiveColor="'#f76f02'"
    >
      <slide v-for="(item, index) in testList" :key="index">
        <TestimonialCard :item="item" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import TestimonialCard from "../../components/TestimonialCard.vue";
import testimonials from "@/content/testimonials.json";
import { Carousel, Slide } from "vue-carousel";
import client from "../../client";

export default {
  name: "Testimonials",
  components: {
    TestimonialCard,
    Carousel,
    Slide,
  },
  data: function () {
    return {
      perPage: 3,
      testList: testimonials,
    };
  },
  computed: {
    changePerPage() {
      let width = window.innerWidth;
      if (width < 480) return 1;
      else if (width < 768) return 2;
      else return 3;
    },
  },
  mounted: async function () {
    const query = '*[_type == "testimonial"]';
    this.testList = await client.fetch(query);
  },
};
</script>
<style>
.testimonials {
  width: 100%;
  overflow: hidden;
}
.VueCarousel .VueCarousel-navigation-button {
  color: #f76f02;
  font-size: xx-large;
  top: -150px;
}
.VueCarousel-navigation-next {
  right: 50px !important;
}

.VueCarousel-navigation-prev {
  left: 50px !important;
  margin-right: 20px;
}

.VueCarousel-wrapper {
  left: 7vw;
}
@media screen and (max-width: 1000px) {
  .VueCarousel-wrapper {
    left: 8vw;
  }
}

@media only screen and (max-width: 600px) {
  .VueCarousel-wrapper {
    text-align: center;
    left: 11vw;
  }
}
</style>
