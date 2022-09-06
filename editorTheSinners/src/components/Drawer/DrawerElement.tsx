import { FC } from "react";
import { DrowerElementProps } from "../ComponentsTypes";
import styled from "styled-components";

const DrowerElementStyle = styled.div`
    border-width: 10px;
    height: 129px;
    width: 129px;
    margin: 5px;
`;

const DrawerElement: FC<DrowerElementProps> = ({ name }) => (
    <DrowerElementStyle>
        <img src={name} alt="dirt1" />
    </DrowerElementStyle>
);

export default DrawerElement;
