<template>
  <div style="width: 100%; height: 100%; background: #000">
    <!-- <WaveDivider
      style="position: absolute; width: 100%"
      position="top"
      foreground="gradient"
      background="transparent"
    /> -->
    <!-- <div class="goals-inner" style="padding-top: 32px"> -->
      <PhotoGallery :images="images" />
      <!-- <WaveDivider
        position="top"
        foreground="#FFF"
        background="transparent"
      /> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import WaveDivider from "@/components/WaveDivider.vue";
import PhotoGallery from "../../components/PhotoGallery.vue";
import client from '../../client';
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(client);

export default {
  components: {
    // WaveDivider,
    PhotoGallery,
  },
  methods: {
    
  },
  data: function () {
    return {
      currentGoal: 0,
      images: [],
    };
  },
  mounted: async function () {
    const query = `*[_type == 'whatWeDo']`
    const response = await client.fetch(query)
    console.log(response)
    this.images = response.map(e=> {
      // console.log(imageBuilder.image(source))
      return imageBuilder.image(e.image);
    })
    console.log(this.images)
  },
};
</script>

<style scoped>

.goals-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  position: absolute;
}

.goals-inner {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 0;
  min-height: 256px;
}

.slide-out {
  animation: slide-out 0.2s;
  animation-fill-mode: forwards;
}

.slide-in {
  animation: slide-in 0.2s;
  animation-fill-mode: forwards;
}

.fade-out {
  animation: fade-out 0.2s;
  animation-fill-mode: forwards;
}

.fade-in {
  animation: fade-in 0.2s;
  animation-fill-mode: forwards;
}

.carousel-select {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
}

.carousel-select span {
  display: block;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 16px;
  margin: 0px 8px;
  opacity: 0.5;
  transform: scale(0.75);
  cursor: pointer;
  transition: all 0.25s;
}

.carousel-select span[selected] {
  opacity: 1;
  transform: scale(1);
}

#goal-animator button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid white;
  position: relative;
  font-weight: 600;
  font-size: 2em;
  background-image: none;
  opacity: 0.3;
  /* background-color: transparent; */
  color: black;
  transition: all 0.4s ease-in-out;
  /* top: 150px; */
  cursor: pointer;
  z-index: 2;
}

#goal-animator button:hover {
  background-image: linear-gradient(90deg, rgb(210, 210, 210), #ffffff);
  opacity: 0.7;
  color: #f76f02;
}

.prev {
  /* left: 0; */
  right: 45%;
}
.next {
  /* right: -20px; */
  left: 45%;
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