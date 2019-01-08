<template>
  <div class="header__section">
    <div class="header">
      <div class="buttons">
        <div
          class="sign-in__button"
          @click="$emit('open-modal')"
        >
          <p>Войти</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Open Sans Condensed", sans-serif;
}
.header__section {
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.sign-in__button {
  color: black;
  margin: 15px;
  padding: 15px;
  cursor: pointer;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007aff;
  transition: 0.3s;
  color: white;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.12);
}
.sign-in__button:hover {
  transform: translateY(-3px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
}
</style>
