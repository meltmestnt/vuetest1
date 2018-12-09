<template>
  <div class="header__section">
    <div class="header">
        <div class="menu">
            <div class="lines" :class="{open: menuOpened}" @click="toDetermine">
                <div class="lines__menu">
                    <span></span>
                <transition name="spanFade">
                    <span v-show="!menuOpened"></span>
                </transition>
                <span></span>
                </div>
                <p>Меню</p>
            </div>
        </div>
        <div class="buttons">
            <div class="sign-in__button" @click="$emit('open-modal')">Войти</div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: {
      menuOpened: {
          type: Boolean
      }
  },
  data() {
      return {
        lastSpan: false,
        firstSpan: false,
        secondSpan: true,
      }
  },
  methods: {
      toDetermine() {
        if (this.menuOpened) {
            this.closeMenu();
        }
        else {
            this.openMenu();
        }
      },
      openMenu() {
          this.$emit('open-menu');
      },
      closeMenu() {
          this.$emit('close-menu', this.$event);
      }
   },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.lines p {
    color: rgba(19,27,35, 0.6);
    font-size: 1.2rem;
}
.spanFade-enter, .spanFade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
}
.spanFade-enter-to, .spanFade-leave {
    transform: translateX(0px);
    opacity: 1;
}
.spanFade-enter-active, .spanFade-leave-active {
    transition: all 0.1s;
}
.lines.open span:first-child {
    top: 50%;
    background-color: white;
    transform: rotate(135deg);
}
.lines.open span:last-child {
    top: 50%;
    background-color: white;
    transform: rotate(-135deg);
}
.lines.open span:nth-child(2) {
    top: 50%;
    background-color: white;
}
.lines__menu {
    position: relative;
    cursor: pointer;
    z-index: 99;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
}
.lines > p {
    margin-left: 20px;
    margin-top: 2px;
}
.lines {
    cursor: pointer;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.lines__menu > span {
    transition: 0.5s;
    transition-delay: 0.1s;
    width: 45px;
    height: 1px;
    background-color: rgba(19,27,35,1);
    position: absolute;
    left: 0;
}
.lines span:first-child {
    top: calc(50% - 10px);
}
.lines span:last-child {
    top: calc(50% + 10px);
}
.lines span:nth-child(2) {
    top: 50%;
}
.sign-in__button {
    color: white;
    padding: 15px;
    cursor: pointer;
    margin: 50px;
    min-width: 100px;
    border-radius: 10px;
    background-color: rgba(215,38,56,0.7);
}
.sign-in__button:hover {
    background-color: rgba(215,38,56,0.9);
}
.header__section {
    width: 100vw;
    height: 100%;
    max-height: 75px;
}
.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    background-color: white;
    border-bottom: 2px solid #C8CCD4;
}
</style>
