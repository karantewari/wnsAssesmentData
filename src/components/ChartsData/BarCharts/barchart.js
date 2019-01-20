import React, { Component } from 'react';

import { Bar } from 'react-chartjs-2';

import './barchart.css'

class barchart extends Component{

    state = {
        myChartData : {
            labels : this.props.labelsToBe, //passed as props, wherever you see this.props, its the way how stateful component share info, in stateless its just props....
            datasets : [ //graph values will be populated in this
                {
                    label : 'Skills',
                    data : this.props.barDataNumbers,
                    backgroundColor: this.props.bgcolor
                }
            ],
        }
    }
    render(){
        return(
            <div className="container">
                <h2 className="chartHead">{this.props.chartHeading}</h2>
                <Bar 
                data={this.state.myChartData} // char data here
                options={{ //chart custom options, refer chart.js doc for more info
                        maintainAspectRatio: false,
                        title :{
                            display : true,
                            text: this.props.dislayTitle
                        },
                        animation: {
                            duration : this.props.aniDur
                        },
                        responsive : true,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true, // graph should begin with 0, always hence true
                                    max: 100,
                                    stepSize: 20
                                }
                            }]
                        },
                        legend : {
                            display: false
                        },
                        
                }}
                width={100}
                height={150}
            />
            </div>
        )
    }
}

export default barchart;