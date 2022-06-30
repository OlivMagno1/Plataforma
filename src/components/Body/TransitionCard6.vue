<template>
  <div class="container">
    <div class="imagecropleft">
      <img src="../../assets/images/transition1.1.jpg" />
    </div>
    <div class="textcropright">
      <div class="textlimiter">
        <h2>
          Estamos realmente orgulhosos do trabalho que fazemos. 
          Mas ainda há muito o que fazer. Se quiser ser parte da gente, seja bem vindo.
        </h2>
        <h2 class="highlight">
          Ver opções de carreira
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransitionCard6'
}
</script>

<style scoped>
.container {
  width: 84vw;
  height: 80vh;
  margin-left: 8vw;
  margin-right: 8vw;
  background-color:  #ffffff;

  display: flex;
  flex-flow: row nowrap;
  align-items: space-around;
  justify-content: center;
}

.imagecropleft img {
  width: 36vw;
  height: 60vh;
  object-fit: cover;
}

.textcropright {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36vw;
  height: 60vh;
  object-fit: cover;
  background-color: #b1c5ff;
}

.textlimiter {
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  justify-content: space-evenly;

  text-align: left;
  width: 25vw;
  height: 30vh;
}
</style>