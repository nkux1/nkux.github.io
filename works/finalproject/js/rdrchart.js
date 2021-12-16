
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
        .range([0,220]);

let ticks = [20,40,60,80,100];


let line = d3.line()
                .x(d => d.x)
                .y(d => d.y);

var svg = d3.select("#rchart2")
            .attr("width", 700)
            .attr("height", 600);

var cirs = d3.select("#cirs");

var vals = d3.select("#vals");

var scale = d3.select("#scale");

var graph = d3.select("#graphs");
   

function rdrchart(statsData)
{

    ticks.forEach(t =>
        cirs.append("circle")
            .attr("cx", 250)
            .attr("cy", 250)
            .attr("fill", "none")
            .attr("stroke", "#f0f0f0")
            .attr("r", radialScale(t))
    );

    ticks.forEach(t =>
        vals.append("text")
            .attr("x", 230)
            .attr("y", 250 - radialScale(t))
            .attr("font-size","12px")
            .text(t.toString())
    );

    function angleToCoordinate(angle, value){
        let x = Math.cos(angle) * radialScale(value);
        let y = Math.sin(angle) * radialScale(value);
        return {"x": 250 + x, "y": 250 - y};
    }

    for (var i = 0; i < features.length; i++) {
        let ft_name = features[i];
        let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
        let line_coordinate = angleToCoordinate(angle, 100);
        let label_coordinate = angleToCoordinate(angle, 110.5);
        

        //draw axis line
        scale.append("line")
            .attr("x1", 250)
            .attr("y1", 250)
            .attr("x2", line_coordinate.x)
            .attr("y2", line_coordinate.y)
            .attr("stroke","#f0f0f0");

        //draw axis label
        scale.append("text")
            .attr("x", label_coordinate.x)
            .attr("y", label_coordinate.y)
            .text(ft_name)
            .attr("color","#666666");
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
        .attr("stroke", "Aquamarine")
        .attr("fill", "Aquamarine")
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
        .attr("fill", function(d,i)
                        {
                            return clrRange[i];
                        })
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

                            d3.select(this).attr("r",10);
                            
                        })
        .on("mouseout", function() {
                            tooltip.html(``).style("visibility", "hidden");
                            edgeDots.attr("r",6);
                        });

        edgeDots.enter().append("circle")
            .attr("r",6)
            .attr("fill", function(d,i)
                            {
                                return clrRange[i];
                            })
            .attr("cx",function(c)
                            {
                                return c.x;
                            })
            .attr("cy",function(c)
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
                                d3.select(this).attr("r",10);
                            })
            .on("mouseout", function() {
                                tooltip.html(``).style("visibility", "hidden");
                                edgeDots.attr("r",6);
                            });
    }

    getcode(coordinates);


    // }
   

}
