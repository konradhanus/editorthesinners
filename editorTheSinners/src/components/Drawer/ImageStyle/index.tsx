import styled from "styled-components";

interface ImageStyleProps {
    selected: boolean;
}

const ImageStyle = styled.img<ImageStyleProps>`
    width: 110px;
    margin: 5px;
    border: ${props => {
        return props.selected ? 3 : 0 
    }}px solid black;
`;

export default ImageStyle;