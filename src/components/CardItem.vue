<template>
  <router-link :to="route || ''" class="pcard">
    <img v-if="item.displayPhoto" class="pcard-img" :src="imageUrlFor(item.displayPhoto)" :alt="item.title" />
    <div class="pcard-header">
      <div class="pcard-header-text">
        <span class="pcard-title">{{ item.title }}</span>
        <span v-if="item.subTitle" class="pcard-subtitle">{{ item.subTitle }}</span>
      </div>
      <div class="pcard-divider"></div>
      <div class="pcard-content">
        {{ item.summary }}
      </div>
    </div>
  </router-link>
</template>

<script>
import client from '../client'
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(client);

export default {
  props: {
    item: Object,
    route: String,
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style scoped>
.pcard {
  display: flex;
  width: 360px;
  height: 420px;
  background: #000;
  margin-right: 16px;
  flex-shrink: 0;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
}

.pcard-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  left: 0px;
  transition: transform 0.4s;
}

.pcard-divider {
  width: 100%;
  height: 1px;
  background: #ffffff3f;
}

.pcard-header {
  width: 100%;
  height: 84px;
  transition: all 0.4s ease;
  display: flex;
  background: rgba(0, 0, 0, 0.75);
  flex-direction: column;
  margin-top: auto;
}

.pcard-header-text {
  padding: 16px 32px;
  padding-top: 16px;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 84px;
  flex-shrink: 0;
  justify-content: center;
}

.pcard:hover .pcard-header {
  height: 100%;
}

.pcard:hover .pcard-img {
  transform: scale(1.2);
}

.pcard-content {
  width: 100%;
  text-align: left;
  padding: 32px;
  padding-top: 16px;
  height: 100%;
  font-size: 14px;
  font-weight: 600;
}

.pcard-title {
  font-size: 16px;
  font-weight: 700;
}

.pcard-subtitle {
  font-size: 12px;
  font-weight: 500;
}

.pcard-header-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  transition: all 0.25s;
  background: #f76f02a0;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 400;
}

.pcard-header-overlay:hover {
  opacity: 1;
  text-decoration: none;
}

.pcard-header-overlay:active {
  opacity: 1;
  background: #f76f0280;
}
</style>