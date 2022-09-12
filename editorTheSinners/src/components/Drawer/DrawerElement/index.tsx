import { ComponentType, FC } from "react";

import styled from "styled-components";
import DrawerElement, { DrawerElementProps } from "./DrawerElement";

const DrowerElementStyle: ComponentType<DrawerElementProps> = styled(
    DrawerElement
)`
    display: inline-block;
    box-sizing: border-box;
`;

export default DrowerElementStyle;
