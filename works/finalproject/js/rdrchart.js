

let dum_data = [];
let features = ["A","B","C","D","E","F"];
//generate the data

console.log("rdrchart");



//each feature will be a random number from 1-9
features.forEach(f => dum_data[f] = 1 + Math.random() * 8);

console.log("dum",dum_data);
console.log(features);

let svg = d3.select("#rchart2").append("svg")
            .attr("width", 300)
            .attr("height", 300);

let radialScale = d3.scaleLinear()
                    .domain([0,10])
                    .range([0,120]);

let ticks = [2,4,6,8,10];

ticks.forEach(t =>
    svg.append("circle")
        .attr("cx", 150)
        .attr("cy", 150)
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("r", radialScale(t))
);

ticks.forEach(t =>
    svg.append("text")
        .attr("x", 155)
        .attr("y", 150 - radialScale(t))
        .text(t.toString())
);

function angleToCoordinate(angle, value){
    let x = Math.cos(angle) * radialScale(value);
    let y = Math.sin(angle) * radialScale(value);
    return {"x": 150 + x, "y": 150 - y};
}

for (var i = 0; i < features.length; i++) {
    let ft_name = features[i];
    let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
    let line_coordinate = angleToCoordinate(angle, 10);
    let label_coordinate = angleToCoordinate(angle, 10.5);

    //draw axis line
    svg.append("line")
        .attr("x1", 150)
        .attr("y1", 150)
        .attr("x2", line_coordinate.x)
        .attr("y2", line_coordinate.y)
        .attr("stroke","black");

    //draw axis label
    svg.append("text")
        .attr("x", label_coordinate.x)
        .attr("y", label_coordinate.y)
        .text(ft_name);
}

let line = d3.line()
            .x(d => d.x)
            .y(d => d.y);

function getPathCoordinates(data_point){
    let coordinates = [];
    for (var i = 0; i < features.length; i++){
        let ft_name = features[i];
        let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
        coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
    }
    console.log(coordinates);
    return coordinates;
};

let coordinates = getPathCoordinates(dum_data);

//draw the path element
svg.append("path")
    .datum(coordinates)
    .attr("d",line)
    .attr("stroke-width", 3)
    .attr("stroke", "darkorange")
    .attr("fill", "darkorange")
    .attr("stroke-opacity", 1)
    .attr("opacity", 0.5);

for(var i = 0; i < coordinates.length; i++)
{
    svg.append("circle")
        .attr("r",6)
        .attr("fill","darkorange")
        .attr("cx",coordinates[i].x)
        .attr("cy",coordinates[i].y);
}
