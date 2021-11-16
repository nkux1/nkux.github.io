

d3.select("#chart1")
.on("mousemove", function() {

    console.log(d3.event);

    var tooltip = d3.select("#tooltip")
                    .style("display", "block")
                    .style("top", d3.event.pageY + 20 + "px")
                    .style("left", d3.event.pageX + 20 + "px");


    tooltip.select("#value").html("my chart 1");
});