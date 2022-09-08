
import { useState, useContext } from "react";
import { boardElements } from "../../assets";
import DrawerElement from "../Drawer/DrawerElement";
import ElementListWrapper from './ElementListWrapper';
import { EditorContext } from './../EditorContext';
export interface Props {
    className: string
}

const Drawer = (props: Props) => {
    return(
        <div className={props.className}>
            <ElementListWrapper>
                {boardElements.map((singleBoardelement) => (
                    <DrawerElement boardElement={singleBoardelement} key={singleBoardelement.name}/>
                ))}
            </ElementListWrapper>
        </div>
    );
}

export default Drawer;