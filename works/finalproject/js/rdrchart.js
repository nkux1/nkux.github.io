
let dum_data = [];
let features = [
                "pace",
                "shooting",
                "passing",
                "dribbling",
                "defending",
                "physic",
            ];

let valdt = [];
//generate the data

let radialScale = d3.scaleLinear()
        .domain([20,100])
        .range([0,120]);

let ticks = [20,40,60,80,100];


let line = d3.line()
                .x(d => d.x)
                .y(d => d.y);

var svg = d3.select("#rchart2")
            .attr("width", 400)
            .attr("height", 300);

var cirs = d3.select("#cirs");

var vals = d3.select("#vals");

var scale = d3.select("#scale");

var graph = d3.select("#graphs");
   

function rdrchart(statsData)
{

    ticks.forEach(t =>
        cirs.append("circle")
            .attr("cx", 150)
            .attr("cy", 150)
            .attr("fill", "none")
            .attr("stroke", "gray")
            .attr("r", radialScale(t))
    );

    ticks.forEach(t =>
        vals.append("text")
            .attr("x", 130)
            .attr("y", 150 - radialScale(t))
            .attr("font-size","12px")
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
        let line_coordinate = angleToCoordinate(angle, 100);
        let label_coordinate = angleToCoordinate(angle, 110.5);
        

        //draw axis line
        scale.append("line")
            .attr("x1", 150)
            .attr("y1", 150)
            .attr("x2", line_coordinate.x)
            .attr("y2", line_coordinate.y)
            .attr("stroke","black");

        //draw axis label
        scale.append("text")
            .attr("x", label_coordinate.x)
            .attr("y", label_coordinate.y)
            .text(ft_name);
    }

    features.forEach(f => dum_data[f] = statsData[0][f]);

    function getPathCoordinates(data_point){
        valdt = [];
        let coordinates = [];
        for (var i = 0; i < features.length; i++){
            let ft_name = features[i];
            let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
            coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
            valdt.push(angleToCoordinate(angle, data_point[ft_name]),data_point[ft_name]);
        }
        return coordinates;
    };

    // getting edge points    
    let coordinates = getPathCoordinates(dum_data);

    //draw the path element
    graph.merge(graph)
        .datum(coordinates)
        .attr("d",line)
        .attr("stroke-width", 3)
        .attr("stroke", "darkorange")
        .attr("fill", "darkorange")
        .attr("stroke-opacity", 1)
        .attr("opacity", 0.5);

    let tooltip = d3.select("#tooltip").append("div")
                    .attr("class","d3-tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden")
                    .style("padding", "15px")
                    .style("background", "white")
                    .style("border-radius", "5px")
                    .style("color", "#121212")
                    .style("box-shadow","10px 5px 15px rgba(0, 0, 0, 0.2)")
                    .style("font-family","'Open Sans', sans-serif");

    function getcode(coordinates)
    {

        var edgeDots= d3.select("#dots").selectAll("circle").data(coordinates)
        .attr("r",6)
        .attr("fill","darkorange")
        .attr("cx",function(c,k){
                            return c.x;
                            k++;
                        })
        .attr("cy",function(c,x){ 
                            return c.y;
                            x++;
                        })
        .on("mouseover", function(c) {
                            for(i=0;i<valdt.length;i++)
                            {
                                if(valdt[i].x == c.x)
                                {
                                    tooltip.html(`Data:${valdt[i+1]}`).style("visibility", "visible")
                                    .style("top", d3.event.pageY + 10 + "px")
                                    .style("left", d3.event.pageX + 10 + "px");
                                };
                            }                            
                        })
        .on("mouseout", function() {
                            tooltip.html(``).style("visibility", "hidden");
                        });

        edgeDots.enter().append("circle")
            .attr("r",6)
            .attr("fill","darkorange")
            .attr("cx",function(c,i)
                            {
                                return c.x;
                            })
            .attr("cy",function(c,i)
                            {
                                return c.y;
                            })
            .on("mouseover", function(c) {
                                for(i=0;i<valdt.length;i++)
                                {
                                    if(valdt[i].x == c.x)
                                    {
                                        tooltip.html(`Data:${valdt[i+1]}`).style("visibility", "visible")
                                        .style("top", d3.event.pageY + 10 + "px")
                                        .style("left", d3.event.pageX + 10 + "px");
                                    };
                                } 
                            })
            .on("mouseout", function() {
                                tooltip.html(``).style("visibility", "hidden");
                            });
    }

    getcode(coordinates);


    // }
   

}
