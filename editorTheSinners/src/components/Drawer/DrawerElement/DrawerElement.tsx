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
    },
    isSelected: boolean;
    setSelected: (id: number)=>void;
    id: number;
}; 


const DrawerElement: ComponentType<DrawerElementProps & Props> = 
    ({ className, boardElement, isSelected, id, setSelected }): JSX.Element => {

    const value = useContext(EditorContext);

    const handleClick = (name: string) => {
        setSelected(id);
        value?.updateElement(name); 
    }

    return (
        <li data-qa="DrawerElement" className={className}>
            <ImageStyle 
                src={boardElement.path} 
                alt={boardElement.name} 
                id={boardElement.name} 
                selected={isSelected}
                onClick={() => handleClick(boardElement.name)} />
        </li>
    );
    
}

export default DrawerElement; 