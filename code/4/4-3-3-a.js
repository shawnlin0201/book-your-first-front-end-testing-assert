import { mount } from '@vue/test-utils'
import { expect } from 'vitest'
import { defineComponent } from 'vue'

const component = defineComponent({
  name: 'BaseComponent',
  template: `
      <div>
        <button
          data-test="prev"
          @click="$emit('changePage', 'prev')"
        >
            Prev
        </button>
        <button
          data-test="next"
          @click="$emit('changePage', 'next')"
        >
            Next
        </button>
      </div>
    `
})

it('點擊上下頁按鈕父層應接受到對應 emit 資訊', async () => {
  const wrapper = mount(component)

  await wrapper.find('[data-test="prev"]').trigger('click') 
  // wrapper.emitted() = { changePage: [ [ 'prev' ] ] }

  await wrapper.find('[data-test="next"]').trigger('click')
  // wrapper.emitted() = { changePage: [ [ 'prev' ], [ 'next' ] ] }

  expect(wrapper.emitted()).toHaveProperty('changePage')
  expect(wrapper.emitted().changePage).toHaveLength(2)
  expect(wrapper.emitted().changePage[0][0]).toBe('prev')
  expect(wrapper.emitted().changePage[1][0]).toBe('next')
  // passed
})
