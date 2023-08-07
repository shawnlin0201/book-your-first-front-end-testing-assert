export const useCounter = defineStore('counter', () => {
  // 相當於 Option Store 中的 state
  const count = ref(0)

  // 相當於 Option Store 中的 getter
  const getCount = computed(() => formatText(count.value))

  // 相當於 Option Store 中的 action
  const increment = () => count.value++
  const decrement = () => count.value--

  // 私有方法（private methods）
  const formatText = (num) => `Current count is ${num}`

  return {
    // 公開狀態（public state）
    count,
    // 公開方法（public methods）
    getCount,
    increment,
    decrement
  }
})
