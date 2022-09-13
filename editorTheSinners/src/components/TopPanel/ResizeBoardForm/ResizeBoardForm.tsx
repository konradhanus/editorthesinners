import { ComponentType, MouseEvent, useContext, useState } from "react";
import { EditorContext } from "../../EditorContext";
import Input from "../../Form/Input";
import { ChangeEvent } from "react";

interface ResizeBoardFormProps {
    className: string
}

const ResizeBoardForm: ComponentType<ResizeBoardFormProps> = ({className}) => {

    const editorContext = useContext(EditorContext);
    const [row, setRow] = useState<number>(0);
    const [col, setCol] = useState<number>(0);

    const createBoardMatrix = (row: number, col: number) => {
        const height = Array(row).fill(0);
        const matrix = Array(col).fill(height);

        return matrix;
    };

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();

        const boardMatrix = createBoardMatrix(row, col);

        editorContext?.updateBoardMatrix({matrix: boardMatrix});
    }

    return (
        <form className={className}>
            <Input 
                name="row" 
                placeholder="row" 
                type="number" 
                value={row} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setRow(parseInt(e.target.value))} 
            />
            <Input
                name="col"
                placeholder="col"
                type="number"
                value={col}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCol(parseInt(e.target.value))}
            />
            <button onClick={(event: MouseEvent) => handleClick(event)}>Resize board</button>
        </form>
    )
}

export default ResizeBoardForm;
