import { defineComponent } from 'vue'

const Component = defineComponent({
  name: 'EditButton',
  template: `
      <router-link :to="getEditLink" data-test="button">編輯文章</router-link>
    `,
  props: ['isAuthenticated'],
  computed: {
    getEditLink() {
      if (this.isAuthenticated) {
        return `/posts/${this.$route.params.id}/edit`
      } else {
        return '/home'
      }
    }
  }
})
