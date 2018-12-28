<template>
  <transition
    name="fade-section"
    key="fade__modal"
  >
    <div
      class="modal__container"
      key="fade__modal"
      @click.self="$emit('closeModal', $event); clearInputs()"
    >
      <Mod
        :msg="msg"
        :msgType="msgType"
        v-if="msg"
      />
      <div class="modal">
        <div
          class="spans"
          @click="$emit('closeModal', $event); clearInputs()"
        >
          <span></span>
          <span></span>
        </div>
        <div
          class="tabs"
          @click="changeTab($event)"
        >
          <div
            class="sign-in__tab"
            :class="{ not__active: active }"
          >
            Войти
          </div>
          <div
            class="sign-up__tab"
            :class="{ not__active: !active }"
          >
            Зарегистрироваться
          </div>
        </div>
        <div
          class="content"
          key="tab__flow"
        >
          <transition
            name="flow-left"
            key="tab__flow__left"
          >
            <div
              class="sign-in__content"
              key="tab__flow__sign-in"
              v-show="signIn"
            >
              <div class="inputs">
                <div
                  class="input"
                  v-for="input in inputs.sign_in_inputs"
                  :key="input.id"
                >
                  <p
                    class="error"
                    v-show="input.error"
                  > {{ input.inputMsg }} </p>
                  <input
                    type="text"
                    @input="passwordDots(input.id, $event)"
                    class="bord"
                    :id="input.id"
                    :placeholder="input.placeholder"
                    @blur="checkInput($event)"
                  >
                  <img
                    src="../assets/eye.svg"
                    @click="showPass"
                    class="passwordEye"
                    alt=""
                    v-if="input.img"
                  >
                </div>
              </div>
              <div class="buttons">
                <button
                  class="create"
                  @click="sendRequest(currentTab)"
                >
                  Войти
                </button>
              </div>
            </div>
          </transition>
          <transition
            name="flow-right"
            key="tab__flow__right"
          >
            <div
              class="sign-up__content"
              key="tab__flow__sign-up "
              v-show="!signIn"
            >
              <div class="inputs">
                <div
                  class="input"
                  v-for="input in inputs.sign_up_inputs"
                  :key="input.id"
                >
                  <p
                    class="error"
                    v-show="input.error"
                  > {{ input.inputMsg }} </p>
                  <input
                    type="text"
                    @input="passwordDots(input.id, $event)"
                    class="bord"
                    :id="input.id"
                    :placeholder="input.placeholder"
                    @blur="checkInput($event)"
                  >
                  <img
                    src="../assets/eye.svg"
                    @click="showPass"
                    class="passwordEye"
                    alt=""
                    v-if="input.img"
                  >
                </div>
              </div>
              <div class="buttons">
                <button
                  class="create"
                  @click="sendRequest(currentTab)"
                >
                  Зарегистрироваться
                </button>
              </div>
            </div>
          </transition>

        </div>

      </div>

    </div>
  </transition>
</template>

<script>
import Mod from "./mod";

export default {
  name: "Main",
  data() {
    return {
      active: false,
      signIn: true,
      msg: "",
      msgType: false,
      inputs: {
        sign_up_inputs: {
          username: {
            error: false,
            inputMsg: "",
            id: "username",
            placeholder: "Введите имя пользователя"
          },
          phone: {
            error: false,
            inputMsg: "",
            id: "phone",
            placeholder: "Введите номер телефона"
          },
          email: {
            error: false,
            inputMsg: "",
            id: "email",
            placeholder: "Введите email"
          },
          password: {
            error: false,
            inputMsg: "",
            id: "password",
            placeholder: "Введите пароль",
            img: true
          }
        },
        sign_in_inputs: {
          username: {
            error: false,
            inputMsg: "",
            id: "username",
            placeholder: "Введите имя пользователя/телефон/email"
          },
          password: {
            error: false,
            inputMsg: "",
            id: "password",
            placeholder: "Введите пароль",
            img: true
          }
        }
      },
      currentTab: "sign_in",
      inputObj: {
        password: "",
        email: "",
        username: ""
      },
      match: {
        username: false,
        phone: false,
        email: false,
        password: false
      }
    };
  },
  components: {
    Mod
  },
  methods: {
    showPass(e) {
      if (
        e.target.previousElementSibling.value ==
        this.inputObj[e.target.previousElementSibling.id]
      ) {
        e.target.previousElementSibling.value = this.inputObj[
          e.target.previousElementSibling.id
        ].replace(/./gi, "*");
        e.target.style.opacity = "0.5";
      } else {
        e.target.previousElementSibling.value = this.inputObj[
          e.target.previousElementSibling.id
        ];
        e.target.style.opacity = "0.7";
      }
    },
    passwordDots(id, ev) {
      if (id === "password") {
        if (ev.target.value.length < this.inputObj[id].length) {
          this.inputObj[id] = this.inputObj[id].slice(
            0,
            this.inputObj[id].length - 1
          );
          return;
        }
        if (ev.target.value.match(/./g))
          this.inputObj[id] += ev.target.value.match(/[^*]/g);
        ev.target.value = this.inputObj[id].replace(/./gi, "*");
      } else {
        this.inputObj[id] = ev.target.value;
      }
    },
    clearInputs() {
      document.querySelectorAll("input").forEach(item => {
        item.classList.remove("correct");
        item.value = "";
        item.classList.remove("wrong");
      });
      if (this.currentTab === "sign_up") {
        this.inputObj = {
          password: "",
          username: ""
        };
      } else {
        this.inputObj = {
          password: "",
          email: "",
          phone: "",
          username: ""
        };
      }
      for (let input in this.inputs[`${this.currentTab}_inputs`]) {
        this.inputs[`${this.currentTab}_inputs`][input].error = false;
      }
    },
    sendRequest(type) {
      console.dir(this.match);
      if (type === "sign_up") {
        let i = 0;
        for (let field in this.match) {
          if (this.match[field]) i++;
        }
        console.log(i);
        if (i === 4) {
          fetch("http://195.138.84.118:63110/api/users/sign-up", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(this.inputObj)
          })
            .then(data => data.json())
            .then(request => {
              if (!request.error) {
                this.match = {
                  username: false,
                  phone: false,
                  email: false,
                  password: false
                };
                this.msg = "Поздравляем! Вы успешно зарегистрировались!";
                this.msgType = true;
              } else {
                this.msg = "Упс! Ошибка";
                this.msgType = false;
              }
              this.timeOut();
            })
            .catch(err => {
              this.msg = `Упс! Ошибка ${err}`;
              this.msgType = false;
              this.timeOut();
            });
        }
      }
    },
    timeOut() {
      setTimeout(() => {
        this.msg = "";
      }, 5000);
    },
    changeTab: function(event) {
      for (let input in this.inputs[`${this.currentTab}_inputs`]) {
        this.inputs[`${this.currentTab}_inputs`][input].error = false;
      }
      if (event.target.classList.contains("not__active")) {
        this.active = !this.active;
        this.signIn = !this.signIn;
      }
      if (this.currentTab === "sign_up") {
        this.inputObj = {
          password: "",
          username: ""
        };
        this.currentTab = "sign_in";
      } else {
        this.inputObj = {
          password: "",
          email: "",
          phone: "",
          username: ""
        };
        this.currentTab = "sign_up";
      }
      this.clearInputs();
    },
    checkInput(event) {
      if (event.target.id === "phone" && this.inputObj[event.target.id] != "") {
        if (/\+380\d{9}\b/gi.test(this.inputObj[event.target.id])) {
          event.target.classList.add("correct");
          event.target.classList.remove("wrong");
          this.match[event.target.id] = true;
          this.inputs[`${this.currentTab}_inputs`][
            event.target.id
          ].error = false;
        } else {
          this.inputs[`${this.currentTab}_inputs`][
            event.target.id
          ].error = true;
          this.inputs[`${this.currentTab}_inputs`][event.target.id].inputMsg =
            "+380 обязателен! Можно использовать только цифры!";
          this.match[event.target.id] = false;
          event.target.classList.add("wrong");
          event.target.classList.remove("correct");
        }
      } else if (
        event.target.id === "email" &&
        this.inputObj[event.target.id] != ""
      ) {
        if (
          /^[a-zA-z\d]+@[a-zA-Z\d]+\.\w{2,3}$/gi.test(
            this.inputObj[event.target.id]
          )
        ) {
          this.match[event.target.id] = true;
          event.target.classList.add("correct");
          event.target.classList.remove("wrong");
          this.inputs[`${this.currentTab}_inputs`][
            event.target.id
          ].error = false;
        } else {
          this.inputs[`${this.currentTab}_inputs`][
            event.target.id
          ].error = true;
          this.inputs[`${this.currentTab}_inputs`][event.target.id].inputMsg =
            'Разрешены латинские буквы и цифры. "@"';
          this.match[event.target.id] = false;
          event.target.classList.add("wrong");
          event.target.classList.remove("correct");
        }
      } else if (this.inputObj[event.target.id] != "") {
        if (/^[a-zA-Z\d]+$/gi.test(this.inputObj[event.target.id])) {
          this.match[event.target.id] = true;
          event.target.classList.add("correct");
          this.inputs[`${this.currentTab}_inputs`][
            event.target.id
          ].error = false;
          event.target.classList.remove("wrong");
        } else {
          this.inputs[`${this.currentTab}_inputs`][
            event.target.id
          ].error = true;
          this.inputs[`${this.currentTab}_inputs`][event.target.id].inputMsg =
            "Используйте только латинские буквы или цифры!";
          this.match[event.target.id] = false;
          event.target.classList.add("wrong");
          event.target.classList.remove("correct");
        }
      }
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;
  padding: 0;
  box-sizing: border-box;
  font-size: 1.1rem;
}
.flow-left-enter-active,
.flow-left-leave-active,
.flow-right-enter-active,
.flow-right-leave-active {
  transition: all 0.3s;
}
.flow-left-enter {
  transform: translateX(-600px);
  opacity: 0;
}
.flow-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.flow-left-leave {
  transform: translateX(0);
  opacity: 1;
}
.flow-left-leave-to {
  transform: translateX(-600px);
  opacity: 0;
}
.flow-right-enter {
  transform: translateX(600px);
  opacity: 0;
}
.flow-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.flow-right-leave {
  transform: translateX(0);
  opacity: 1;
}
.flow-right-leave-to {
  transform: translateX(600px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
  .fade-leave-to

  /* .fade-leave-active до версии 2.1.8 */
 {
  opacity: 0;
}

.fade-section-enter-active,
.fade-section-leave-active {
  transition: opacity 0.5s;
}

.fade-section-enter,
  .fade-section-leave-to

  /* .fade-leave-active до версии 2.1.8 */
 {
  filter: blur(0px);
  opacity: 0;
}

.error {
  color: #cc2936;
  position: absolute;
  top: -10px;
  font-size: 0.8rem;
  width: 100%;
  margin: 0;
  left: 50%;
  transform: translateX(-50%);
}

.bord {
  border: none;
  border-bottom: 2px solid #c8ccd4;
  transition: 0.15s ease-in-out;
}

.bord:focus {
  border-bottom: 2px solid black;
}

.modal__container {
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  max-width: 100vw;
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spans {
  position: absolute;
  top: -35px;
  right: -35px;
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

.tabs {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.tabs > div:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  border-top-left-radius: 2px;
  height: 100%;
  cursor: pointer;
}

.tabs > div:last-child {
  border-top-right-radius: 2px;
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
  min-height: 500px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 10px 10px 20px -13px black;
  position: relative;
  border-radius: 2px;
}

.not__active {
  background-color: #c8ccd4;
}

.content {
  width: 100%;
  height: calc(100% - 80px);
  overflow: hidden;
  position: relative;
}

.sign-in__content,
.sign-up__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
}

.inputs {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input {
  position: relative;
  width: 100%;
  text-align: center;
  margin: 15px;
}
.input .passwordEye {
  width: 20px;
  cursor: pointer;
  height: 20px;
  opacity: 0.5;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 90px;
  transition: 0.3s;
}
.input > input {
  width: 75%;
  padding: 10px;
  outline: none;
  transition: 0.2s;
}
input::placeholder {
  font-size: 1rem;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.buttons > button {
  outline: none;
  border: none;
  color: white;
  margin-top: 10px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-width: 200px;
  cursor: pointer;
  border-radius: 4px;
}

.create {
  background-color: #007aff;
  transition: 0.3s;
}

.cancel {
  background-color: rgba(242, 95, 92, 0.5);
}

.cancel:hover {
  background-color: rgba(242, 95, 92, 1);
}

.wrong {
  border-bottom: 2px solid #cc2936;
  color: black;
}

.correct {
  border-bottom: 2px solid #358600;
  color: black;
}

.wrong::placeholder,
.correct::placeholder {
  color: black;
}
</style>