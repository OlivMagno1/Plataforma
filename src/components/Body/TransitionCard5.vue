<template>
  <div class="container">
    <div class="imagecropleft">
      <img src="@/assets/images/transition5.1.jpg" />
    </div>
    <div class="imagecropright">
      <img src="@/assets/images/transition5.2.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TransitionCard5",
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .container {
    width: 100vw;
    height: 30vh;
    background-image: linear-gradient(
      to right,
      #ffffff 15%,
      #d5b3ff 15%,
      #d5b3ff 85%,
      #ffffff 85%
    );

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  }
}

@media screen and (min-width: 961px) {
  .container {
    width: 84vw;
    height: 100vh;
    margin-left: 8vw;
    margin-right: 8vw;
    background-image: linear-gradient(
      to right,
      #ffffff 15%,
      #d5b3ff 15%,
      #d5b3ff 85%,
      #ffffff 85%
    );

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  }
}
.imagecropleft img {
  width: 27vw;
  height: 37vw;
  object-fit: cover;
}

.imagecropright img {
  width: 32vw;
  height: 42vw;
  object-fit: cover;
}
</style>
