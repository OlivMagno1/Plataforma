<template>
  <div class="container">
    <div class="footertitle">
      <h1>Plataforma</h1>
    </div>
    <div class="footerelse">
      <div class="column">
        <p>Registro <img src="../../assets/icons/chev.svg" /></p>
        <p>Sobre Plataforma <img src="../../assets/icons/chev.svg" /></p>
        <p>Carreira <img src="../../assets/icons/chev.svg" /></p>
        <div class="iconbar">
          <img src="../../assets/icons/face.svg" />
          <img src="../../assets/icons/twitter.svg" />
          <img src="../../assets/icons/youtube.svg" />
          <img src="../../assets/icons/insta.svg" />
        </div>
      </div>
      <div class="column">
        <h3>Educação</h3>
        <p>
          Ofertas para alunos/professores
          <img src="../../assets/icons/chev.svg" />
        </p>
        <p>
          Plataforma para Salas de Aula
          <img src="../../assets/icons/chev.svg" />
        </p>
        <p>
          Plataforma para Universidades
          <img src="../../assets/icons/chev.svg" />
        </p>
      </div>
      <div class="column">
        <h3>Comunidade</h3>
        <p>
          Encontrar grupos em Plataforma
          <img src="../../assets/icons/chev.svg" />
        </p>
        <p>
          Encontrar Treinamentos Certificados
          <img src="../../assets/icons/chev.svg" />
        </p>
        <p>
          Seja um Treinador Certificado
          <img src="../../assets/icons/chev.svg" />
        </p>
      </div>
      <div class="column">
        <h3>Distribuidores</h3>
        <p>
          Encontrar Distribuidores
          <img src="../../assets/icons/chev.svg" />
        </p>
        <p>Loja <img src="../../assets/icons/chev.svg" /></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MulticolFooter",
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .container {
    width: 100vw;
    height: 30vh;
    background-color: #fff;
    border-top: 1px solid #e6e6e6;

    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
  }

  .footertitle {
    display: flex;
    align-items: flex-start;

    margin-left: 5vw;
    width: 70vw;
  }

  .footerelse {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 5vw;
  }

  .column {
    display: flex;
    flex-flow: column nowrap;

    text-align: left;
    margin-bottom: 2vh;
    width: 35vw;
  }

  h1 {
    line-height: 1.2rem;
    font-size: 1rem;
  }

  h3 {
    line-height: 1rem;
    font-size: 0.8rem;
  }

  p {
    line-height: 0.8rem;
    font-size: 0.5rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  p img {
    width: 1.2rem;
  }
}

@media screen and (min-width: 961px) {
  .container {
    width: 84vw;
    height: 70vh;
    margin-left: 8vw;
    margin-right: 8vw;
    background-color: #ffffff;
    border-top: 1px solid #e6e6e6;

    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
  }

  .footertitle {
    display: flex;
    align-items: flex-start;

    margin-left: 5vw;
    margin-bottom: 5vh;
    width: 70vw;
  }

  .footerelse {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 5vw;
  }

  .column {
    display: flex;
    flex-flow: column nowrap;

    margin-bottom: 5vh;

    text-align: left;
    width: 35vw;
  }

  h1 {
    line-height: 5rem;
    font-size: 4rem;
  }

  h3 {
    line-height: 3rem;
    font-size: 1.5rem;
  }

  p {
    line-height: 2rem;
    font-size: 1.2rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  p img {
    width: 1.2rem;
  }
}

.iconbar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}

img {
  width: 2.5vw;
}
</style>
