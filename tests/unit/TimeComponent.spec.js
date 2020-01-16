import { mount } from "@vue/test-utils";
import TimeComponent from "@/components/TimeComponent.vue";

describe("TimeComponent.vue", () => {
  const wrapper = mount(TimeComponent, {
    propsData: {
      time: 123456
    }
  });

  it("props are passed correclty", () => {
    expect(wrapper.props("time")).toBe(123456);
  });
 
});
