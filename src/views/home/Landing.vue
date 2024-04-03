<template>
  <div class="onboarding">
    <img id="onboarding-bg" class="onboarding-bg" src="@/assets/landing.jpg" />
    <div class="onboarding-inner">
      <div class="onboarding-content slide-in-left">
        <span style="font-weight: 700" class="newtext2">Educate</span>
        <span
          style="font-weight: 700; font-size: 40px; color: var(--color-primary)"
          >Enlighten
        </span>
        <span style="font-weight: 700" class="newtext">And Empower</span>
        <span style="font-weight: 500; font-size: 18px; margin-top: 16px"
          >The future generations through holistic education.</span
        >
        <router-link class="bigbtn" style="margin-top: 32px" to="about"
          >Learn More</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: () => {
    let element = document.getElementById("onboarding-bg");
    window.addEventListener("scroll", function () {
      element.style.transform = `scale(${
        1 + Math.min(1, (0.1 * window.scrollY) / window.innerHeight)
      })`;
    });
  },
};
</script>

<style scoped>
.onboarding {
  width: 100%;
  height: calc(100% - 84px);
  background-size: cover;
  background-position: center;
}

.onboarding-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 0;
  object-fit: cover;
  object-position: center;
  top: 0;
  transform: scale(1);
}

.onboarding-inner {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  padding: 0px 180px;
  transition: all 0.25s;
  position: relative;
  z-index: 1;
}
.onboarding-content {
  max-width: 480px;
}
.onboarding-content span {
  display: block;
}
.newtext {
  font-size: 40px;
}
.newtext2 {
  font-size: 30px;
}
@media screen and (max-width: 840px) {
  .onboarding-inner {
    padding: 0px 84px;
    align-items: center;
  }

  .onboarding-content {
    text-align: center;
    align-items: center;
  }
  .newtext {
    font-size: 30px;
  }
  .newtext2 {
    font-size: 25px;
  }
}
</style>
