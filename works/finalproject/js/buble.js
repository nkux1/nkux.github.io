


// set the dimensions and margins of the graph
var width = 700
var height = 800

// append the svg object to the body of the page
var svg = d3.select("#bub_chart")
  .append("svg")
    .attr("width", 700)
    .attr("height", 800);


function mainBubblechart(data)
{
    
    console.log("bub data2",data);

    // A scale that gives a X target position for each group
    var x = d3.scaleOrdinal()
            .domain([1, 2, 3, 4, 5, 6,7])
            .range([50, 100, 150, 200, 250 ,300, 350])

    // A color scale
    var color = d3.scaleOrdinal()
    .domain([1, 2, 3, 4, 5, 6,7])
    .range([ "#E9967A", "#BDB76B", "#DDA0DD", "#90EE90", "#DEB887", "#40E0D0","#B0E0E6"])

    let tooltip_bub = d3.select("#tooltip_bub").append("div")
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

    // Initialize the circle: all located at the center of the svg area

    var node = svg.selectAll("circle").data(data)

    var enterNode = node.enter().append("circle");

    node.merge(enterNode)
                    .attr("r", function(d)
                                { 
                                    if(d.value<=10) return 18
                                    else if(d.value <= 35 && d.value > 10) return 24
                                    else if(d.value <= 60 && d.value > 35) return 34
                                    else if(d.value > 60) return 48
                                })
                    .attr("cx", width / 2)
                    .attr("cy", height / 2)
                    .style("fill", function(d){ return color(d.group)})
                    .style("fill-opacity", 0.8)
                    .attr("class","cirs")
                    .on("mouseover", function(d) 
                    {
                        tooltip_bub.html(`${d.name}`).style("visibility", "visible")
                        .style("top", d3.event.pageY + 10 + "px")
                        .style("left", d3.event.pageX + 10 + "px")
                    })
                    .on("mouseout", function() 
                    {
                        tooltip_bub.html(``).style("visibility", "hidden");
                    })
                    .call(d3.drag() // call specific function when circle is dragged
                        .on("start", dragstarted)
                        .on("drag", dragged)
                        .on("end", dragended));


    var txt = svg.selectAll("text").data(data)
                    .attr("y",width / 2)
                    .attr("x",height / 2)
                    .text(function(d){ return d.value})
                    .attr("baseline-shift", "-50%");

    txt.enter().append("text").attr("x",width / 2).attr("y",height / 2).text(function(d){ return d.value}).attr("baseline-shift", "-50%");

    // var legend =[];

    // data.forEach(d => {
        
    //     if(legend.includes(d.group) == false)
    //     {
    //         legend.push(d.group);
    //     }
        
    // });

    // console.log("legend",legend);

    //     var leg = svg.selectAll("rect").data(legend)
    //         .attr("y",height-20)
    //         .attr("x",50)
    //         .style("fill", "#000" )
    //         .attr("height","20")
    //         .attr("width","20");

    //     leg.enter().append("rect")
    //         .attr("y",height-20)
    //         .attr("x",50)
    //         .style("fill", "#000" )
    //         .attr("height","20")
    //         .attr("width","20");
   

    // Features of the forces applied to the nodes:
    var simulation = d3.forceSimulation()
        .force("x", d3.forceX().strength(0.5).x( function(d){ return x(d.group) } ))
        .force("y", d3.forceY().strength(0.1).y( height/2 ))
        .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
        .force("collide", d3.forceCollide().strength(.1).radius(function(d)
                                                                    { 
                                                                        if(d.value<=10) return 22
                                                                        else if(d.value <= 30 && d.value > 10) return 28
                                                                        else if(d.value <= 50 && d.value > 30) return 38
                                                                        else if(d.value > 50) return 52
                                                                    })
                                                        .iterations(1)) // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.

    var lineWidth = txt.node().getBoundingClientRect().width;

    simulation
        .nodes(data)
        .on("tick", function(d){
            node
            .attr("cx", function(d){ return d.x; })
            .attr("cy", function(d){ return d.y; }); 

            txt
            .attr("x", function(d){ return d.x-lineWidth/2; })
            .attr("y", function(d){ return d.y; }); 
        });

    // What happens when a circle is dragged?
    function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(.03).restart();
    d.fx = d.x;
    d.fy = d.y;
    }
    function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
    }
    function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(.03);
    d.fx = null;
    d.fy = null;
    }
}
