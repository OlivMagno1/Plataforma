<template>
  <div class="container">
    <div class="imagecropleft">
      <img src="@/assets/images/transition3.1.jpg" />
      <img src="@/assets/images/transition3.2.jpg" />
    </div>
    <div class="imagecropright">
      <img src="@/assets/images/transition3.3.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TransitionCard3",
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .container {
    width: 100vw;
    height: 30vh;
    background-image: linear-gradient(to right, #b6ffc0 60%, #ffffff 60%);

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
    background-image: linear-gradient(to right, #b6ffc0 60%, #ffffff 60%);

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  }
}

.imagecropleft {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: space-between;
}

.imagecropleft img {
  width: 26vw;
  height: 18vw;
  object-fit: cover;
  margin: 20px;
}

.imagecropright img {
  width: 35vw;
  height: 40vw;
  object-fit: cover;
}
</style>
