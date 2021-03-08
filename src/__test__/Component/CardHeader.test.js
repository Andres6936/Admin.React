import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import {CardHeader} from "../../Component/CardHeader";

Enzyme.configure({adapter: new Adapter()})

describe('<CardHeader/>', function () {
    it("Snapshot for default Row component", () => {
        const wrapper = shallow(<CardHeader/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("Render for default Row component", () => {
        const wrapper = shallow(<CardHeader/>);
        expect(wrapper.contains(<div className={"card-header text-primary bg-white fw-bold"}/>)).toEqual(true);
    })
})
