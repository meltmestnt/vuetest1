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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
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
