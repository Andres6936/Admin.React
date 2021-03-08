import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from "../../Component/Card";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new Adapter()})

describe('<Card/>', function () {
    it("Snapshot for default Card component", () => {
        const wrapper = shallow(<Card/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("Render for default Card component", () => {
        const wrapper = shallow(<Card/>);
        expect(wrapper.contains(<div className={"card rounded shadow-sm py-2 mb-4  "}/>)).toEqual(true);
    })
});
