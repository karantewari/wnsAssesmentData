import React, { Component } from 'react';

import BarChart from '../BarCharts/barchart';

class mainchart extends Component{


    state = {
        title: "Manually entered values",
        barDataNumbers : [23,12,45,67,78,83], //hard coded values
        barLabels : ['HTML','CSS','JS','React','jQuery','React Native'],
        bgColors : ['#adc','#1af','#a3c','#4fc','#dac','#e32 '],
        aniDur : 2500,
        chartHeading: "Chart with hard coded values"
      }
    render(){
        return(
            <div className="App">
        <BarChart //refer barchar component to see the props
          dislayTitle={this.state.title} 
          barDataNumbers={this.state.barDataNumbers}
          labelsToBe={this.state.barLabels}
          bgcolor={this.state.bgColors}
          animationDuration={this.state.aniDur}
          chartHeading={this.state.chartHeading}
        />
      </div>
        )
    }
}

export default mainchart;