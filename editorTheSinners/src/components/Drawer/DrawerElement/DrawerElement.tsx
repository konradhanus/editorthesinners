import { useContext, useEffect, useRef } from "react";
import { ComponentType } from "react";
import { EditorContext } from "../../EditorContext";
import ElementListWrapper from "../ElementListWrapper";
import ImageStyle from '../ImageStyle';

interface Props {
    className: string
}

export interface DrawerElementProps {
    boardElement: {
        path: string,
        name: string,
    },
};

const DrawerElement: ComponentType<DrawerElementProps & Props> = ({ className, boardElement }): JSX.Element => {
    const value = useContext(EditorContext);
    const ref = useRef<HTMLLIElement>(null); 

    const handleClick = (name: string) => {

        const selectedElements = document.querySelectorAll("li[data-selected='true']");

        selectedElements.forEach((element) => {
            element.removeAttribute('style');
            element.removeAttribute('data-selected');
        })

        ref.current?.setAttribute('style', 'border: 2px solid black');
        ref.current?.setAttribute('data-selected', 'true');

        value?.updateElement(name); 
    }

    return (


        <li data-qa="DrawerElement" ref={ref} className={className}>
            <ImageStyle src={boardElement.path} alt={boardElement.name} id={boardElement.name} onClick={() => handleClick(boardElement.name)} />
        </li>
    );
    
}

export default DrawerElement; 