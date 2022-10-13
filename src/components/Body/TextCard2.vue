<template>
  <div class="container">
    <div class="text">
      <h2>
        Estamos presentes em mais de 30 países com mais de 12 sedes distribuídas
        entre todos os continentes.
      </h2>
      <p>
        Nosso time é composto de motoristas, cobradores e comissários de bordo
        ativos no meio, e utilizamos os nossos serviços diariamente. Acreditamos
        que cada um de nós possui as habilidades e conhecimentos necessários
        para contribuir para uma causa maior: Ajudar a conectar o mundo.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextCard2",
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
