<template>
  <div class="main">
      <div class="main__container" :class="{ blur: blur }">
        <Header @open-modal="openMod" :menu-opened="menuOpened" @close-menu="closeMenu" @open-menu="openMenu"/>
        <transition name="fade">
            <Menu :show-menu="showMenu" v-show="showMenu" @open-menu="openMenu" @close-menu="closeMenu">
            </Menu>
        </transition>
    </div>
      <Modal v-show="showModal" @closeModal="closeMod"/>
  </div>
</template>

<script>
import Header from './header'
import Menu from './menu'
import Modal from './modal'
export default {
  name: "Main",
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
    openMenu(event) {
      this.showMenu = true;
      this.menuOpened = true;
    },
    closeMenu() {
      this.showMenu = false;
      this.menuOpened = false;
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
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active {
    transition: all .4s;
}
.fade-enter, .fade-leave-to {
    transform: translateY(-100%);
}
.fade-leave, .fade-enter-to {
    transform: translateY(0);
}
.blur {
  filter: blur(4px);
}
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: rgba(234,201,193,0.15);
}
.main::after {
  content: "";
  background-image: url('../assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.05;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}
.main__container {
  width: 100vw;
  height: 100vh;
}
</style>
