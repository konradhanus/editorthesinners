/* eslint-disable testing-library/no-node-access */
import React from 'react';
import WrapperEditor from '../WrapperEditor';
import ShallowRenderer from 'react-test-renderer/shallow';
import TopPanel from '../../TopPanel';
import Drawer from '../../Drawer';
import Editor from '../../Editor';
import ElementProvider from '../../EditorContext';

describe('WrapperEditor', () => {
    it('should redner', () => {
        const view = ShallowRenderer.createRenderer();
        view.render(<WrapperEditor className={'className'}/>);
        const {key, props, type} = view.getRenderOutput();
        expect(type).toBe('div');
        expect(props.children).toEqual(
            <ElementProvider>
                <TopPanel />
                <Drawer />
                <Editor />
            </ElementProvider>
        );
    });
    // it('className is added to component', () => {
    //     const wrapper = shallow(<WrapperEditor />);
    //     const props = wrapper.props();
    //     console.log(props);
    // });
});