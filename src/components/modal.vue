<template>
  <div class="modal__container">
    <div class="modal">
      <span @click="$emit('closeModal');">X</span>
      <div class="tabs">
        <div
          class="sign-in__tab"
          @click="changeTab"
          :class="{ not__active: active }"
        >
          Войти
        </div>
        <div
          class="sign-up__tab"
          @click="changeTab"
          :class="{ not__active: !active }"
        >
          Зарегистрироваться
        </div>
      </div>
      <div class="content">
        <div class="sign-in__content" v-show="signIn">
          <div class="inputs">
            <input
              type="text"
              name=""
              id="username"
              placeholder="Введите имя пользователя"
            />
            <input
              type="text"
              name=""
              id="phone"
              placeholder="Введите номер телефона"
            />
            <input type="text" name="" id="email" placeholder="Введите email" />
            <input
              type="text"
              name=""
              id="password"
              placeholder="Введите пароль"
            />
          </div>
          <div class="buttons">
            <div class="create">Войти</div>
            <div class="cancel" @click="$emit('closeModal');">Отменить</div>
          </div>
        </div>
        <div class="sign-up__content" v-show="!signIn">
          <div class="inputs">
            <input
              type="text"
              name=""
              id="username"
              placeholder="Введите имя пользователя"
            />
            <input type="text" name="" id="email" placeholder="Введите email" />
            <input
              type="text"
              name=""
              id="password"
              placeholder="Введите пароль"
            />
          </div>
          <div class="buttons">
            <div class="create">Зврегистрироваться</div>
            <div class="cancel" @click="$emit('closeModal');">Отменить</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      active: false,
      signIn: true
    };
  },
  methods: {
    changeTab: function() {
      this.active = !this.active;
      this.signIn = !this.signIn;
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.modal__container {
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  max-width: 100vw;
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
span {
  position: absolute;
  top: -25px;
  right: -25px;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: #f25f5c;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabs {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.tabs > div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.modal {
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 400px;
  background-color: rgba(4, 71, 112, 1);
  color: white;
  box-shadow: 1px 10px 50px -10px black;
  position: relative;
}
.not__active {
  background-color: rgba(194, 197, 197, 1);
}
.content {
  width: 100%;
  height: calc(100% - 80px);
}
.sign-in__content,
.sign-up__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.inputs {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.inputs > input {
  margin: 10px;
  width: 75%;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - (100% - 80px));
}
.buttons > div {
  margin: 0px 5px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-width: 100px;
  cursor: pointer;
  border-radius: 4px;
}

.create {
  background-color: rgba(255, 255, 255, 0.4);
  transition: 0.4s;
}
.create:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
.cancel {
  background-color: rgba(242, 95, 92, 0.5);
}
.cancel:hover {
  background-color: rgba(242, 95, 92, 1);
}
</style>
