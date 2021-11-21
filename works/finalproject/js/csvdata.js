
// script to reading csv data 

let searchNames = [];
let finalData = [];
let i=0;

d3.csv("players_data.csv",function(error, data)
{
    if(error)
    {
        console.log("data error");
    }

    else{
        //converting number strings to values
        data.forEach(function(d) {
            d.pase = parseFloat(d.pase);
            d.shooting = parseFloat(d.shooting);
            d.passing = parseFloat(d.passing);
            d.dribbling = parseFloat(d.dribbling);
            d.defending = parseFloat(d.defending);
            d.physic = parseFloat(d.physic);
          });

          data.forEach(function(d,i){
              searchNames[i] = d.long_name;  //adding names to search list
              i++;
          });

          finalData = data;  // assigning csv data to array dataset 
          console.log("finaldata", finalData);  
    }
});
