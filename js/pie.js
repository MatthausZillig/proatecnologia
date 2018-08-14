"use strict";
let myChart = document.getElementById("myChart").getContext('2d');
let massPopChart = new Chart(myChart, {
    type: 'doughnut',
    data: {
        labels: ["Avengers", "Beast", "Archangel", "Alpha Fight", "Banshee"],
        datasets: [{
            label: 'Characters in comics',
            data: [1523, 783, 562, 196, 178],
            backgroundColor: [
                '#42a5f5',
                '#ffee58',
                '#5c6bc0',
                '#ef5350',
                '#66bb6a',
                
            ],
         
            hoverBorderWidth: 2,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title:{
            display: true,
            text: 'characters:',
            fontSize:25
        },
        legend: {
            display: true,
            position:'left',
            labels: {
                fontColor: '#000'
            }
            
        }
    }
});