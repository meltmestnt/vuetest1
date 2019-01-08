<template>
  <div class="main">
    <div
      class="main__container"
      :class="{ blur: blur }"
    >
      <Header @open-modal="openMod"></Header>
      <Menu :highlighted="$props.active">
      </Menu>
      <section>
        <div class="content">
          <h1>Main page</h1>
        </div>
      </section>
    </div>
    <Modal
      v-show="showModal"
      @closeModal="closeMod"
    />
  </div>
</template>

<script>
import Menu from "./menu";
import Header from "./header";
import Modal from "./modal";
export default {
  name: "Main",
  props: {
    active: {
      type: String
    }
  },
  data() {
    return {
      showModal: false,
      blur: false,
      showMenu: false,
      menuOpened: false
    };
  },
  methods: {
    openMod: function() {
      this.showModal = true;
      this.blur = true;
    },
    closeMod: function(event) {
      this.showModal = false;
      this.blur = false;
    }
  },
  components: {
    Menu,
    Modal,
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.blur {
  filter: blur(4px);
}
.main {
  background-color: rgba(255, 255, 255, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
}
.main__container {
  width: 100vw;
  height: 100vh;
}
</style>
