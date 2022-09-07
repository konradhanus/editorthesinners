import styled from "styled-components";
import { boardElements } from "../../assets";
import DrawerElement from "./DrawerElement";
import { DrowerElementProps } from "../ComponentsTypes";
import { element } from "prop-types";

const DrawerStyle = styled.div`
    flex-grow: 2;
`;

const ElementListWrapper = styled.ul`
    color: red;
`;

const Drawer = () => (
    <DrawerStyle className="Drawer">
        <ElementListWrapper>
            {boardElements.map((singleBoardelement) => (
                <DrawerElement boardElement={singleBoardelement}/>
            ))}
        </ElementListWrapper>
    </DrawerStyle>
)

export default Drawer