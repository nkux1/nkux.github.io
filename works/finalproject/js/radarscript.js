
console.log("radar script");


let myChart1 = document.getElementById("myChart").getContext('2d');

let r_data = [];
let labels1 = [
                'pace',
                'shooting',
                'passing',
                'dribbling',
                'defending',
                'physic',
            ];

function radarChange(pname)
{
    var radarData = finalData.filter(function(d)
    {
        return d.long_name == pname;
    });

    console.log("b4",r_data);

    r_data[0]= radarData[0].pace;
    r_data[1]= radarData[0].shooting;
    r_data[2]= radarData[0].passing;
    r_data[3]= radarData[0].dribbling;
    r_data[4]= radarData[0].defending;
    r_data[5]= radarData[0].physic;
        
    updateData(r_data);

}

function updateData(r_data) {

    chart1.data.datasets[0].data = r_data;
    chart1.update();
}


let chart1 = new Chart(myChart1, {
    type: 'radar',
    data: {
        labels: labels1,
        datasets: [{
          label: 'value',
          data: [],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      },

    options: {
        elements: {
            line: {
                borderWidth: 3
            },
            point: {
                radius: 4,
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                pointLables: {
                    display: false
                },
                min: 20,
                max: 100,
                ticks: {
                    display: false
                },
            }
        }
    },
})
