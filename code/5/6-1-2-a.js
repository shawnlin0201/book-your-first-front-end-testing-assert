import { defineComponent } from 'vue'

const App = defineComponent({
  name: 'HomePage',
  template: `
      <div>
        <button data-test="home_button" @click="$router.push('/')">首頁</button>
        <button data-test="about_button" @click="$router.push('/about')">關於我</button>
        <router-view />
      </div>
    `
})
const HomePage = defineComponent({
  name: 'HomePage',
  template: `
        <div data-test="container">首頁</div>
    `
})
const AboutPage = defineComponent({
  name: 'AboutPage',
  template: `
        <div data-test="container">關於我</div>
    `
})
