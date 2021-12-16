

function radarChange(pname)
{

  var radarData = finalData.filter(function(d)
  {
      return d.long_name == pname;
  });

  console.log(radarData[0].pace);

  var p = radarData[0].pace;
}


  var data = [
      {
        className: 'germany', // optional can be used for styling
        axes: [
          {axis: "pace", value: 23 }, 
          {axis: "shooting", value: 12}, 
          {axis: "passing", value: 25},  
          {axis: "dribbling", value: 12 },  
          {axis: "defending", value: 62},
          {axis: "physic", value: 12}
        ]
      }
    ];

    console.log(data);

    var chart = RadarChart.chart();
    var cfg = chart.config(); // retrieve default config
    var svg = d3.select('body').append('svg')
      .attr('width', cfg.w + cfg.w + 50)
      .attr('height', cfg.h + cfg.h / 4);

    svg.append('g').classed('single', 1).datum(randomDataset()).call(chart);

   
