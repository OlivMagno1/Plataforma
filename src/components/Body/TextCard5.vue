<template>
  <div class="container">
    <div class="text">
      <h2>
        Queremos que nossos empregados amem trabalhar aqui. Como estamos sempre
        buscando talentos de todos os lugares do mundo, queremos fazer o
        possível para reduzir as barreiras.
      </h2>
      <p>
        Se você é estrangeiro, oferecemos auxílios de imigração e com a
        papelada. Também oferecemos aulas grátis de português. Além disso, ao
        trabalhar conosco significa que você terá seguro de vida e plano de
        saúde para você e a sua família, assim como a garantia de licença
        maternidade/paternidade. Possuímos horário flexível para permitir que o
        seu dia flua naturalmente.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextCard5",
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
  height: 20vh;
}
</style>
