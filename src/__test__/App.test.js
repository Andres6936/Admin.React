import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "../App";

Enzyme.configure({adapter: new Adapter()})

describe('<App/>', function () {
    it("The sidebar is hidden for default", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.state('hiddenSidebar')).toEqual(true);
    })

    it("Show the sidebar to call the function hiddenSidebar(boolean)", () => {
        const wrapper = shallow(<App/>);
        wrapper.instance().hiddenSidebar(false);
        expect(wrapper.state('hiddenSidebar')).toEqual(false);
    })
})
