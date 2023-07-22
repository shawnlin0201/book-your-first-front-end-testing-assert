const formatDate = (date) => {
  var newDate = new Date(date)
  var offset = new Date().getTimezoneOffset()
  newDate = new Date(newDate.getTime() - offset * 60 * 1000)

  return newDate.toISOString().split('T')[0]
}
it('formatDate 應該針對日期輸出對應的格式', async () => {
  expect(formatDate('2023/07/22')).toBe('2023-07-22')
})
