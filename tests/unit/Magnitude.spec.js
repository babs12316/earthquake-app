import { mount } from "@vue/test-utils";
import MagnitudeComponent from "@/components/MagnitudeComponent.vue";

describe("MagnitudeComponent.vue", () => {
  const wrapper = mount(MagnitudeComponent, {
    propsData: {
      mag: 2.789
    }
  });
  it("props are passed correclty", () => {
    expect(wrapper.props("mag")).toBe(2.789);
  });
});
