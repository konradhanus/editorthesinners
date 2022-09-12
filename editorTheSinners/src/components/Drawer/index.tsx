import styled from "styled-components";
import Drawer from "./Drawer";
import { ComponentType } from "react";

const DrawerStyle: ComponentType = styled(Drawer)`
    grid-area: 2 / 1 / 6 / 2;
    background-color: green;
`;

export default DrawerStyle;
