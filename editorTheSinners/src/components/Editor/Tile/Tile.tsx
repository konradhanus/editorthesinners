import { ComponentType, useContext } from "react";
import { Props } from ".";
import { EditorContext } from "../../EditorContext";

interface ClassProp {
    className: string
}

const Tile: ComponentType<Props & ClassProp> = ({className}) => {
    const selectedElement = useContext(EditorContext);

    return (
        <div className={className} onClick={() => console.log(selectedElement?.element)}></div>
    )
}

export default Tile;