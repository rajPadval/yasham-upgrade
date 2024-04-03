<template>
  <div class="team-item">
    <div class="team-item-inner">
      <div class="team-item-front">
        <div
          class="team-item-img"
          :style="{ 'background-image': `url(${imageUrlFor(item.photo)})` }"
          alt="Avatar"
        ></div>
      </div>
      <div class="team-item-back">
        <h2>{{ item.name }}</h2>
        <p>
          {{item.content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(client);

export default {
  props: {
    item: Object
  },
  methods: {
    imageUrlFor(source) {
      return source?imageBuilder.image(source):false;
    },
  },
};
</script>

<style scoped>
.team-item {
  background-color: transparent;
  width: 320px;
  height: 420px;
  perspective: 1000px;
  cursor: pointer;
  flex-grow: 0;
  margin: 8px;
}

.team-item-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.team-item:hover .team-item-inner {
  transform: rotateY(180deg);
}

.team-item-front,
.team-item-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.team-item-front {
  background-color: #fff;
  color: #000;
}

.team-item-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.team-item-back {
  color: #fff;
  background: linear-gradient(45deg, #d5420f, #fe8a00);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.team-item-back h2 {
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.team-item-back p {
  padding: 16px;
  font-size: 14px;
  margin: 0px;
}

.team-item-ssn {
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  transition: background 0.25s;
}

.team-item-ssn:hover {
  background: #a2dbf930;
}

.team-item-ssn:active {
  background: #a2dbf910;
}

.team-item-ssn img {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 12px;
  display: block;
}

.team-item-details {
  padding: 8px 18px;
  border: solid 2px var(--color-primary);
  display: inline-block;
  width: fit-content;
  font-weight: 600;
  transition: all 0.25s;
}

.team-item-details:hover {
  background: var(--color-primary);
  color: #0a0e17;
}
</style>