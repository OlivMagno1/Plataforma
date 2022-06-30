<template>
  <div class="menu container">
    <div class="menu left">
      <img src="../../assets/icons/bx-train.svg" />
      <router-link to="/" class="menuitem">Sobre</router-link>
      <router-link to="/trens" class="menuitem">Trens</router-link>
      <router-link to="/onibus" class="menuitem">Ônibus</router-link>
      <router-link to="/avioes" class="menuitem">Aviões</router-link>
    </div>
    <div class="menu right">
      <h2 class="menuitem menuitemblue">Teste Grátis</h2>
      <h2 class="menuitemsmall">Login e Registro</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
  }
}
</script>

<style scoped>

.menu {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
}

.container {
  width: 84vw;
  height: 8vh;
  margin-left: 8vw;
  margin-right: 8vw;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
}

.left {
  width: 24vw;
}

.right {
  width: 18vw;
}

.router-link-exact-active {
  color: #ff764d !important;
}

.menuitem {
  color: #000000;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 1.8;
}

.menuitemsmall {
  font-size: 1.2rem;
  line-height: 1.8;
}

.menuitemblue {
  color: #0000ff;
}

</style>