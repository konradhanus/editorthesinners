import { shallow } from "enzyme";
import React, { useState } from "react";
import Drawer from "../Drawer";
import ElementListWrapper from "../ElementListWrapper";
import { boardElements, BoardElementExtened } from "../../../assets";

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
        // const useApiMock = (api: any, defaultValue: any) => {
        //     let state = defaultValue;
        //     let setState = (updater: any) => {
        //         if (typeof updater === "function") {
        //             state = updater(state);
        //         } else {
        //             state = updater;
        //         }
        //         ref.api = api({ state, setState });
        //     };
        //     let ref = {
        //         api: api({ state, setState }),
        //     };
        //     return ref;
        // };

        // const mockApi = useApiMock(someApi, someState);

        // mockApi.api.updateName("new name");
        // expect(mockApi.api.name).toEqual("new name");

        const boardElements: BoardElementExtened[] = [
            { path: "dirt1", name: "dirt1", valueId: 12, isSelected: false },
        ];

        // const setBoxesStatus = () => {
        //     return boardElements;
        // };

        // const setState = jest.fn();
        // const useStateSpy = jest.spyOn(React, "useState");
        // useStateSpy.mockImplementation((boardElements2) => [
        //     boardElements,
        //     setState,
        // ]);

        // Cache original functionality
        const realUseState = React.useState;

        // Stub the initial state
        const stubInitialState = boardElements;

        // Mock useState before rendering your component
        jest.spyOn(React, "useState").mockImplementationOnce(() =>
            realUseState(stubInitialState)
        );

        expect(drawer.containsMatchingElement(<ElementListWrapper />)).toEqual(
            true
        );

        console.log(drawer.find(ElementListWrapper).render());
    });
});
