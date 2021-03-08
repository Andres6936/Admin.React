import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import {CardBody} from "../../Component/CardBody";


Enzyme.configure({adapter: new Adapter()})

describe('<CardBody/>', function () {
    it("Snapshot for default Row component", () => {
        const wrapper = shallow(<CardBody/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("Render for default Row component", () => {
        const wrapper = shallow(<CardBody/>);
        expect(wrapper.contains(<div className={"card-body"}/>)).toEqual(true);
    })
})
