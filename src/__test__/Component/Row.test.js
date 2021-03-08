import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import {Row} from "../../Component/Row";

Enzyme.configure({adapter: new Adapter()})

describe('<Row/>', function () {
    it("Snapshot for default Row component", () => {
        const wrapper = shallow(<Row/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("Render for default Row component", () => {
        const wrapper = shallow(<Row/>);
        expect(wrapper.contains(<div className={"row"}/>)).toEqual(true);
    })
})
