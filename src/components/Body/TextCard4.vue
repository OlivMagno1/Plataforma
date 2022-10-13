<template>
  <div class="container">
    <div class="text">
      <h2>
        Somos apaixonados por quem somos hoje. Mas estamos sempre buscando
        melhorar.
      </h2>
      <p>
        Trabalhamos duro para criar um ambiente saudável, onde todos podemos
        melhorar pessoal e profissionalmente, assim como buscamos oferecer
        oportunidades de aprendizado para nossos funcionários.
      </p>
      <p>
        Possuímos um programa de treinamento interno que incentiva a busca
        constante de conhecimentos e habilidades novas.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextCard4",
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
