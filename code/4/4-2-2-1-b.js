const wrapper = mount(App)
console.log(wrapper.find('[data-test="link"]').attributes('href'))
// https://ithelp.ithome.com.tw/
console.log(wrapper.find('[data-test="link"]').attributes('notExist'))
// undefined