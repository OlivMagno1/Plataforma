<template>
  <div class="container">
    <div class="text">
      <h2>
        Acreditamos que é necessário foco para criar aplicações potentes.
        Trabalhamos com poucos produtos, e estamos concentrados em entregar a
        melhor experiência.
      </h2>
      <p>
        Ao invés de tentar atender todos os usuários com apenas um transporte,
        decidimos estabelecer um número seleto de produtos, que permitem uma
        customização que entregue ao cliente uma experiência única e pessoal.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextCard3",
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
