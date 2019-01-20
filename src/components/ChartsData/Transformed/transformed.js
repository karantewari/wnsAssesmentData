import React,{Component} from 'react';


import axios from 'axios';
import Chart from '../BarCharts/barchart';

class transformed extends Component{
//the state has some empty data, which will be populated after axios has fetched the data
    state = {
        myCompletedData : [], //chart values will come here
        title: "after transforming",//chart title
        isLoaded: false, // this is for checking when the data from api has arrived, needed this as calls are async
        barDataNumbers : "", // chart datasets will come here
        barLabels : "", //chart labels
        bgColors : "", // chart bg colors, can be left empty after state if default colors are required
        aniDur : 1000,
        chartHeading:"Chart with API values and transformed",
      }


    componentWillMount(){ //axios call is done here , when the component is about to render , componentDidMOunt could have been used here but we needed to load data after render of chart , hence will mount
        axios.get('http://localhost:3000/tranformingData') // api url 
        .then(response => {
            this.setState({
                myCompletedData : response.data,
                isLoaded : true // here we manually make it true to force re-render ,check later line
            });   
        })
    }



    render(){
        const myCopiedArray = [...this.state.myCompletedData];
        const myDatas = myCopiedArray.map(myDataGot => {
                     
            let dataArray = myDataGot.chartDataVals;
//USED THIS LINK TO GET HELP , https://github.com/chartjs/Chart.js/issues/3832
            // We create an array of indexes
         let dataIndexes = dataArray.map((d, i) => i);
         
         dataIndexes.sort((a, b) => {
           return dataArray[a] - dataArray[b];
         });
         // Now we sort the data array so the chart will have the correct data
         dataArray.sort((a, b) => a - b);
   
         // At this point dataIndexes is sorted by value of the data, 
         // so we know how the indexes map to each other
         // Now we need to sort the bar objects, labels and background colours
         let meta = myDataGot.chartDataVals;
         let newMeta = [];
         let newLabels = [];
         let newColors = [];
         meta.map((bar, i) => {
             // map the old array as it had the bars in the old order
           // so we look up the new index by using the dataIndexes array.
           // indexOf isn't the most efficient but we have a small number of bars
             let newIndex = dataIndexes.indexOf(i);
           // copy the bar to the correct location in the new array
           newMeta[newIndex] = bar;
           // Copy the label to the new position
           newLabels[newIndex] = myDataGot.barLabelsStuff[i];
           // Copy the color to the new position
           newColors[newIndex] = myDataGot.chartColors[i];
         });
               // update the chart
         meta.data = newMeta;
         myDataGot.barLabelsStuff = newLabels;
         myDataGot.chartColors = newColors;
         let myTitleNew = "After sorting graph 1 of from API";
            //
            return <Chart // return chart component as JSX input 
            key={myDataGot.id}
            bgcolor={myDataGot.chartColors}
            dislayTitle={myTitleNew} 
            barDataNumbers={myDataGot.chartDataVals}
            labelsToBe={myDataGot.barLabelsStuff}
            aniDur={this.state.aniDur}
            chartHeading={this.state.chartHeading}/>
        })


        const myCopiedArrayNew = [...this.state.myCompletedData];
        const myRandom = [12,45,82,91,34,78];
        const myAvg = myRandom.reduce((acc,val,i,arr)=> { //this reduces the array, finds average and then make random number out of it using the Math.rand method
            acc += val;
            if(i===arr.length-1){
                return acc/arr.length
            }
            else{
                return acc
            }
        });
        const myNewDatas = myCopiedArrayNew.map(myData => {
            let myArr = [];
            for (var i = 0; i < 6; i++) {
                myArr.push(Math.round(Math.random() * myAvg))
            }
      
            let myNewTitle = "After reducing and randomize above array";
            return <Chart // second chart being prepared
            key={myData.id}
            bgcolor={myData.chartColors}
            dislayTitle={myNewTitle} 
            barDataNumbers={myArr}
            labelsToBe={myData.barLabelsStuff}
            aniDur={this.state.aniDur}
            chartHeading={this.state.chartHeading}/>
        })

        
       

        return(
            <div className="App">
            <div>
                {this.state.isLoaded ?
                <div> 
                <div>
                    {/* chart 1 */}
                {myDatas} 
                </div>
                <div>
                    {/* chart 2 */}
                    {myNewDatas}
                </div>
                </div>
                 : 
                // if data hasnt arrive yet, we make the loader render , heavily dependent on isLoaded state
                    <div className="loader">Hang on!! its loading.. </div> } 
            </div>
          </div>
        )
    }

}

export default transformed;

