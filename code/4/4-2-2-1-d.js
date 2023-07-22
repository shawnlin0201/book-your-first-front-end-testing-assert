const wrapper = mount(App)
console.log(wrapper.find('[data-test="target"]').classes())
// [ 'text-md' ]
console.log(wrapper.find('[data-test="target"]').classes('text-md'))
// true