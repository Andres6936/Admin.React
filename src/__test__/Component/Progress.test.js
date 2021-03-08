import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import {Progress} from "../../Component/Progress";

Enzyme.configure({adapter: new Adapter()})

describe('<Progress/>', function () {
    it("Snapshot for default Row component", () => {
        const wrapper = shallow(<Progress/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("Render for default Row component", () => {
        const wrapper = shallow(<Progress/>);
        expect(wrapper.contains(<div className={"row"}/>)).toEqual(true);
    })
})
