import { mount } from "@vue/test-utils";
import DateRangeComponent from "@/components/DateRangeComponent.vue";

describe("DateRangeComponent.vue", () => {
  const wrapper = mount(DateRangeComponent);

  it("has a h6 tag", () => {
    expect(wrapper.contains("h6")).toBe(true);
  });
  it("has a p tag", () => {
    expect(wrapper.contains("p")).toBe(true);
  });
});
