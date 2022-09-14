import { ComponentType, useState, MouseEvent, useContext } from "react";
import { EditorContext } from "../../EditorContext";
import Textarea  from "../../Form/Textarea";

interface ClassProp {
    className: string;
}

const BoardGeneratorForm: ComponentType<ClassProp> = ({className}) => {

    const [boardLevelContent, setBoardLevelContent] = useState<string>("");
    const editorContext = useContext(EditorContext);

    const handleClick = (event: MouseEvent) => {
        event.preventDefault();
        let content = (editorContext?.boardMatrix.matrix !== undefined) ? editorContext.boardMatrix.matrix : "";
        content = JSON.stringify(content);
        setBoardLevelContent(content);
    }

    return (
        <form className={className}>
            <Textarea
              name = "boardGenerator"
              cols = {47}
              rows = {10}
              readOnly = {true}
              value = {boardLevelContent}
            />
            <button onClick={(event: MouseEvent) => handleClick(event)}>Generate</button>
        </form>
    )
}

export default BoardGeneratorForm;