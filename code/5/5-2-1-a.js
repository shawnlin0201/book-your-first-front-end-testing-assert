import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseModal',
  template: `
        <div data-test="modal" v-show="isShow">
          <p>{{ title }}</p>  
          <p>{{ content }}</p>
        </div>
    `,
  props: {
    isShow: {
      type: Boolean,
      default: false,
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    content: {
      type: String,
      default: '',
      required: true
    }
  }
})