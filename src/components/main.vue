<template>
  <div class="main">
    <div class="main__container">
      <Menu :highlighted="$props.active">
      </Menu>
      <h1>Главная</h1>
      <section>
        <div class="content">
          <h2>Thyrol - система, которая отслеживает изменения в работе щитовидной железы,
            а также позволяет личному лечащему врачу контролировать показатели здоровья
          </h2>
          <div class="svg">
            <article>
              <div class="suck-my-graph">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 540 240"
                >
                  <clipPath id="svgPath">
                    <rect
                      id="svgRect"
                      x="0"
                      y="0"
                      fill="none"
                      height="240"
                      width="100%"
                    />
                  </clipPath>
                  <g clip-path="url(#svgPath)">
                    <path
                      class="cls-1"
                      d="M540,120.1H481.4s-5.4-.6-6.8,0c-4.7,2.2-3.4,11.8-8.7,10s-3.6-21.5-9.3-20-16.6,60-22.7,60S420.1,70,414.1,70s-12,57.9-18,60-5.5-18.7-10-20-5.1,7.5-11.3,10c-2.5,1-6.7,0-6.7,0h-58s-5.4-.6-6.8,0c-4.7,2.2-3.4,11.8-8.7,10s-3.6-21.5-9.3-20-16.6,60-22.7,60S248.8,70,242.8,70s-12,57.9-18,60-5.5-18.7-10-20-5.1,7.5-11.3,10c-2.5,1-6.7,0-6.7,0H139s-5.4-.6-6.8,0c-4.7,2.2-3.4,11.8-8.7,10s-3.6-21.5-9.3-20-16.6,60-22.7,60S77.7,70,71.6,70s-12,57.9-18,60-5.5-18.7-10-20-5.1,7.5-11.3,10c-2.5,1-6.7,0-6.7,0H0"
                    />
                  </g>
                </svg>
              </div>
            </article>
          </div>
          <div class="features">
            <div
              class="feature"
              @click="showCircle($event)"
            >
              <Circlee />
              <h3>Дистанционный контроль</h3>
              <p>Отслеживание показателей
                без необходимости посещения врача
              </p>
            </div>
            <div
              class="feature"
              @click="showCircle($event)"
            >
              <Circlee />
              <h3>Неинвазивный анализ</h3>
              <p>Проведение измерений
                без прямого забора крови
              </p>
            </div>
            <div
              class="feature"
              @click="showCircle($event)"
            >
              <Circlee />
              <h3>
                Профилактика заболеваний
              </h3>
              <p>Выявления ухудшения здоровья
                раньше, чем это почувствует человек
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import Menu from "./menu";
import Modal from "./modal";
import Circlee from "./Circlee";

export default {
  name: "Main",
  props: {
    active: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    showCircle(e) {
      eventBus.$emit("circleshow", e, e.currentTarget);
    },
    
      
  },
  components: {
    Menu,
    Circlee
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  vertical-align: top;
}

.blur {
  filter: blur(4px);
}

.features {
  display: flex;
  padding: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.feature {
  width: 250px;
  height: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.75);
  transition: 0.4s;
  position: relative;
  overflow: hidden;
}
.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0px 3px 20px -8px rgba(0, 0, 0, 0.75);
}
.content h2 {
  color: black;
}
.svg {
  margin: 0 auto;
  width: 100%;
}
article {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 50px;
}

.suck-my-graph {
  height: 300px;
  width: 100%;
  background: white;
  border-radius: 3px;
  position: relative;
}
.suck-my-graph svg {
  position: absolute;
  left: 32px;
  top: -75%;
  width: 100% !important;
  height: 500px;
  opacity: 0.15;
}
.suck-my-graph svg .cls-1 {
  fill: none;
  stroke: crimson;
  stroke-miterlimit: 10;
  stroke-width: 1px;
}
#svgRect {
  animation: mymove 6s;
  animation-direction: normal;
  animation-timing-function: linear;
}
@keyframes mymove {
    from {width: 0;}
    to {width: 100%;}
}
</style>
