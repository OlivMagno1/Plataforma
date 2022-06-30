<template>
  <div id="app">
    <MainMenu />
    <router-view />
    <MulticolFooter />
  </div>
</template>

<script>
import MainMenu from './components/Menu/MainMenu.vue';
import MulticolFooter from './components/Footer/MulticolFooter.vue';

export default {
  name: 'App',
  components: {
    MainMenu,
    MulticolFooter
  }
}
</script>

<style>
@font-face {
  font-family: "Futura";
  src: local("FuturaPTBook"),
   url(./assets/fonts/FuturaPTBook.otf) format("OpenType");
}

* {
  margin: 0;
}

#app {
  font-family: "Futura",Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e6e6e6;
}

.text {
  width: 60vw;
  height: 18vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  text-align: left;
}

h2 {
  font-size: 2.2rem;

}

p {
  font-size: 1.5rem;
}

.highlight {
  color: #0000ff;
}
</style>
