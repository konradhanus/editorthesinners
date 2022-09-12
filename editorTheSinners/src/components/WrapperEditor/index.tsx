import styled from "styled-components";
import WrapperEditor from "./WrapperEditor";
import { ComponentType } from "react";

const WrapperEditorStyle: ComponentType = styled(WrapperEditor)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export default WrapperEditorStyle;
