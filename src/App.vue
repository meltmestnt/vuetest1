<template>
  <div id="app">
    <transition name="fade" mode="out-in">
          <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Main from "./components/main";

export default {
  name: "App"
};
</script>

<style>

#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  font-weight: 300;
  overflow-x: hidden;
}
.main {
  background-color: rgba(255, 255, 255, 0.5);
  width: 100vw;
  display: flex;
  flex-direction: row;
  position: relative;
}
.main__container {
  width: 100vw;
}
.main__container h1,h2 {
    font-weight: 300;
  margin: 10px;
  font-size: 2rem;
  position: relative;
  z-index: 99;
}
.main__container h1 {
    display: block;
  width: 100%;
  padding: 10px;
  font-weight: 100;
  margin: 0;
  color: #232528;
  background-color: rgba(211, 211, 211,0.15);
}
/* .main__container h1::after {
  content: '';
  width: 125%;
  height: 45%;
  background-color: #007aff;
  opacity: 0.4;
  z-index: 1;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%)
} */
section {
  width: 100%;
  height: calc(100vh - 2rem - 26px);
  max-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  margin-left: 62px;
  padding: 10px;
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fade-enter-active, .fade-leave-active {
  transition: .3s all;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-leave, .fade-enter-to {
  opacity: 1;
}
</style>
