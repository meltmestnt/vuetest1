<template>
  <div class="main">
    <div class="main__container">
      <Menu :highlighted="$props.active"></Menu>
      <h1>О проекте</h1>
      <section>
        <div class="content">
          <div class="abouts">
            <div
              class="about"
              @click="showCircle($event, about)"
              v-for="about in abouts"
              :key="about.title"
              :class="{expande: about.expanded}"
            >
              <Circlee />
              <h3>{{about.title}}</h3>
              <p>{{ about.text }}</p>
            </div>

          </div>
        <div class="howitworks">
          <router-link :to="{name: 'howitworks', params: {active: 'howitworks'}}">Как это работает</router-link>
        </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Menu from "./menu";
import Circlee from "./Circlee";
export default {
  name: "Info",
  props: {
    active: {
      type: String
    }
  },
  data() {
    return {
      copy: "",
      abouts: [
        {
          title: "Идея проекта",
          text: `Главная задача проекта – помочь людям с заболеванием щитовидной железы контролировать гормональный фон в повседневной жизни,
           и обнаруживать ухудшение своего состояния раньше, чем это ощутит человек на себе.`,
          expanded: false
        },
        {
          title: "Чем полезна наша система",
          text: `В мире около 1,5% людей страдают разными видами дистиреоза. И они вынуждены принимать специальные препараты для регулирования уровня тиреотропного гормона. 
Этим людям нужен регулярный контроль за состоянием своего здоровья.
Они могут изменить образ жизни. Например, заняться спортом или изменить рацион питания. Кроме того, в силу возраста может меняться работа щитовидной железы. И это влияет на необходимую дозу препарата.
Наша система позволяет следить за своим здоровьем в домашних условиях. И при этом оставаться под наблюдением врача.
`,
          expanded: false
        },
        {
          title: "Возможности системы",
          text: `Система позволяет контролировать работу щитовидной железы дома, без необходимости посещения врача, при этом врач всегда будет в курсе ваших измерений.
Анализ проводится в считанные секунды, без необходимости забора крови.
История ваших измерений сохраняется, что бы вы и ваш врач мог в любой момент посмотреть тенденцию изменений в работе щитовидной железы.

`,
          expanded: false
        }
      ]
    };
  },
  methods: {
    showCircle(e, about) {
      eventBus.$emit("circleshow", e, e.currentTarget);
      about.expanded = !about.expanded;
    }
  },
  components: {
    Menu,
    Circlee
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin-top: 0;
  font-size: 1.5rem;
}
.blur {
  filter: blur(4px);
}
.expande {
  height: auto !important;
  transition: 0.4s;
}
.abouts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
}
.about {
  width: 75%;
  border: 1px solid rgba(211, 211, 211, 0.3);
  box-shadow: 0px 3px 30px -15px rgba(0, 0, 0, 0.75);
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  position: relative;
  height: 70px;
}
.about:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 30px -15px rgba(0, 0, 0, 0.75);
}
.howitworks {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007aff;
  border-radius: 10px;
  margin: 25px;
  box-shadow: 0px 3px 30px -8px rgba(0, 0, 0, 0.75);
  transition: 0.3s;
}
.howitworks a {
  width: 100%;
  text-decoration: none;
  color: white;
  height: 100%; 
}
.howitworks:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 30px -8px rgba(0, 0, 0, 0.75);
}
</style>