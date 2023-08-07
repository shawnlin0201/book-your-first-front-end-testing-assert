import sinon from 'sinon'

const wrapper = mount(component, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: sinon.spy
      })
    ]
  }
})
