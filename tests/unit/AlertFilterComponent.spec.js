import { mount } from "@vue/test-utils";
import AlertFilterComponent from "@/components/AlertFilterComponent.vue";

describe("AlertFilterComponent.vue", () => {
  const wrapper = mount(AlertFilterComponent);

  it("has a h6 tag", () => {
    expect(wrapper.contains("h6")).toBe(true);
  });
  it("has a select element", () => {
    expect(wrapper.contains("select")).toBe(true);
  });
});
