export const getCurrentDate = () => {
  var date = new Date()
  var offset = new Date().getTimezoneOffset()
  date = new Date(date.getTime() - offset * 60 * 1000)

  return date.toISOString().split('T')[0]
}
