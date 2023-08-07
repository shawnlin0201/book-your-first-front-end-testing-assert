import { defineComponent } from 'vue'

const Home = defineComponent({
  name: 'HomePage',
  template: `
        <router-link to="/about" data-test="about">about</router-link>
    `
})

const About = defineComponent({
  name: 'AboutPage',
  template: `<p>About</p>`
})

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]
