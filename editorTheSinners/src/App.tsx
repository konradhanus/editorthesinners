import React from "react";
import Drawer from "./components/Drawer";
import WrapperEditor from "./components/WrapperEditor";
import DrawerElement from "./components/Drawer/DrawerElement";
import styled from "styled-components";

const AppStyle = styled.div`
    display: flex;
`

const App = () => (
    <div className="App">
        <WrapperEditor />
    </div>
)

export default App;