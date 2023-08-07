const useCounter = defineStore('counter', () => {
  return {
    count: ref(0)
  }
})

const App = defineComponent({
  name: 'HomePage',
  template: `
      <div>
        <p data-test="count">{{ counter.count }}</p>
      </div>
    `,
  setup() {
    const counter = useCounter()
    return {
      counter
    }
  }
})
