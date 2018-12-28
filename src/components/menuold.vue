<template>
  <div class="menu-section" @mouseover="rotateIn" @mouseout="rotateOut($event)" :class="{expanded: !active, initial: active}">
        <div class="spans">
          <div :class="{first: active, rotated: !active}"></div>
          <div :class="{pos: active, disappeared: !active}"></div>
          <div :class="{last: active, rotatedReversed: !active}"></div>
        </div>
        <div class="wrapper">
          <ul id="list">
            <li v-for="li in lis" :key="li.index">
              <img :src="li.icon" alt="">
            </li>
        </ul>
        
          <div class="msg" v-if="delayed">
              <p v-for="li in lis" :key="Math.random() + li.index">
                {{li.msg}}
              </p>
          </div>
        </div>
        
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      active: true,
      delayed: false,
      activelight: false,
      lis: {
        1: {
          msg: 'Главная',
          index: 1,
          icon: require('../assets/home.svg')
        },
        2: {
          msg: 'О проекте',
          index: 2,
          icon: require('../assets/information.svg')
        },
        3: {
          msg: 'Как это работает',
          index: 3,
          icon: require('../assets/focus.svg')
        },
        4: {
          msg: 'Наша команда',
          index: 4,
          icon: require('../assets/about-us.svg')
        },
        5: {
          msg: 'Сотрудничество',
          index: 5,
          icon: require('../assets/hand-shake.svg')
        },
        6: {
          msg: 'Контакты',
          index: 6,
          icon: require('../assets/contact.svg')
        }
      }
    };
  },
  computed: {
    
  },
  methods: {
    rotateOut(ev) {
      if (ev.currentTarget.contains(ev.relatedTarget)) {
        return;
      }
      this.active = true;
      setTimeout(() => this.delayed = false, 300);
    },
    rotateIn() {
      this.delayed = true
      this.active = false;
    }
  },
  created() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
  font-family: Lato, serif;
  font-weight: 300;
}
.list-enter-active, .list-leave-active {
  
}
.list-enter, .list-leave-to {
  
}
.list-enter-to, .list-leave {
  
}
.menu-section {
  position: absolute;
  height: 100%;
  background-color: #344055;
  top: 0;
  left: 0;
  transition: 0.3s ease-in;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 31px -4px rgba(0,0,0,0.3);
}
.initial {
  width: 80px;
}
.expanded {
  width: 350px;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  transition: 0.5s ease-in;
}
.spans {
  width: 80px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding-top: 20px;
}
.spans > div {
  width: 30px;
  height: 1px;
  background-color: white;
  transition: 0.5s;
  position: absolute;
}
.first {
  transform: translateY(-6px);
}
.last {
  transform: translateY(6px);
}
.rotated {
  transform: rotate(-45deg);
}
.rotatedReversed {
  transform: rotate(45deg);
}
.disappeared {
  opacity: 0;
  position: absolute;
}
#list {
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: right;
  position: absolute;
}
#list > li {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding: 25px;
}
#list img {
  width: 1.8rem;
  height: 1.8rem;
}
.msg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  color: white;
  margin-left: 80px;
}
.msg  p {
  color: white;
  min-height: 78.8px;
  font-size: 1.3rem;
  padding: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  white-space: nowrap;
  border-bottom: 1px solid #D6D1CD;
}
.msg p:hover {
  background-color: white;
  color: #344055;
}
</style>