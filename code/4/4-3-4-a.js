const ChildComponent = defineComponent({
  name: 'ChildComponent',
  template: `
      <div>{{ count }}</div>
    `,
  setup() {
    const count = inject('count')
    return {
      count
    }
  }
})
const ParentComponent = defineComponent({
  name: 'ParentComponent',
  template: `
      <div>
        <button
          data-test="button"
          @click="count++"
        >
          add
        </button>
        <ChildComponent />
      </div>
    `,
  setup() {
    const count = ref(0)
    provide('count', readonly(count))
    return {
      count
    }
  },
  components: {
    ChildComponent
  }
})
