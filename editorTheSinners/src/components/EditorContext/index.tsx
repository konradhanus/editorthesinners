import React, { createContext, FC, ReactNode, useState } from "react";

interface IEditorContext {
    selectedElement: string|null,
}

type ElementContextType = {
    element: IEditorContext;
    updateElement: (name: string) => void;
}

interface Props {
    children: ReactNode
}

export const EditorContext = createContext<ElementContextType | null>(null);

const ElementProvider = ({children}: Props) => {

    const [element, setElement] = useState<IEditorContext>({selectedElement: null});
    const updateElement = (name: string) => {
        setElement({selectedElement: name});
    }
    return <EditorContext.Provider value={{ element, updateElement }}>{children}</EditorContext.Provider>;
}

export default ElementProvider;