import { mount } from "@vue/test-utils";
import MagnitudeSortComponent from "@/components/MagnitudeSortComponent.vue";

describe("MagnitudeSortComponent.vue", () => {
  const wrapper = mount(MagnitudeSortComponent);
  it("has a h6 tag", () => {
    expect(wrapper.contains("h6")).toBe(true);
  });
  it("has a magsort class", () => {
    expect(wrapper.contains(".magsort")).toBe(true);
  });

});
