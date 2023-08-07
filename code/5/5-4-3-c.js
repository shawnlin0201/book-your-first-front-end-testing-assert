import { power } from './utils'

const mocks = vi.hoisted(() => {
  return {
    multiply: vi.fn()
  }
})

vi.mock('./calc', () => {
  return {
    multiply: mocks.multiply
  }
})

it('透過 vi.mock 監聽依賴的模組方法', () => {
  power(2)
  expect(mocks.multiply).toHaveBeenCalledTimes(1)
  expect(mocks.multiply).toHaveBeenCalledWith(2, 2)
  power(3)
  power(4)
  expect(mocks.multiply).toHaveBeenCalledTimes(3)
  expect(mocks.multiply).toHaveBeenCalledWith(4, 4)
})
