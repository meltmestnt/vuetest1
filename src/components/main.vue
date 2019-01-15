<template>
  <div class="main">
    <div
      class="main__container"
      
    >
      <Menu :highlighted="$props.active">
      </Menu>
             <h1>Главная</h1>
      <section>
        <div class="content">
          <h2>Thyrol - система, которая отслеживает изменения в работе щитовидной железы,
            а также позволяет личному лечащему врачу контролировать показатели здоровья
          </h2>
          <div class="features">
            <div class="feature" @click="showCircle($event)">
              <Circlee />
              <h3>Дистанционный контроль</h3>
              <p>Отслеживание показателей
                без необходимости посещения врача
              </p>
            </div>
            <div class="feature" @click="showCircle($event)">
              <Circlee />
              <h3>Неинвазивный анализ</h3>
              <p>Проведение измерений
                без прямого забора крови
              </p>
            </div>
            <div class="feature" @click="showCircle($event)">
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
    return {
      
    };
  },
  methods: {
    showCircle(e) {
      eventBus.$emit("circleshow", e, e.currentTarget);
    }
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
  margin-top: 50px;
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
  box-shadow: 0px 0px 30px -10px rgba(0,0,0,0.75);
  transition: 0.4s;
  position: relative;
  overflow: hidden;
  }
  .feature:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 30px -10px rgba(0,0,0,0.75);
  }
</style>
