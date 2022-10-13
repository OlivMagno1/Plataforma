<template>
  <div class="container">
    <div class="text">
      <h2>
        Nós oferecemos <span class="highlight">Trens</span>,
        <span class="highlight">Onibus</span> e
        <span class="highlight">Aviões</span>
        - Softwares de transporte que permitem uma movimentação rápida e segura.
        Com os nossos produtos, nossos clientes estão presentes em todo o
        planeta
      </h2>
      <p>
        Plataforma foi fundada em 1999 e teve sua primeira versão lançada em
        2001. Nossos transportes são usados pela população de todo o planeta.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroCard",
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .container {
    width: 100vw;
    height: 30vh;
    background-color: #fff;

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
