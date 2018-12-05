<template>
  <div class="modal__container" @click.self="$emit('closeModal', $event); clearInputs()">
    <div class="modal">
      <span @click="$emit('closeModal', $event); clearInputs()">X</span>
      <div class="tabs" @click="changeTab($event)">
        <div class="sign-in__tab" :class="{ not__active: active }">
          Войти
        </div>
        <div class="sign-up__tab" :class="{ not__active: !active }">
          Зарегистрироваться
        </div>
      </div>
      <div class="content">
        <div class="sign-in__content" v-show="signIn">
          <div class="inputs">
            <div class="input" v-for="input in inputs.sign_in_inputs" :key="input.id" >
              <p class="error" v-show="input.error"> {{ input.inputMsg }} </p>
              <input type="text" v-model="inputObj[input.id]" class="bord" :id="input.id" :placeholder="input.placeholder" @blur="checkInput($event)">
            </div>
          </div>
          <div class="buttons">
            <button class="create" @click="sendRequest(currentTab)">
              Войти
            </button>
            <button class="cancel" @click="$emit('closeModal', $event); clearInputs()">
              Отменить
            </button>
          </div>
        </div>
        <div class="sign-up__content" v-show="!signIn">
          <div class="inputs">
            <div class="input" v-for="input in inputs.sign_up_inputs" :key="input.id">
              <p class="error" v-show="input.error"> {{ input.inputMsg }} </p>
              <input type="text" v-model="inputObj[input.id]" class="bord" :id="input.id" :placeholder="input.placeholder" @blur="checkInput($event)">
            </div>
          </div>
          <div class="buttons">
            <button class="create" @click="sendRequest(currentTab)">
              Зврегистрироваться
            </button>
            <button class="cancel" @click="$emit('closeModal', $event); clearInputs()">
              Отменить
            </button>
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
      signIn: true,
      inputs: {
        sign_up_inputs: {
          username: {
            error: false,
            inputMsg: '',
            id: 'username',
            placeholder: "Введите имя пользователя"
          },
          phone: {
            error: false,
            inputMsg: '',
            id: 'phone',
            placeholder: "Введите номер телефона"
          },
          email: {
            error: false,
            inputMsg: '',
            id: 'email',
            placeholder: "Введите email"
          },
          password: {
            error: false,
            inputMsg: '',
            id: 'password',
            placeholder: "Введите пароль"
          }
        },
        sign_in_inputs: {
          username: {
            error: false,
            inputMsg: '',
            id: 'username',
            placeholder: "Введите имя пользователя"
          },
          email: {
            error: false,
            inputMsg: '',
            id: 'email',
            placeholder: "Введите email"
          },
          password: {
            error: false,
            inputMsg: '',
            id: 'password',
            placeholder: "Введите пароль"
          }
        }
      },
      currentTab: 'sign_in',
      inputObj: {
        password: '',
        email: '',
        username: '',
      },
      match: {
        'username': false,
        'phone': false,
        'email': false,
        'password': false
      }
    }
  },
  methods: {
    clearInputs() {
      document.querySelectorAll('input').forEach((item) => {
        item.classList.remove('correct');
        this.inputObj = {
          password: '',
          phone: '',
          email: '',
          username: '',
        };
        item.classList.remove('wrong');
      });
            for (let input in this.inputs[`${this.currentTab}_inputs`]) {
        this.inputs[`${this.currentTab}_inputs`][input].error = false;
      }
    },
    sendRequest(type) {
      console.dir(this.match);
      if (type === 'SignUp') {
        let i = 0;
        for (let field in this.match) {
          if (this.match[field]) i++;
        }
        if (i === 4) {
          fetch('http://195.138.84.118:63110/api/users/sign-up', {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(this.inputObj)
          })
          .then((data) => data.json())
          .then((request) => {
            if (!request.error) {
              this.match = {
                'username': false,
                'phone': false,
                'email': false,
                'password': false
              }
            }
            console.dir(request)
            });
        }
      }
    },
    changeTab: function(event) {
      for (let input in this.inputs[`${this.currentTab}_inputs`]) {
        this.inputs[`${this.currentTab}_inputs`][input].error = false;
      }
      if (event.target.classList.contains('not__active')) {
        this.active = !this.active;
        this.signIn = !this.signIn;
      }
      if (this.currentTab === 'sign_up') {
        this.inputObj = {
          password: '',
          email: '',
          username: '',
        }
        this.currentTab = 'sign_in';
      }
      else {
        this.inputObj = {
          password: '',
          email: '',
          phone: '',
          username: '',
        }
        this.currentTab = 'sign_up';
      }
      this.clearInputs();
    },
    checkInput(event) {
      if (event.target.id === 'phone' && this.inputObj[event.target.id] != "") {
        if (/\+380\d{9}\b/gi.test(this.inputObj[event.target.id])) {
         event.target.classList.add('correct');
         event.target.classList.remove('wrong');
         this.match[event.target.id] = true;
         this.inputs[`${this.currentTab}_inputs`][event.target.id].error = false;
        }
        else {
          this.inputs[`${this.currentTab}_inputs`][event.target.id].error = true;
          this.inputs[`${this.currentTab}_inputs`][event.target.id].inputMsg = '+380 обязателен! Можно использовать только цифры!'
          this.match[event.target.id] = false;
          event.target.classList.add('wrong');
          event.target.classList.remove('correct');
        }
      }
      else if (event.target.id === 'email' && this.inputObj[event.target.id] != "") {
        if (/^[a-zA-z\d]+@[a-zA-Z\d]+\.com$/gi.test(this.inputObj[event.target.id])) {
          this.match[event.target.id] = true;
          event.target.classList.add('correct');
          event.target.classList.remove('wrong');
          this.inputs[`${this.currentTab}_inputs`][event.target.id].error = false;
        }
        else {
          this.inputs[`${this.currentTab}_inputs`][event.target.id].error = true;
          this.inputs[`${this.currentTab}_inputs`][event.target.id].inputMsg = 'Разрешены латинские буквы и цифры. "@" и .com обязательны!'
          this.match[event.target.id] = false;
          event.target.classList.add('wrong');
          event.target.classList.remove('correct');
        }
      }
      else if (this.inputObj[event.target.id] != "") {
        if (/^[a-zA-Z\d]+$/gi.test(this.inputObj[event.target.id])) {
          this.match[event.target.id] = true;
          event.target.classList.add('correct');
          this.inputs[`${this.currentTab}_inputs`][event.target.id].error = false;
          event.target.classList.remove('wrong');
        }
        else {
          this.inputs[`${this.currentTab}_inputs`][event.target.id].error = true;
          this.inputs[`${this.currentTab}_inputs`][event.target.id].inputMsg = 'Используйте только латинские буквы или цифры!'
          this.match[event.target.id] = false;
          event.target.classList.add('wrong');
          event.target.classList.remove('correct');
        }
      }
    }
  },
  computed: {
    
  },
  components: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.error {
  color: #CC2936;
  position: absolute;
  top: 0;
  font-size: 0.8rem;
  width: 100%;
  margin: 0;
  left: 50%;
  transform: translateX(-50%);
}
.bord {
  border: 1px solid black;
}
.modal__container {
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  background-color: rgba(7,7,7, 0.2);
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
  background-color: #F25F5C;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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
  border-top: 1px solid rgba(13,50,77, 1);
}
.modal {
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 400px;
  background-color: rgba(255,255,255,1);
  border: 2px solid rgba(13,50,77, 1);
  box-shadow: 1px 10px 50px -10px black;
  position: relative;
  border-radius: 10px;
}
.not__active {
  background-color: rgba(194,197,197, 1);
}
.content {
  width: 100%;
  height: calc(100% - 80px);
}
.sign-in__content, .sign-up__content {
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
.input {
  width: 100%;
  position: relative;
  text-align: center;
}
.input > input {
  margin: 15px;
  width: 75%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
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
  margin: 0px 5px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-width: 100px;
  cursor: pointer;
  border-radius: 4px;
}
.create:focus {
  background-color: rgba(33,161,121,0.8);
}
.cancel:focus {
  background-color: rgba(242,95,92,1);
}
 .create {
  background-color: rgba(33,161,121,0.4);
  transition: 0.4s;
}
 .create:hover {
  background-color: rgba(33,161,121,0.8);
}
.cancel {
  background-color: rgba(242,95,92,0.5);
}
.cancel:hover {
  background-color: rgba(242,95,92,1);
}
.wrong {
  border: 1px solid #CC2936;
  color: black;
}
.correct {
  border: 1px solid #358600;
  color: black;
}
.wrong::placeholder, .correct::placeholder {
  color: black;
}
</style>
