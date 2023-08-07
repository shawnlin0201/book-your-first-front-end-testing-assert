it('mock.results', () => {
  const spy = vi.spyOn(Storage.prototype, 'setItem')

  localStorage.setItem('cache', [1, 2, 3])
  localStorage.setItem('cache', [4, 5, 6])

  expect(spy.mock.results).toEqual([
    { type: 'return', value: undefined },
    { type: 'return', value: undefined }
  ])
})
