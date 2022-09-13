import React, { createContext, ReactNode, useState } from "react";

interface IEditorElement {
    selectedElement: string|null,
}

type ElementContextType = {
    element: IEditorElement;
    updateElement: (name: string) => void;
}

type boardMatrixType = {
    boardMatrix: IBoardMatrix;
    updateBoardMatrix: (matrix: IBoardMatrix) => void;
}

interface Props {
    children: ReactNode
}

interface IBoardMatrix {
    matrix: number[][]
}

const matrixData = [
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
    [0,1,2,3,4,5,6],
];

export const EditorContext = createContext<ElementContextType & boardMatrixType | null>(null);

const ElementProvider = ({children}: Props) => {

    const [element, setElement] = useState<IEditorElement>({selectedElement: null});
    const [boardMatrix, setBoardMatrix] = useState<IBoardMatrix>({matrix: matrixData});
    
    const updateElement = (name: string) => {
        setElement({selectedElement: name});
    }

    const updateBoardMatrix = (matrix: IBoardMatrix) => {
        setBoardMatrix(matrix);
    }

    const editorContextValue = { element, updateElement, boardMatrix, updateBoardMatrix };
    return <EditorContext.Provider value={editorContextValue}>{children}</EditorContext.Provider>;
}

export default ElementProvider;