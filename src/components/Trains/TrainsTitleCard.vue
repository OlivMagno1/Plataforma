<template>
  <div class="container">
    <div class="titlebg">
      <h1 class="title">Trens</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleCard'
}
</script>

<style scoped>
.container {
  width: 84vw;
  margin-left: 8vw;
  margin-right: 8vw;
  background-color: #ffffff;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.titlebg {
  background-image: url("../../assets/images/trem.jpg");
  background-size: cover;
  background-position: center;
  width: 70vw;
  height: 85vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size:10rem;
  color: #ff764d;
}
</style>