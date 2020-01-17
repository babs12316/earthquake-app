import { mount } from "@vue/test-utils";
import TsunamiComponent from "@/components/TsunamiComponent.vue";

describe("TsunamiComponent.vue", () => {
  const wrapper = mount(TsunamiComponent, {
    propsData: {
      tsunami: 1
    }
  });
  it("props are passed correclty", () => {
    expect(wrapper.props("tsunami")).toBe(1);
  });
  it("has h6 tag", () => {
    expect(wrapper.contains("h6")).toBe(true);
  });
});
