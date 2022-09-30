import { shallow } from 'enzyme';
import Drawer from '../Drawer';
import DrawerElement from '../DrawerElement';
import ElementListWrapper from '../ElementListWrapper';
import React from 'react';

describe('Drawer component', () => {
    const className = 'drawerClassName';
    const drawer = shallow(<Drawer className={className} />);

    it('should render Drower', () => {
        expect(drawer.exists()).toEqual(true);
    });

    it('className is added to the Drawer component', () => {
        expect(drawer.prop('className')).toBeDefined();
    });

    it('renders childs Drawer components', () => {
        expect(drawer.containsMatchingElement(<ElementListWrapper />)).toEqual(
            true
        );

        const myInitialState = [
            { path: 'dirt1', name: 'dirt1', valueId: 1, isSelected: false },
            { path: 'dirt1', name: 'dirt1', valueId: 1, isSelected: false },
        ];
        React.useState = jest.fn().mockReturnValue([myInitialState, {}]);

        const wrapper = shallow(<Drawer className={className} />);

        const drawerElement = wrapper.find(DrawerElement);
        expect(drawerElement).toHaveLength(2);
    });
});
