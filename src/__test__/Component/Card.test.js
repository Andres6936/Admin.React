import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from "../../Component/Card";
import toJson from "enzyme-to-json";
import {CardBody} from "../../Component/CardBody";
import {CardHeader} from "../../Component/CardHeader";

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

    it("Snapshot for Card component with CardBody child", () => {
        const wrapper = shallow((
            <Card>
                <CardBody/>
            </Card>
        ));
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("Render the CardBody when it is passed as a child", () => {
        const wrapper = shallow((
            <Card>
                <CardBody/>
            </Card>
        ));
        expect(wrapper.contains(<CardBody/>)).toEqual(true);
    })

    it("Snapshot for Card component with CardBody and CardHeader child", () => {
        const wrapper = shallow((
            <Card>
                <CardHeader/>
                <CardBody/>
            </Card>
        ));
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("Render the CardBody and CardHeader when its are passed as children", () => {
        const wrapper = shallow((
            <Card>
                <CardHeader/>
                <CardBody/>
            </Card>
        ));
        expect(wrapper.contains(<CardHeader/>)).toEqual(true);
        expect(wrapper.contains(<CardBody/>)).toEqual(true);
    })
});
