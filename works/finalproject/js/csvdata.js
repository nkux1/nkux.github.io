
// script to reading csv data 
console.log("csvdata");

let searchNames = [];
let finalData = [];
let i=0;

d3.csv("players_data.csv",function(error, playdata)
{
    if(error)
    {
        console.log("data error");
    }

    else{
        //converting number strings to values
        playdata.forEach(function(d) {
            d.pace = parseFloat(d.pace);
            d.shooting = parseFloat(d.shooting);
            d.passing = parseFloat(d.passing);
            d.dribbling = parseFloat(d.dribbling);
            d.defending = parseFloat(d.defending);
            d.physic = parseFloat(d.physic);
          });

          playdata.forEach(function(d,i){
              searchNames[i] = d.long_name;  //adding names to search list
              i++;
          });

          finalData = playdata;  // assigning csv data to array dataset 
          console.log("finaldata", finalData);  
    }
});

console.log("filter data",filterData[0].pace);
