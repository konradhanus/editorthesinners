import styled from 'styled-components';
import Editor from './Editor';
import { ComponentType } from 'react';
import { backgroundElement } from '../../assets';

const EditorStyle: ComponentType  = styled(Editor)`
    position: relative;
    width: 1430px;
    height: 770px;
    background: url(${backgroundElement[0].path});
    background-color: blue;
    background-size: 1430px 770px;
    background-repeat: no-repeat;
    border: 1px solid black;
`;

export default EditorStyle