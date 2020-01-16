import { mount } from "@vue/test-utils";
import MapComponent from "@/components/MapComponent.vue";
import { config } from "@vue/test-utils";

config.silent = false;

describe("MapComponent.vue", () => {
  const wrapper = mount(MapComponent, {
    propsData: {
      xlat: 22.3359,
      ylng: 55.8798
    }
  });

  it("props are passed correclty", () => {
    expect(wrapper.props("xlat")).toBe(22.3359);
  });
  it("props are passed correclty", () => {
    expect(wrapper.props("ylng")).toBe(55.8798);
  });
  it("has a map class", () => {
    expect(wrapper.contains(".map")).toBe(true);
  });
});
