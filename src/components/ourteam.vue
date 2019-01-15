<template>
  <div class="main">
    <div class="main__container">
      <Menu :highlighted="$props.active"></Menu>
      <h1>Наша команда</h1>
      <section>
        <div class="content">
          <div class="team">
            <div
              class="member"
              v-for="member in members"
              :key="member.name"
            >
                <div class="photo__rhombe">
                    <div class="container__photo">
                        <img :src="member.photo" alt="">
                    </div>
                    
                </div>
                
                <h3>{{member.name}}</h3>
                <h5>{{member.does}}</h5>
                <p>{{member.more}}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Menu from "./menu";
export default {
  name: "OurTeam",
  props: {
    active: {
      type: String
    }
  },
  data() {
    return {
        members: [
            {
                photo: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png',
                name: 'Денис Бакуров',
                does: 'Frontend',
                more: 'Разработка Frontend, дизайн сайта'
            },
            {
                photo: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png',
                name: 'Сергей Бендас',
                does: 'CEO и backend',
                more: 'Управление проектом, backend - разработка'
            },
            {
                photo: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png',
                name: 'Михаил Самойленко',
                does: 'Embedded разработчик',
                more: 'Разработка аппаратной части и ПО, сборка и отладка прототипов'
            },
            {
                photo: 'https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png',
                name: 'Глеб Максименко',
                does: 'Desktop разработчик',
                more: 'Разработка desktop ПО, интеграция с устройством'
            },
        ]
    };
  },
  methods: {},
  components: {
    Menu
  }
};
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
  background-color: rgba(255, 255, 255, 0.5);
  width: 100vw;
  height: 100vh;
}
.main__container {
  width: 100vw;
  height: 100vh;
}
.team {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 1.3rem;
    align-items: center;
}
.member {
    padding: 35px;
    flex: 0 35%;
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 400px;
    min-height: 400px;
    margin-top: 100px;
    margin-bottom: 75px;
    transition: 0.3s;
}
.container__photo {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.photo__rhombe {
    overflow:hidden;
    transform: rotate(-45deg);
    border: 5px solid rgba(33, 33, 33, 1);
    position: relative;
    z-index: 99;
    min-width: 250px;
    min-height: 250px;
}
.photo__rhombe img {
    overflow: hidden;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
}
.member img {
    width: 250px;
    height: 250px;
}
.member h3, h4, h5, p {
    margin: 5px;
}
.member h3 {
    margin-top: 75px;
}
</style>