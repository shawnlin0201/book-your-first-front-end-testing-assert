const loadCacheFromLocalStorage = () => {
  localStorage.getItem('cache')
}

it('捕捉 localStorage.getItem 的使用狀況', () => {
  const spy = vi.spyOn(Storage.prototype, 'getItem')

  loadCacheFromLocalStorage()

  expect(spy).toHaveBeenCalled()
  expect(spy).toHaveBeenCalledWith('cache')
  expect(spy).toHaveBeenCalledTimes(1)

  loadCacheFromLocalStorage()
  loadCacheFromLocalStorage()

  expect(spy).toHaveBeenCalledTimes(3)
})
