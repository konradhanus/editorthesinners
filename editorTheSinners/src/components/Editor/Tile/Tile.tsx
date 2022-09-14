import { ComponentType, useContext, useRef, useState } from "react";
import { Props } from ".";
import { EditorContext } from "../../EditorContext";
import { boardElements} from "../../../assets";

interface ClassProp {
    className: string
}

const getAssetByName = (name: string|null|undefined) => {
    const foundBoardElement = boardElements.find(boardElement=> boardElement.name ==  name);
    return foundBoardElement?.path;
}

const Tile: ComponentType<Props & ClassProp> = ({className}) => {
    const selectedElement = useContext(EditorContext);
    const [isClicked, setIsClicked] = useState(false);
    const currentTile = useRef<HTMLDivElement>(null);

    
    const handleClick = () => {
        const url = getAssetByName(selectedElement?.element.selectedElement)?.toString();

        if (!isClicked) {
            currentTile.current?.setAttribute('style', `background-image: url(${url}`);
            setIsClicked(true);
        }
        else {
            setIsClicked(false);
            currentTile.current?.removeAttribute('style');
        }
    }

    return (
        <div className={className} ref={currentTile} onClick={() => handleClick()}></div>
    )
}

export default Tile;