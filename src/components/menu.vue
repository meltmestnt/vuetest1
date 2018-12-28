<template>
  <div
    class="menu__section"
    @mouseover="expand"
    @mouseout="reduce"
    :class="{initial: !active, expanded: active}"
  >
    <div class="wrapper">
      <div class="spans">
        <span :class="{rotated: active, not__rotated: !active}"></span>
        <span :class="{disappeared: active, not__rotated: !active}"></span>
        <span :class="{rotatedReversed: active, not__rotated: !active}"></span>
      </div>
      <ul>
        <li
          v-for="li in lis"
          :class="li.name"
          :key="li.index"
        >
          <router-link :to="{name: li.name, params: {active: li.name}}">
            <div class="li__wrapper">
              <font-awesome-icon :icon="li.icon" />
              <p> {{li.msg}} </p>
            </div>
          </router-link>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    highlighted: {
      type: String,
      default: "home"
    }
  },
  data() {
    return {
      active: false,
      toExpand: false,
      highlighte: this.$props.highlighted,
      lis: {
        1: {
          name: "home",
          msg: "Главная",
          index: 1,
          icon: "home"
        },
        2: {
          name: "info",
          msg: "О проекте",
          index: 2,
          icon: "info-circle"
        },
        3: {
          name: "howitworks",
          msg: "Как это работает",
          index: 3,
          icon: "book-open"
        },
        4: {
          name: "ourteam",
          msg: "Наша команда",
          index: 4,
          icon: "users"
        },
        5: {
          name: "partnership",
          msg: "Сотрудничество",
          index: 5,
          icon: "handshake"
        },
        6: {
          name: "contact",
          msg: "Контакты",
          index: 6,
          icon: "envelope"
        }
      }
    };
  },
  computed: {
      expand() {
          let context = this;
          if (this.toExpand) {
              return function() {
                  context.active = true;
              }
          }
          else {
              return function() {

              };
          }
      }
  },
  methods: {
    reduce() {
      this.active = false;
    }
  },
  mounted() {
    document
      .querySelector(`ul .${this.$props.highlighted}`)
      .classList.add("highlighted");
    setTimeout(() => this.toExpand = true, 1000);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 300;
  font-size: 1.1rem;
  font-family: "Oswald", sans-serif;
}

.menu__section {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: white;
  box-shadow: 4px 0px 20px -10px rgba(0, 0, 0, 0.75);
  transition: 0.15s ease-in-out;
  overflow: hidden;
}

.initial {
  width: 62px;
}

.expanded {
  width: 350px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

.wrapper ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  position: absolute;
}
ul a {
  text-decoration: none;
  width: 100%;
  transition: 0.1s ease-in;
  color: #5f6f81;
}
ul li {
  width: 100%;
  transition: 0.1s ease-in;
  border-top: 1px solid rgba(141, 153, 174, 0.2);
}
ul li:last-child {
  border-bottom: 1px solid rgba(141, 153, 174, 0.2);
}
ul a:hover {
  color: white;
}
ul li:hover {
  background-color: #495867;
  color: white;
  cursor: pointer;
}
.highlighted {
  border: 1px solid #f37748 !important;
  cursor: pointer;
}
.wrapper li div {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
}
.wrapper svg {
  position: absolute;
}
.wrapper p {
  margin-left: 50px;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  width: 100%;
}

.spans {
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
}

.not__rotated {
  margin: 2px;
}

.spans span {
  width: 30px;
  height: 2px;
  border-radius: 5px;
  background-color: black;
  margin-left: 16px;
  display: block;
}

.spans span:first-child {
  transition: 0.15s;
}
.spans span:last-child {
  transition: 0.15s;
}

.rotated {
  transform: rotate(45deg);
  position: absolute;
}

.disappeared {
  opacity: 0;
  position: absolute;
}

.rotatedReversed {
  position: absolute;
  transform: rotate(-45deg);
}
</style>