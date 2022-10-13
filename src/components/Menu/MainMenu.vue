<template>
  <div class="container desktop">
    <div class="desktop left">
      <img src="@/assets/icons/bx-train.svg" />
      <router-link to="/" class="menuitem">Sobre</router-link>
      <router-link to="/trens" class="menuitem">Trens</router-link>
      <router-link to="/onibus" class="menuitem">Ônibus</router-link>
      <router-link to="/avioes" class="menuitem">Aviões</router-link>
    </div>
    <div class="desktop right">
      <a href="/index" class="menuitem menuitemblue">Voltar para o site</a>
    </div>
  </div>
  <div class="menu container mobile">
    <div class="mobile left">
      <img src="@/assets/icons/bx-train.svg" />
      <button @click="show = !show" class="emptyButton">Menu</button>
    </div>
    <Transition name="slide">
      <CollapsableMenuNav v-if="show" @click="show = false" />
    </Transition>
  </div>
</template>

<script>
import CollapsableMenuNav from "./CollapsableMenuNav.vue";

export default {
  name: "MainMenu",
  components: {
    CollapsableMenuNav,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }
  .container {
    width: 100vw;
    height: 8vh;
  }
}

@media screen and (min-width: 961px) {
  .mobile {
    display: none;
  }

  .desktop {
    display: flex;
  }

  .container {
    width: 84vw;
    height: 8vh;
    margin-left: 8vw;
    margin-right: 8vw;
  }
}

.mobile {
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
}

.desktop {
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
}

.container {
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
}
.left {
  width: 30vw;
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

button {
  font-family: Futura;
  font-size: 1.2rem;
  background-color: #fff;
  border: 0px;
  margin-left: 5vw;
  cursor: pointer;
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transform: translateY(-1em);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-1em);
  opacity: 0;
}
</style>
