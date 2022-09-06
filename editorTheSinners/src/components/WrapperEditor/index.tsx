import styled from "styled-components";
import Drawer from "../Drawer";

const WrapperEditorStyle = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
`;

const WrapperEditor = () => (
    <WrapperEditorStyle>
        <Drawer />
    </WrapperEditorStyle>
)

export default WrapperEditor