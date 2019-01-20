import React,{Component} from 'react';

import './fromapi.css';
import axios from 'axios';
import Chart from '../BarCharts/barchart';



class fromAPIchart extends Component{

    state = {
        myCompletedData : [], //chart data, populated after api calll
        title: "Fetched from api",
        isLoaded: false, // forcing re-render, check line 55 and 28
        barDataNumbers : "",//chart data , vals
        barLabels : "", // labels
        bgColors : "", // colors
        aniDur : 1000,
        chartHeading:"Chart with API values",
      }


    componentWillMount(){ //api request here using axios
        axios.get('http://localhost:3000/chartData')
        .then(response => {
            this.setState({
                myCompletedData : response.data,
                isLoaded : true //manually forcing it to true so that line 55 can be resolved and re-render can be done when async call is done
            });   
        })
    }


    render(){

        const myDatas = this.state.myCompletedData.map(myDataGot => { //simple mapping of array and extracting data
            return <Chart 
            key={myDataGot.id}
            bgcolor={myDataGot.chartColors}
            dislayTitle={this.state.title} 
            barDataNumbers={myDataGot.chartDataVals}
            labelsToBe={myDataGot.barLabelsStuff}
            aniDur={this.state.aniDur}
            chartHeading={this.state.chartHeading}/>
        })

        return(
            <div className="App">
            <div>
                {this.state.isLoaded ? 
                <div>
                    {/* chart 1 */}
                {myDatas}
                </div>
                 : 
                //  checking for this.state.isLoaded, if true show graph else keep showing the loader
                    <div className="loader"><img src={require('../../../images/loader.gif')} alt="loaderimg"/></div> }
                    
            </div>
          </div>
        )
    }

}

export default fromAPIchart;

