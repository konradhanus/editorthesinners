import { shallow } from "enzyme";
import Drawer from "../Drawer";
import ElementListWrapper from "../ElementListWrapper";

describe("Drawer component", () => {
    const className = "drawerClassName";
    const drawer = shallow(<Drawer className={className} />);

    it("should render Drower", () => {
        expect(drawer.exists()).toEqual(true);
    });

    it("className is added to the Drawer component", () => {
        expect(drawer.prop("className")).toBeDefined();
    });

    it("renders childs Drawer components", () => {
        expect(drawer.containsMatchingElement(<ElementListWrapper />)).toEqual(
            true
        );
    });
});
