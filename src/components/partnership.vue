<template>
    <div class="main">
        <div class="main__container">
            <Menu :highlighted="$props.active"></Menu>
            <h1>Сотрудничество</h1>
            <section>
                <div class="content">
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Menu from './menu'
    export default {
        name: 'Partnership',
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
    
  },
        components: {
            Menu,
        }
    }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.blur {
  filter: blur(4px);
}
.main {
  background-color: rgba(255,255,255,0.5);
  width: 100vw;
  height: 100vh;
}
.main__container {
  width: 100vw;
  height: 100vh;
}

</style>