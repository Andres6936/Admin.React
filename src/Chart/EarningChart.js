import React from 'react';
import Chart from 'chart.js'

export class EarningChart extends React.Component {
    constructor(props) {
        super(props);
        this.graphRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.graphRef);
        this.earningChart = new Chart(this.graphRef.current, {
            type: "pie",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            "Red",
                            "Blue",
                            "Yellow",
                            "Green",
                            "Purple",
                            "Orange"
                        ],
                        borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                        borderWidth: 1
                    }
                ]
            }
        });
    }

    render() {
        return <canvas ref={this.graphRef}/>
    }
}
