<template>
    <transition name="top__slide" v-on:after-enter="afterEnter">
  <div class="message__container">
      <div class="message" :class="typeMessage">
          <p> {{ msg }} </p>
      </div>
  </div>
    </transition>
</template>

<script>

export default {
  name: "Mod",
  props: {
    msg: {
        default: '',
        type: String
    },
    msgType: {
        type: Boolean
    }
  },
  data() {
      return {

      }
  },
  computed: {
      typeMessage() {
          return this.msgType ? {
              succ: true
          } : {
              err: true
          }
      }
  },
  methods: {
      afterEnter(el) {
        el.style.transform = `translateY(50px)`;
      }
  }
};
</script>

<style scoped>
.top__slide-enter-active, .top__slide-leave-active {
    transition: all 0.8s;
}
.top__slide-enter, .top__slide-leave-to {
    transform: translateY(-200%);
    opacity: 0;
}
.top__slide-enter-to, .top__slide-leave {
    transform: translateY(50px);
    opacity: 1;
}
.message__container {   
    position: absolute;
    width: 500px;
    min-height: 100px;
    text-align: center;
    font-family: 'Lora', serif;
    top: 0px;
    display: block;
    margin: 0 auto;
    z-index: 999;
    box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.75);
    background-color: #fafafa;
}
.message {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    justify-content: center;
    border-radius: 20px;
    z-index: 9999;
    top: 0px;
    left: 0;
    align-items: center;
    font-size: 1rem;
}
.succ {
    font-family: "Playfair Display", serif;
    font-weight: 300;
    color: black;
}
.err {
    color: black;
    font-family: "Playfair Display", serif;
    font-weight: 300;
}
</style>
