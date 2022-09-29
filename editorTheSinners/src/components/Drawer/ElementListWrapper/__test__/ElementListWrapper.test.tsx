import { shallow } from "enzyme";
import ElementListWrapper from "../";

describe("ElementListWrapper component", () => {
    const elementListWrapper = shallow(<ElementListWrapper />);
    it("should render ElementListWrapper component", () => {
        expect(elementListWrapper.exists()).toEqual(true);
    });

    it("renders childs ElementListWrapper components", () => {
        console.log(elementListWrapper);
    });
});
