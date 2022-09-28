import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import WrapperEditor from "../../WrapperEditor";
import { Counter } from "../../../containers/Counter";

describe("App Component", () => {
    const className = "AppClassName";
    const wrapper = shallow(<App className={className} />);
    it("should render", () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it("className is added to component", () => {
        expect(wrapper.prop("className")).toBeDefined();
    });

    it("renders childs components", () => {
        expect(wrapper.containsMatchingElement(<Counter />)).toEqual(true);
        expect(wrapper.containsMatchingElement(<WrapperEditor />)).toEqual(
            true
        );
    });
});
