import { mount } from "@vue/test-utils";
import AlertComponent from "@/components/AlertComponent.vue";

describe("AlertComponent.vue", () => {
  const wrapper = mount(AlertComponent, {
    propsData: {
      alert: "Red"
    }
  });
  it("props are passed correclty", () => {
    expect(wrapper.props("alert")).toBe("Red");
  });
  it("has h6 tag", () => {
    expect(wrapper.contains("h6")).toBe(true);
  });
});
