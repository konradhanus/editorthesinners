/* eslint-disable jest/valid-expect */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';
// import sinon from 'sinon';
import WrapperEditor from '../WrapperEditor'

describe('WrapperEditor', () => {
    it('should redner', () => {
        const wrapper = shallow(<WrapperEditor />);
        expect(wrapper.exists()).to.equal(true);
    });
    it('className is added to component', () => {
        const className = 'testClass'
        const view = render(<WrapperEditor />, {className});
        
        expect(view.find(`.${className}`)).to.equal(true);
    });
})