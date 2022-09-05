import { FunctionComponent } from "react";
import { DrowerElementProps } from "../ComponentsTypes";
import styled from "styled-components";
import {
    dirt1,
    dirt2,
    dirt3,
    dirt4,
    dirt5,
    dirt6,
    dirt7,
    dirt8,
    dirt9,
    dirt10,
    dirt11,
    dirt12,
    dirt13,
    dirt14,
    dirt15,
    dirt16,
    dirt17,
    dirt18,
    layer1,
    layer2,
    layer3,
    layer4,
    wizzard,
    enemy,
    water,
    box,
    background,
} from "./../../assets/index";

export const DrowerElementStyle = styled.div`
    border-width: 10px;
    height: 129px;
    width: 129x;
    margin: 5px;
`;

const getSrcPathByName = (name: string) => {
    let src = "";
    switch (name) {
        case "dirt1":
            src = dirt1;
            break;
        case "dirt2":
            src = dirt2;
            break;
        case "dirt3":
            src = dirt3;
            break;
        case "dirt4":
            src = dirt4;
            break;
        case "dirt5":
            src = dirt5;
            break;
        case "dirt6":
            src = dirt6;
            break;
        case "dirt7":
            src = dirt7;
            break;
        case "dirt8":
            src = dirt8;
            break;
        case "dirt9":
            src = dirt9;
            break;
        case "dirt10":
            src = dirt10;
            break;
        default:
            src = box;
    }

    return src;
};

const DrowerElement: FunctionComponent<DrowerElementProps> = ({ name }) => {
    return (
        <DrowerElementStyle>
            <img src={getSrcPathByName(name)} alt="dirt1" />
        </DrowerElementStyle>
    );
};

export default DrowerElement;
