import { shallow } from "enzyme";

import TopPanel from "../TopPanel";
import ResizeBoardForm from "../ResizeBoardForm";
import BoardGeneratorForm from "../BoardGeneratorForm";

describe("TopPanel Component", () => {
    const wrapper = shallow(<TopPanel className={"TopPanelClassName"} />);
    it("should render", () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it("className is added to component", () => {
        const className = "TopPanelClassName";

        expect(wrapper.prop("className")).toBe(className);
    });

    it("renders Childs components", () => {
        expect(wrapper.containsMatchingElement(<ResizeBoardForm />)).toEqual(
            true
        );
        expect(wrapper.containsMatchingElement(<BoardGeneratorForm />)).toEqual(
            true
        );
    });
});
