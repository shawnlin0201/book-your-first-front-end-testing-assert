import { mount } from "@vue/test-utils";

const wrapper = mount({
  template: `
  <div>
    <p v-if="false" data-test="no-render">
      此目標並不會被渲染至 DOM 上
      </p>
    <p v-show="false" data-test="only-hidden">
      此目標並不會被看見
      </p>
  </div>
  `,
});
const noRender = wrapper.find('[data-test="no-render"]');
const onlyHidden = wrapper.find('[data-test="only-hidden"]');

it('該元素不會被渲染在 DOM 上', () => {
    expect(noRender.exists()).toBeFalsy();
    // passed
    expect(noRender.isVisible()).toBeFalsy();
    // throw error: Cannot call isVisible on an empty DOMWrapper
})

it('該元素存在 DOM 上，只是此目標並不會被看見', () => {
    expect(onlyHidden.isVisible()).toBeFalsy();
    // passed
    expect(onlyHidden.exists()).toBeFalsy();
    // failed
})
