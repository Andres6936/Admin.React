import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import {ProgressBar} from "../../Component/ProgressBar";

Enzyme.configure({adapter: new Adapter()})

describe('<ProgressBar/>', function () {
    it("Snapshot for default Row component", () => {
        const wrapper = shallow(<ProgressBar/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
