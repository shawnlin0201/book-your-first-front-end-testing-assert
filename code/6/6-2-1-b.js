import { setActivePinia, createPinia } from 'pinia'
import { useCounter } from '@/store/useCounter'

let counter
beforeEach(() => {
  setActivePinia(createPinia())
  counter = useCounter()
})

it('should count 0', () => {
  expect(counter.count).toBe(0)
  expect(counter.getCount).toBe('Current count is 0')
})
it('should increment count', () => {
  counter.increment()
  expect(counter.count).toBe(1)
  expect(counter.getCount).toBe('Current count is 1')
})

it('should decrement count', () => {
  counter.decrement()
  expect(counter.count).toBe(-1)
  expect(counter.getCount).toBe('Current count is -1')
})
