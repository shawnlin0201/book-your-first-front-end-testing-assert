import { defineComponent } from 'vue'

const Component = defineComponent({
  name: 'EditButton',
  template: `
        <button data-test="button" @click="redirect">編輯文章</button>
    `,
  props: ['isAuthenticated'],
  methods: {
    redirect() {
      if (this.isAuthenticated) {
        this.$router.push(`/posts/${this.$route.params.id}/edit`)
      } else {
        this.$router.push('/login')
      }
    }
  }
})
