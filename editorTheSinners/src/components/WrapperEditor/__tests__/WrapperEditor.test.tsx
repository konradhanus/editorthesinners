import { shallow } from "enzyme";
import WrapperEditor from "../WrapperEditor";

it("should render", () => {
    const wrapper = shallow(
        <WrapperEditor className={"WrapperEditorClassName"} />
    );
    expect(wrapper.exists()).toEqual(true);
});

it("className is added to component", () => {
    const wrapper = shallow(
        <WrapperEditor className={"WrapperEditorClassName"} />
    );
    const className = "WrapperEditorClassName";

    expect(wrapper.prop("className")).toBe(className);
});
