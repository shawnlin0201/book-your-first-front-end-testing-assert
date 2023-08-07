it('should clear mock.calls & mock.results', () => {
  const mockFn = vi.fn()

  mockFn(1, 2, 3) // first call
  mockFn(4, 5, 6) // second call

  expect(mockFn.mock.calls).toEqual([
    [1, 2, 3],
    [4, 5, 6]
  ])
  expect(mockFn.mock.results).toEqual([
    {
      type: 'return',
      value: undefined
    },
    {
      type: 'return',
      value: undefined
    }
  ])

  mockFn.mockClear()

  expect(mockFn.mock.calls).toEqual([])
  expect(mockFn.mock.results).toEqual([])
})
