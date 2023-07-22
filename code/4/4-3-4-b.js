it('ParentComponent 應透過 Provide 正確的資料', async () => {
  const TestComponent = defineComponent({
    template: '<p data-test="target">{{ count }}</p>',
    setup() {
      const count = inject('count')
      return {
        count
      }
    }
  })
  const wrapper = mount(ParentComponent, {
    global: {
      stubs: {
        ChildComponent: TestComponent
      }
    }
  })
  await wrapper.find('[data-test="button"]').trigger('click')
  expect(wrapper.find('[data-test="target"]').text()).toBe('1')
})