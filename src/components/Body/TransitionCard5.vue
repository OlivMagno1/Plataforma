<template>
  <div class="container">
    <div class="imagecropleft">
      <img src="../../assets/images/transition5.1.jpg" />
    </div>
    <div class="imagecropright">
      <img src="../../assets/images/transition5.2.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransitionCard5'
}
</script>

<style scoped>
.container {
  width: 84vw;
  height: 100vh;
  margin-left: 8vw;
  margin-right: 8vw;
  background-image: linear-gradient(to right, #ffffff 15%, #d5b3ff 15%, #d5b3ff 85%, #ffffff 85%);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
}

.imagecropleft img {
  width: 30vw;
  height: 40vh;
  object-fit: cover;
}

.imagecropright img {
  width: 35vw;
  height: 50vh;
  object-fit: cover;
}


</style>