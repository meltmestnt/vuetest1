<template>
  <div class="main">

    <div class="main__container">
      <Menu :highlighted="$props.active"></Menu>
      <h1>Наша команда</h1>
      <section>
          <div class="right__rhombe"></div>
        <div class="content">
            
          <div class="team">
            <div
            @click="showCircle($event)"
              class="member"
              v-for="member in members"
              :key="member.name"
            >
            <Circlee />
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
import Circlee from "./Circlee";
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
  methods: {
    showCircle(e) {
      eventBus.$emit("circleshow", e, e.currentTarget);
    },
         
  },
  components: {
    Menu,
    Circlee
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  z-index: 99;
  box-sizing: border-box;
}
.right__rhombe {
    position: absolute;
    top: 0;
    right: 0;
    width: 85%;
    height: 65%;
    transform: rotate(-45deg) translate(60%, 120%);
    background-color: lightgrey;
    opacity: 0.15;
    display: block;
}
.blur {
  filter: blur(4px);
}

.team {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 1rem;
    align-items: center;
}
.member {
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-height: 275px;
    max-width: 275px;
    height: 275px;
    width: 275px;
    background-color: white;
    transition: 0.3s;
    cursor: pointer;
    box-shadow: 0px 0px 15px -8px black;
    margin: 25px 50px 25px 50px;
    position: relative;
    overflow: hidden;
}
.container__photo {
    width: 100%;
    height: 100%;
    overflow: auto;
}
.container__photo::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 99%;
    height: 99%;
    border: 1px solid white;
    z-index: 999;
}
.container__photo::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: 95%;
    z-index: 999;
    border: 5px solid rgba(33, 33, 33, 1);
}
.photo__rhombe {
    overflow: hidden;
    transform: rotate(-45deg);
    border: 5px solid rgba(33, 33, 33, 1);
    position: relative;
    z-index: 99;
    margin-top: 5px;
    min-width: 100px;
    width: 100px;
    height: 100px;
    min-height: 100px;
}
.photo__rhombe img {
    padding: 5px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
}
.member:hover {
    transform: translateY(-6px);
    box-shadow: 0px 4px 15px -8px black;
}
.member img {
    width: 125px;
    height: 125px;
}
.member h3 {
    margin-top: 25px;
    color: #007aff;
}
</style>