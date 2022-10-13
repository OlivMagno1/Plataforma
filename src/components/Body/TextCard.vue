<template>
  <div class="container">
    <div class="text">
      <h2>
        Ir até onde você deseja nem sempre é fácil. É necessário tempo, dinheiro
        e energia. Porém quando é possível, é extremamente recompensador.
      </h2>
      <p>
        Nós entendemos. E é por isso que Plataforma facilita o transporte dos
        seus usuários em todos os quesitos, oferecendo a liberdade que eles
        precisam, no momento em que eles precisam.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextCard",
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .container {
    width: 100vw;
    height: 30vh;
    background-color: #ffffff;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (min-width: 961px) {
  .container {
    width: 84vw;
    height: 70vh;
    margin-left: 8vw;
    margin-right: 8vw;
    background-color: #ffffff;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
}

.text {
  height: 15vh;
}
</style>
