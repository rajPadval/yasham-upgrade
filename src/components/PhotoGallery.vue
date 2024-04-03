<template>
  <div style="width: 100%; height: 100%">
    <img
      v-if="images[currentGoal]"
      id="goals-bg"
      class="goals-bg"
      v-bind:src="images[currentGoal]"
      alt=""
    />
    <div id="goal-animator">
      <button
        class="prev"
        v-on:click="
          selectGoal(
            currentGoal ? (currentGoal - 1) % images.length : images.length - 1
          )
        "
      >
        &lt;
      </button>
      <button
        class="next"
        v-on:click="selectGoal((currentGoal + 1) % images.length)"
      >
        &gt;
      </button>
    </div>
    <div
      class="goals-inner"
      style="display: flex; flex-direction: column; justify-content: flex-end"
    >
      <div
        class="subsection subsection-head mob-center"
        style="background: transparent !important; color: black"
      >
        <div class="carousel-select">
          <span
            v-for="(image, index) in images"
            v-bind:key="index"
            v-bind:selected="currentGoal == index"
            v-on:click="selectGoal(index)"
          ></span>
        </div>
      </div>
      <WaveDivider
        position="bottom"
        foreground="#FFFFFF"
        background="transparent"
      />
    </div>
  </div>
</template>

<script>
import WaveDivider from "./WaveDivider.vue";

export default {
  name: "PhotoGallery",
  components: {
    WaveDivider,
  },
  props: {
    images: Array,
  },
  methods: {
    selectGoal(index) {
      let goalAnimator = document.getElementById("goal-animator");
      // console.log(index);
      let goalBg = document.getElementById("goals-bg");
      goalAnimator.classList.remove("slide-in");
      goalAnimator.classList.add("slide-out");

      goalBg.classList.remove("fade-in");
      goalBg.classList.add("fade-out");
      setTimeout(() => {
        this.currentGoal = index;
        goalAnimator.classList.remove("slide-out");
        goalAnimator.classList.add("slide-in");

        goalBg.classList.remove("fade-out");
        goalBg.classList.add("fade-in");
      }, 250);
    },
  },
  data: function () {
    return {
      currentGoal: 0,
    };
  },
  mounted: function () {
    // setInterval(()=>{
    //   this.selectGoal((this.currentGoal + 1) % this.images.length)
    // },4000)
  },
};
</script>

<style scoped>
/* h1{
        color: black;
    } */

img {
  /* object-fit: contain !important; */
}
.goals-bg {
  background-color: rgba(0, 0, 0, 0.8);
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
  /* min-height: 256px; */
  height: 100%;
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
  position: absolute;
  font-weight: 600;
  font-size: 2em;
  background-image: none;
  opacity: 0.3;
  /* background-color: transparent; */
  color: black;
  transition: all 0.4s ease-in-out;
  top: 250px;
  cursor: pointer;
  z-index: 2;
}

#goal-animator button:hover {
  background-image: linear-gradient(90deg, rgb(210, 210, 210), #ffffff);
  opacity: 0.7;
  color: #f76f02;
}

.prev {
  left: 10px;
}
.next {
  right: 10px;
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