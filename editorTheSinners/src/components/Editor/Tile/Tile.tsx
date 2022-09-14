import { ComponentType, useContext, useRef, useState } from "react";
import { Props } from ".";
import { EditorContext } from "../../EditorContext";
import { boardElements} from "../../../assets";

interface ClassProp {
    className: string
}

type AssetName = string|null|undefined;

const getAssetValueIdByName = (name: AssetName) => {
    const foundBoardElement = boardElements.find(boardElement => boardElement.name == name);
    return (foundBoardElement !== undefined) ? foundBoardElement.valueId : 0;
}

const Tile: ComponentType<Props & ClassProp> = ({className, x, y, value, updateTile}) => {
    const selectedElement = useContext(EditorContext);
   
    const handleClick = () => {
        const assetName = selectedElement?.element.selectedElement;
        const valueId = getAssetValueIdByName(assetName);
     
        updateTile(x, y, valueId);

        // if (!isClicked) {
        //     currentTile.current?.setAttribute('style', `background-image: url(${url}`);
        //     setIsClicked(true);
        // }
        // else {
        //     setIsClicked(false);
        //     currentTile.current?.removeAttribute('style');
        // }
    }

    return (
        <div className={className} onClick={() => handleClick()}></div>
    )
}

export default Tile;