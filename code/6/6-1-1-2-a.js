import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const Component = defineComponent({
  name: 'EditButton',
  template: `
        <button data-test="button" @click="redirect">編輯文章</button>
    `,
  props: ['isAuthenticated'],
  setup(props) {
    const $router = useRouter()
    const $route = useRoute()

    const redirect = () => {
      if (props.isAuthenticated) {
        $router.push(`/posts/${$route.params.id}/edit`)
      } else {
        $router.push('/home')
      }
    }
    return {
      redirect
    }
  }
})
