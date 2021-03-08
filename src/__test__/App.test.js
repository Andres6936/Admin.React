import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "../App";

Enzyme.configure({adapter: new Adapter()})

it("The sidebar is hidden for default", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state('hiddenSidebar')).toEqual(true);
})
