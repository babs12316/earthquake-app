import { mount } from "@vue/test-utils";
import DateSortComponent from "@/components/DateSortComponent.vue";

describe("DateSortComponent.vue", () => {
  const wrapper = mount(DateSortComponent);
  it("has a h6 tag", () => {
    expect(wrapper.contains("h6")).toBe(true);
  });
  it("has a datesort class", () => {
    expect(wrapper.contains(".datesort")).toBe(true);
  });
});
