it('mock.calls & lastCall', () => {
  const spy = vi.spyOn(Storage.prototype, 'setItem')

  localStorage.setItem('cache', [1, 2, 3])
  localStorage.setItem('cache', [4, 5, 6])

  expect(spy.mock.calls).toEqual([
    ['cache', [1, 2, 3]], // first call
    ['cache', [4, 5, 6]] // second call
  ])
  expect(spy.mock.lastCall).toEqual(
    ['cache', [4, 5, 6]] // last call
  )
})
