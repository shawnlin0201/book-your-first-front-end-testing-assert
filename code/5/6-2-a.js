export const useCounter = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount() {
      return this.count * 2
    }
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
