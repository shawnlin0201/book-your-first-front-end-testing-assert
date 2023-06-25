import { mount } from "@vue/test-utils";

const wrapper = mount({
  template: `<p data-test="target" ref="target">想斷言的目標</p>`,
});

console.log(wrapper.find("p").html());
console.log(wrapper.find('[data-test="target"]').html());
console.log(wrapper.find({ ref: "target" }).html());
