import { mount } from "@vue/test-utils";
import MagnitudeRangeComponent from "@/components/MagnitudeRangeComponent.vue";

describe("MagnitudeRangeComponent.vue", () => {
  const wrapper = mount(MagnitudeRangeComponent);

  it("has a h6 tag", () => {
    expect(wrapper.contains("h6")).toBe(true);
  });
});
