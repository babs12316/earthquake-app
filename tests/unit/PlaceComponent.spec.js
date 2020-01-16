import { mount } from "@vue/test-utils";
import PlaceComponent from "@/components/PlaceComponent.vue";

describe("PlaceComponent.vue", () => {
  const wrapper = mount(PlaceComponent, {
    propsData: {
      place: "London"
    }
  });

  it("props are passed correclty", () => {
    expect(wrapper.props("place")).toBe("London");
  });
  it("has a h2 tag", () => {
    expect(wrapper.contains("h2")).toBe(true);
  });
});
