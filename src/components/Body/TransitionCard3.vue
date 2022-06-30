<template>
  <div class="container">
    <div class="imagecropleft">
      <img src="../../assets/images/transition3.1.jpg" />
      <img src="../../assets/images/transition3.2.jpg" />
    </div>
    <div class="imagecropright">
      <img src="../../assets/images/transition3.3.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransitionCard'
}
</script>

<style scoped>
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

.imagecropleft {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: space-between;
}

.imagecropleft img {
  width: 30vw;
  height: 42vh;
  object-fit: cover;
  margin: 20px;
}

.imagecropright img {
  width: 30vw;
  height: 75vh;
  object-fit: cover;
}


</style>