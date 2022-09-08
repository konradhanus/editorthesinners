import { useState } from "react";
import Drawer from "../Drawer";
import Editor from "../Editor";
import ElementProvider from "../EditorContext";
import React, { createContext, } from "react";

export interface Props {
    className: string
}

const WrapperEditor = ({className}: Props) => {
    return (
    <div data-qa="WrapperEditor" className={className}>
        <ElementProvider>
            <Drawer />
            <Editor />
        </ElementProvider>
    </div>
);
}

export default WrapperEditor;
    