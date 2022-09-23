import React from 'react';
import { useContext } from "react";
import { ComponentType } from "react";
import { EditorContext } from "../../EditorContext";
import ImageStyle from '../ImageStyle';

interface Props {
    className: string
}

export interface DrawerElementProps {
    boardElement: {
        path: string,
        name: string,
        valueId: number,
    },
    isSelected: boolean;
    setSelected: (id: number) => void;
    id: number;
}; 


const DrawerElement: ComponentType<DrawerElementProps & Props> = 
    ({ className, boardElement, isSelected, id, setSelected }): JSX.Element => {

    const value = useContext(EditorContext);

    const handleClick = (valueId: number) => {
        setSelected(id);
        if (valueId === value?.element.selectedElement) {
            value?.updateElement(0); 
        } else {
            value?.updateElement(valueId); 
        }
    }

    return (
        <li data-qa="DrawerElement" className={className}>
            <ImageStyle 
                src={boardElement.path} 
                alt={boardElement.name} 
                id={boardElement.name} 
                selected={isSelected}
                onClick={() => handleClick(boardElement.valueId)} />
        </li>
    );
    
}

export default DrawerElement; 