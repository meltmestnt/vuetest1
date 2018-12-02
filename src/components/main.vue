<template>
  <div class="main">
    <div class="main__container" :class="{ blur: blur }">
      <menu @openModal="openMod"> </menu>
    </div>
    <Modal v-show="showModal" @closeModal="closeMod" />
  </div>
</template>

<script>
import Menu from "./menu";
import Modal from "./modal";
export default {
  name: "Main",
  data() {
    return {
      showModal: false,
      blur: false
    };
  },
  methods: {
    openMod: function() {
      this.showModal = true;
      this.blur = true;
    },
    closeMod: function() {
      this.showModal = false;
      this.blur = false;
    }
  },
  components: {
    Menu,
    Modal
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.blur {
  filter: blur(4px);
}
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.main__container {
  width: 100vw;
  height: 100vh;
}
</style>
