import styled from "styled-components";
import assets from "../../assets";
import DrawerElement from "./DrawerElement";

const DrawerStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 16px;
    border-width: 10px;
    width: 30%;
    background-color: green;
    height: 1000px;
`;

const Drawer = () => (
    <div>
        {assets.map((singleAsset: string) => (
            <DrawerElement name={singleAsset}/>
        ))}
    </div>
)

export default Drawer