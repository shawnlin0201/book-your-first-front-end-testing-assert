export const useCounter = defineStore('counter', () => {
  // 相當於 state
  const count = ref(0)
  // 相當於 getter
  const doubleCount = computed(() => count.value * 2)
  // 相當於 action
  const increment = () => count.value++
  const decrement = () => count.value--

  return {
    count,
    doubleCount,
    increment,
    decrement
  }
})
