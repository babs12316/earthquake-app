import { mount } from "@vue/test-utils";
import OccuranceURLComponent from "@/components/OccuranceURLComponent.vue";

describe("OccuranceURLComponent.vue", () => {
  const wrapper = mount(OccuranceURLComponent, {
    propsData: {
      url: "https://wwww.test.com"
    }
  });
  it("props are passed correclty", () => {
    expect(wrapper.props("url")).toBe("https://wwww.test.com");
  });
  it("has anchor tag", () => {
    expect(wrapper.contains("a")).toBe(true);
  });
});
