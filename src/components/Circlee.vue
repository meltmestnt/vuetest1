<template>
  <div
    class="circle"
    :style="styleObj"
  ></div>
</template>

<script>
export default {
  name: "Circlee",
  
  computed: {
    styleObj() {
      return {
        transform: `scale(${this.incrementing}, ${this.incrementing})`,
        left: `${this.left}px`,
        top: `${this.top}px`,
        opacity: `${this.opacity}`
      };
    }
  },
  data() {
    return {
      incrementing: 1,
      remove: null,
      left: 0,
      top: 0,
      opacity: 0.4
    };
  },

  created() {
    eventBus.$on("circleshow", (ev, target) => {
      let circle = target.querySelector(".circle"),
        opacity = 0.4,
        scaleX = 1,
        scaleY = 1,
        stop = null;
      if (circle.style.display == "block") return;
      circle.style.left = `${ev.clientX -
        target.getBoundingClientRect().left}px`;
      circle.style.top = `${ev.clientY - target.getBoundingClientRect().top}px`;
      circle.style.display = "block";
      stop = setInterval(() => {
        if (circle.style.opacity <= 0) {
         circle.style.display = "none";
          clearInterval(stop);
          circle.style.transform = `scale(1,1)`;
          circle.style.opacity = "0.4";
          return;
        }
        opacity -= 0.004;
        circle.style.opacity = `${opacity}`;
        scaleX += 2;
        scaleY += 2;
        circle.style.transform = `scale(${scaleX}, ${scaleY})`;
      }, 7);
    });
  }
};
</script>

<style scoped>
.circle {
  position: absolute;
  background-color: rgba(211, 211, 211, 0.9);
  border-radius: 200px;
  width: 10px;
  display: none;
  z-index: 9999;
  height: 10px;
}

</style>