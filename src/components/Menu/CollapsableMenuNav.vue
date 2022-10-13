<template>
  <nav>
    <router-link to="/" class="menuitem">Sobre</router-link>
    <router-link to="/trens" class="menuitem">Trens</router-link>
    <router-link to="/onibus" class="menuitem">Ônibus</router-link>
    <router-link to="/avioes" class="menuitem">Aviões</router-link>
  </nav>
</template>

<script>
export default {
  name: "CollapsableMenuNav",
};
</script>

<style scoped>
nav {
  transition: 0.2s;
  position: absolute;
  top: 8vh;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  background-color: #fff;

  width: 100vw;
  border-bottom: 1px solid #767676;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: #767676;
  margin: 1rem 0.75rem;

  transition: 0.2s;
}

button {
  width: 90vw;
  height: 3rem;
  border-radius: 1.5rem;
  border: 0;
  margin: 1rem 5vw;

  background-color: #916047;

  transition: 0.2s;
}

button a {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
}
</style>
