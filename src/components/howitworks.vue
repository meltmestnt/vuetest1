<template>
    <div class="main">
        <div class="main__container">
            <Menu :highlighted="$props.active"></Menu>
            <h1>Как это работает</h1>
            <section>
                <div class="content">
                    <p>Система состоит из трех компонентов: <br>
- Устройство для проведения анализа <br>
- Веб-сервис для обработки и хранения результатов измерений. <br>
- Специальное ПО для личного компьютера, необходимое для получения данных с устройства <br>

Принцип работы устройства достаточно прост: <br>
С нарушением работы щитовидной железы, изменяется скорость обмена веществ в организме. Что также ведет за собой изменение в насыщенности крови кислородом. Это и использует наше устройство – оно использует датчик, который по цвету крови определяет насыщение крови кислородом.

Результаты измерений считывает с устройства специальное ПО, установленное на персональный компьютер. И эти данные передает на сервер, на котором находится Веб-сервис.
</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Menu from './menu'
    export default {
        name: 'HowItWorks',
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
    font-size: 1.5rem;
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
section {
    align-items: flex-start;
}
p {
    text-align: center;
}
</style>