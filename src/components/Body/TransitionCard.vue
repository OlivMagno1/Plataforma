<template>
  <div class="container">
    <div class="imagecropleft">
      <img src="@/assets/images/transition1.1.jpg" />
    </div>
    <div class="imagecropright">
      <img src="@/assets/images/transition1.2.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TransitionCard",
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .container {
    width: 100vw;
    height: 30vh;
    background-image: linear-gradient(to right, #ffffff 40%, #fbffa7 40%);

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
    background-image: linear-gradient(to right, #ffffff 40%, #fbffa7 40%);

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  }
}

.imagecropleft img {
  width: 30vw;
  height: 45vw;
  object-fit: cover;
}

.imagecropright img {
  width: 23vw;
  height: 25vw;
  object-fit: cover;
}
</style>
