import React from "react";
import {CanvasJS, CanvasJSChart} from "canvasjs-react-charts";

const GetGraph = (props)=>{
    // console.log(props.data);
    CanvasJS.addColorSet("weather",['#00adb5','#ff2e63','#ffc93c','#fc5185','#d72323']);
    const options = {
        colorSet: 'weather',
        backgroundColor: "#222831",
        animationEnabled: true,
        title:{
            fontColor: "#eeeeee",
            fontFamily:"sans-serif",
            text: props.for
        },
        axisX: {
            titleFontColor: "#eeeeee",
            labelFontColor: '#eeeeee',
            title:"Days",
            
            valueFormatString: 'DD MMM',
            interval:1,
            intervalType:'day'
        },
        axisY: {
            interlacedColor: "rgba(255,250,250,0.1)",
            gridColor: "#eeeeee",
            titleFontColor: "#eeeeee",
            labelFontColor: '#eeeeee',
            title: props.ytitle,
            suffix: props.suffix
        },
        data: [{
            type: props.type,
            markerSize: 15,
            xValueFormatString: 'hh:mm TT | DD MMM',
            xValueType: "dateTime",
            yValueFormatString: '##.#'+props.suffix,
            dataPoints: props.data
        }]
    }
    return <div><CanvasJSChart class="font" options = {options} /></div>
}

export default GetGraph;