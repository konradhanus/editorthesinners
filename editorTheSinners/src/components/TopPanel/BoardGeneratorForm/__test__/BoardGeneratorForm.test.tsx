import { shallow } from "enzyme";
import BoardGeneratorForm from "../BoardGeneratorForm";
import Textarea from "../../../Form/Textarea";
import { TextareaProps } from "../../../Form/Textarea/Textarea";

describe("BoardGeneratorForm Component", () => {
    const className = "BoardGeneratorFormClassName";
    const boardGeneratorForm = shallow(
        <BoardGeneratorForm className={className} />
    );

    it("should render", () => {
        expect(boardGeneratorForm.exists()).toEqual(true);
    });

    it("className is added to component", () => {
        expect(boardGeneratorForm.prop("className")).toBe(className);
    });

    it("renders child component", () => {
        const props: TextareaProps = {
            name: "boardGenerator",
            cols: 47,
            rows: 10,
            readOnly: true,
            value: "",
        };

        expect(
            boardGeneratorForm.containsMatchingElement(<Textarea {...props} />)
        ).toBe(true);
        expect(boardGeneratorForm.find("button")).toHaveLength(1);
    });
});
