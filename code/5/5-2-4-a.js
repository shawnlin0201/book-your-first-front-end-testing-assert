import { defineComponent } from 'vue'

const Component = defineComponent({
  name: 'MemberInfoButton',
  template: `
        <button data-test="button" @click="redirect">會員資料</button>
    `,
  props: ['isAuthenticated'],
  methods: {
    redirect() {
      if (this.isAuthenticated) {
        this.$router.push('/member')
      } else {
        this.$router.push('/404')
      }
    }
  }
})
