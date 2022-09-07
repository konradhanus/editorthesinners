import { FC } from "react";
import { DrowerElementProps } from "../ComponentsTypes";
import styled from "styled-components";

const DrowerElementStyle = styled.ul`
    display: inline-block;
`;

const ImageStyle = styled.img`
    width: 128px
`;

const DrawerElement: FC<DrowerElementProps> = ({ boardElement }) => (
    <DrowerElementStyle className="DrawerElement">
        <ImageStyle src={boardElement.path} alt={boardElement.name} />
    </DrowerElementStyle>
);

export default DrawerElement; 