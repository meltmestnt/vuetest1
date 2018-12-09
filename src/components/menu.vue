<template>
  <div class="menu-section">
    <div class="menu">
      <div class="menu__list">
        <ul id="list">
            <transition v-for="li in lis" :key="li.index" name="left">
          <li :key="li.index" tabindex="1" v-show="showMenu"> {{li.msg}} </li>
        </transition>
        </ul>
      </div>
      <transition :css="false" v-on:enter="enter" v-on:before-enter="beforeEnter" v-on:leave="leave" v-on:before-leave="beforeLeave">
        <div class="menu__contacts" key="menu__contacts">
          <p>Связаться с нами:</p>
            <a href="#"
              ><img src="../assets/github.svg" alt=""></a>
            <a href="#"
              ><img src="../assets/instagram.svg" alt=""></a>
              <a href="#"
              ><img src="../assets/telegram.svg" alt=""></a>
              <a href="#"
              ><img src="../assets/twitter (1).svg" alt=""></a>
        </div>
      </transition>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    showMenu: {
      type: Boolean
    }
  },
  data() {
    return {
      lis: {
        1: {
          msg: 'Тест',
          index: 1
        },
        2: {
          msg: 'Тестирование',
          index: 2
        },
        3: {
          msg: 'Тестировка',
          index: 3
        },
        4: {
          msg: 'Тестировщик',
          index: 4
        },
        5: {
          msg: 'Тестометр',
          index: 5
        }
      }
    };
  },
  methods: {
    preventLi(e) {
      console.dir(e);
      e.preventDefault();
      return false;
    },
    beforeEnter(el) {
      setTimeout(() => {
        el.style.opacity = 0;
        el.style.transform = 'translateX(-50px)';
        done();
      }, 800);
    },
    enter(el) {
      
        el.style.opacity = 1;
        el.style.transform = 'translateX(0)';
      
    },
    beforeLeave(el) {
        el.style.opacity = 1;
        el.style.transform = 'translateX(0)';
    },
    leave() {
      el.style.opacity = 0;
      el.style.transform = 'translateX(0)';
      done();
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.$emit('close-menu', e);
      }
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 2rem;
}

.spans {
  position: absolute;
  top: 35px;
  right: 35px;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spans > span {
  position: absolute;
  height: 2px;
  width: 35px;
  background-color: white;
}
.spans > span:first-child {
  transform: rotate(45deg);
}
.spans > span:last-child {
  transform: rotate(-45deg);
}
.menu-section {
  background-color: rgba(0,0,0,1);
  color: white;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.menu {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  padding: 50px;
}
#list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#list > li {
  padding: 20px;
  transition: 0.5s;
  max-width: 500px;
  width: 400px;
  min-width: 100px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
 font-weight: 300;
 text-transform: uppercase;
 text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
}
#list > li:hover {
  border: 1px solid rgba(255, 255, 255, 0.25);
}
#list > li:focus {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
a {
  text-decoration: none;
  color: white;
  outline: none;
}
a:focus > img {
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 15px;
}
i {
  text-decoration: none;
  font-size: 20px;
}
.sign-in__button:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
.menu__contacts > ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-wrap: wrap;
}
.menu__contacts > p {
  font-family: 'Lora', serif;
  font-size: 1.4rem;
}
li {
  list-style: none;
  position: relative;
  cursor: pointer;
}

.menu__contacts img {
  width: 40px;
  height: 40px;
  margin: 10px;
  padding: 8px;
}
</style>
