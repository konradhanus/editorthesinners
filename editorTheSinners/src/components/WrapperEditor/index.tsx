import styled from "styled-components";
import Drawer from "../Drawer";
import { FC } from 'react';
import Editor from "../Editor";

const WrapperEditorStyle = styled.div`
    display: flex;
    align-items: stretch;
`;

const WrapperEditor = () => (
    <WrapperEditorStyle className="WrapperEditor">
        <Drawer />
        <Editor />
    </WrapperEditorStyle>
)

export default WrapperEditor