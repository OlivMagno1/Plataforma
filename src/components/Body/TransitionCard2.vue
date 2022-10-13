<template>
  <div class="container">
    <div class="videocrop">
      <iframe
        width="320"
        height="240"
        src="https://www.youtube.com/embed/5s8fs_j2xlY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="videoMobile"
      >
      </iframe>

      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/5s8fs_j2xlY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="videoDesktop"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransitionCard2",
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .container {
    width: 100vw;
    height: 30vh;
    background-color: #ffffff;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  .videoMobile {
    display: block;
  }

  .videoDesktop {
    display: none;
  }
}

@media screen and (min-width: 961px) {
  .container {
    min-width: 960px;
    min-height: 540px;
    width: 84vw;
    height: 60vh;
    margin-left: 8vw;
    margin-right: 8vw;
    background-color: #ffffff;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  }

  .videoMobile {
    display: none;
  }

  .videoDesktop {
    display: block;
  }
}
</style>
