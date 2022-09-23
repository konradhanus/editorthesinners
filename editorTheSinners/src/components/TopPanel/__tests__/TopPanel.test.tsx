import { shallow, render } from 'enzyme';
// import sinon from 'sinon';\

import WrapperEditor from '..'


    it('should redner', () => {
        const wrapper = shallow(<WrapperEditor />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('className is added to component', () => {
        const wrapper = shallow(<WrapperEditor />);
        const props = wrapper.props();
        console.log(props);
        const className = 'testClass'
        const view = render(<WrapperEditor />, {className});
        
        expect(view.find(`.${className}`)).toEqual(true);
    });