import Vue from 'vue'
import Router from 'vue-router'
import Main from './../components/main'
import Info from './../components/info'
import HowItWorks from './../components/howitworks'
import OurTeam from './../components/ourteam'
import Partnership from './../components/partnership'
import Contact from './../components/contact'


Vue.use(Router)

const router = new Router({
  mode: "history",
  fallback: false,
  routes: [
    {
      path: "/",
      component: Main,
      name: "home",
      props: {
        active: "home"
      }
    },
    {
      path: "/info",
      component: Info,
      name: "info",
      props: {
        active: "info"
      }
    },
    {
      path: "/howitworks",
      component: HowItWorks,
      name: "howitworks",
      props: {
        active: "howitworks"
      }
    },
    {
      path: "/ourteam",
      component: OurTeam,
      name: "ourteam",
        props: {
            active: 'ourteam'
        }
    },
    {
      path: "/partnership",
      component: Partnership,
      name: "partnership",
        props: {
            active: 'partnership'
        }
    },
    {
      path: "/contact",
      component: Contact,
      name: "contact",
        props: {
            active: 'contact'
        }
    }
  ]
});
export default router