var Chart = require('chart.js');
var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'bar',

// The data for our dataset
data: {
  labels: ['DGX-A100_A100-SXM 4x1', 
            'NVIDIA A10x1', 
            'NVIDIA T4x1', 
            'NVIDIA GeForce RTX 3080x1 (NativePy)',
            'NVIDIA GeForce RTX 3080x1 (TensorRT)' 
            ],
  datasets: [{
      backgroundColor: ['rgb(255, 99, 132)',
                        'rgb(255, 99, 132)',
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(54, 162, 235)'
                        ],
      borderColor: ['rgb(255, 99, 132)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(54, 162, 235)'
                    ],
      data: [37479.50, 13805.20, 6035.57, 755.83, 15053.60]
  }]
},
// Configuration options go here
options: {
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'ImageClassify, ImageNet, ResNet50, Offline',
            font: {
                size: 24
            },
            align: 'start'
        }    
    },
    indexAxis: 'y',
}
});