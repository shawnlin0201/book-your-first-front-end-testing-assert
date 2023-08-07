it('透過 vi.fn 紀錄函式被使用的相關資訊', () => {
  const doSomeThing = vi.fn() // 透過 vi.fn 取代函式的實作

  doSomeThing(1, 2, 3) // 當該函式被呼叫時會紀錄使用狀況

  // 透過 vi.fn 所返回的 MockInstance 取得函式使用狀況
  expect(doSomeThing).toHaveBeenCalled()
  expect(doSomeThing).toHaveBeenCalledWith(1, 2, 3)
  expect(doSomeThing).toHaveBeenCalledTimes(1)
})
