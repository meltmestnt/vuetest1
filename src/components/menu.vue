<template>
  <div class="menu-section">
    <div class="menu">
      <div class="sign-in__button" @click="$emit('openModal');">Войти</div>
      <div class="menu__list">
        <ul id="list" @mouseover="animateLine">
          <li>О нас<span></span></li>
          <li>Кабинет<span></span></li>
          <li>Меню<span></span></li>
          <li>Поиск<span></span></li>
          <li>Помощь<span></span></li>
        </ul>
      </div>
      <div class="menu__contacts">
        <p>Связаться с нами:</p>
        <a href="#"><img src="../assets/github.svg" alt=""/></a>
        <a href="#"><img src="../assets/instagram.svg" alt=""/></a>
        <a href="#"><img src="../assets/telegram.svg" alt=""/></a>
        <a href="#"><img src="../assets/twitter (1).svg" alt=""/></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {
    animateLine: function(e) {
      if (e.target.tagName === "LI") {
        if (
          getComputedStyle(e.target.querySelector("span")).transform !==
          "matrix(1, 0, 0, 1, 0, 0)"
        )
          return;
        e.target.querySelector("span").style.transform = "translateX(300%)";
        setTimeout(() => {
          e.target.querySelector("span").style.transition = "0s";
          e.target.querySelector("span").style.transform = "translateX(-300%)";
          setTimeout(() => {
            e.target.querySelector("span").style.transition = "0.25s";
            e.target.querySelector("span").style.transform = "translateX(0%)";
          }, 250);
        }, 250);
      }
    }
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
.menu-section {
  background-color: #044770;
  color: white;
  height: 100%;
  position: relative;
  z-index: 2;
  width: 25%;
  max-width: 350px;
  margin-left: 20px;
}
.menu {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
}
a {
  text-decoration: none;
  color: white;
}
i {
  text-decoration: none;
  font-size: 20px;
}
.sign-in__button {
  max-width: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: 50px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.2);
  transition: 0.3s;
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
  flew-wrap: wrap;
}
li {
  list-style: none;
  margin: 15px;
  position: relative;
  cursor: pointer;
}
#list > li > span {
  content: "";
  position: absolute;
  width: 125%;
  height: 1px;
  bottom: -5px;
  left: -12.5%;
  background-color: white;
  transition: 0.5s;
  transform: translateX(0%);
}
.menu__contacts img {
  width: 25px;
  height: 25px;
  margin: 10px;
}
</style>
