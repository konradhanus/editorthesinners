import { createContext, ReactNode, useState } from "react";

interface IEditorElement {
    selectedElement: number|null,
}

type ElementContextType = {
    element: IEditorElement;
    updateElement: (valueId: number) => void;
}

type boardMatrixType = {
    boardMatrix: IBoardMatrix;
    updateBoardMatrix: (matrix: IBoardMatrix) => void;
}

interface Props {
    children: ReactNode
}

export interface IBoardMatrix {
    matrix: number[][]
}

export const EditorContext = createContext<ElementContextType & boardMatrixType | null>(null);

const ElementProvider = ({children}: Props) => {

    const height = Array(7).fill(0);
    const matrix = Array(13).fill(height);

    const [element, setElement] = useState<IEditorElement>({selectedElement: null});
    const [boardMatrix, setBoardMatrix] = useState<IBoardMatrix>({matrix: matrix});
    
    const updateElement = (valueId: number) => {
        setElement({selectedElement: valueId});
    }

    const updateBoardMatrix = (matrix: IBoardMatrix) => {
        setBoardMatrix(matrix);
    }

    const editorContextValue = { element, updateElement, boardMatrix, updateBoardMatrix };
    return <EditorContext.Provider value={editorContextValue}>{children}</EditorContext.Provider>;
}

export default ElementProvider;