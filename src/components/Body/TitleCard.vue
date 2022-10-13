<template>
  <div class="container">
    <div class="titlebg">
      <h1 class="title">Plataforma</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleCard",
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .container {
    width: 100vw;
    background-color: #ffffff;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
}

@media screen and (min-width: 961px) {
  .container {
    width: 84vw;
    margin-left: 8vw;
    margin-right: 8vw;
    background-color: #ffffff;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
}

.titlebg {
  background-image: url("../../assets/images/saguao.jpg");
  background-size: cover;
  background-position: center;
  width: 70vw;
  height: 44vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 4rem;
  color: #ff764d;
}
</style>
