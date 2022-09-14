import { ComponentType, useContext, useState } from "react";
import { Props } from ".";
import { EditorContext } from "../../EditorContext";
import { boardElements} from "../../../assets"; 

interface ClassProp {
    className: string
}
export const translateValueIdToImage = (valueId: number) => {
    const singleElement = boardElements.find(boardElement => boardElement.valueId === valueId);

    return singleElement?.path;
}

const Tile: ComponentType<Props & ClassProp> = ({className, x, y, updateTile}) => {
    const selectedElement = useContext(EditorContext);
    const [isClicked, setIsClicked] = useState(false);
   
    const handleClick = () => {
        const valueId = (selectedElement?.element.selectedElement) ? selectedElement?.element.selectedElement : 0;
        console.log(valueId);
        
        if (!isClicked) {
            updateTile(x, y, valueId);
            setIsClicked(true);
        }
        else {
            updateTile(x, y, 0);
            setIsClicked(false);
        }
    }

    return (
        <div className={className} onClick={() => handleClick()}></div>
    )
}

export default Tile;