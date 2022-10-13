<template>
  <div class="container">
    <img src="@/assets/images/transition4.jpg" />
  </div>
</template>

<script>
export default {
  name: "TransitionCard4",
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .container {
    width: 100vw;
    height: 30vh;
    background-color: #fff;

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
    background-color: #fff;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  }
}

img {
  width: 65vw;
  height: auto;
  object-fit: cover;
}
</style>
