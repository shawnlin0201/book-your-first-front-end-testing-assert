it('mock.instances 紀錄所有模擬對象的實例', () => {
  const mockFn = vi.fn()

  const obj1 = { name: 'obj1' }
  const obj2 = { name: 'obj2' }

  mockFn.call(obj1, 1, 2, 3) // first call
  mockFn.call(obj2, 4, 5, 6) // second call

  expect(mockFn.mock.instances).toEqual([
    obj1, // first call
    obj2 // second call
  ])
})
