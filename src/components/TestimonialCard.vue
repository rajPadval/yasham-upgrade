<template>
  <div class="card">
    <div class="card-header">
      <img
        v-bind:src="
          imageUrlFor(item.photo) ||
          'https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'
        "
      />
      <div class="profile">
        <h5>{{ item.full_name }}</h5>
        <p>{{ item.role }}</p>
      </div>
    </div>
    <div class="content">
      <p>
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<script>
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
const imageBuilder = imageUrlBuilder(client);

export default {
  name: "TestimonialCard",
  props: {
    item: Object,
  },
  methods: {
    imageUrlFor(source) {
      return source ? imageBuilder.image(source) : false;
    },
  },
};
</script>

<style scoped>
.card {
  width: auto;
  max-width: 230px;
  height: auto;
  max-height: 420px;
  margin-bottom: 10px;
  padding: 10px 10px 40px 10px;
  box-shadow: 0px 6.7px 2.8px rgba(0, 0, 0, 0.04);
  background-color: white;
  overflow: auto;
  border-radius: 7px;
  margin-right:10px;
}

.card-header {
  display: flex;
  align-items: center;
  height: 45px;
}

.profile {
  /* line-height: 0px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  height: 45px;
  width: 250px;
  margin-left: 5px;
}

.profile p {
  font-size: small;
  margin: 0;
}

.profile h5 {
  margin: 0;
}

img {
  border-radius: 50%;
  border: 1px solid var(--color-primary);
  object-fit: cover;
  width: 35px;
  height: 35px;
}

.content {
  text-align: left;
  font-size: small;
  top: 25px;
  /* left: 10px; */
  font-weight: 500;
  text-overflow: ellipsis;
}

.content::before {
  content: "\201C";
  font-family: Georgia Bold;
  font-size: 6em;
  position: absolute;
  left: -5px;
  top: -50px;
  color: black;
  margin: 0;
  /* display: block; */
  color: var(--color-primary);
  font-weight: 700;
}
</style>
