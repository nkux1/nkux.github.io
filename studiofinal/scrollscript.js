// using d3 for convenience, and storing a selected elements
var container = d3.select('#scroll');
var graphic = container.select('.scroll__graphic');
var chart = graphic.select('#chart');
var text = container.select('.scroll__text');
var step = text.selectAll('.step');

// define some global vars
var chartWidth;
var chartHeight;

let data = [];

function updateData() {
    data = [];
    for (let i = 0; i < 5; i++) {
        data.push(Math.random() * 800);
    }
}

const newData = [
    { x: 4, size: 9 },
    { x: 1, size: 8 },
    { x: 2, size: 1 },
    { x: 9, size: 3 },
    { x: 2, size: 2 }
]

// initialize the scrollama
var scroller = scrollama();

// resize function to set dimensions on load and on page resize
function handleResize() {
    // 1. update height of step elements for breathing room between steps
    // changing the multiplier here will define how much white space between steps
    var stepHeight = Math.floor(window.innerHeight * 0.7);
    step.style('height', stepHeight + 'px');

    // 2. update height of graphic element
    var bodyWidth = d3.select('body').node().offsetWidth;
    graphic.style('height', window.innerHeight + 'px');

    // 3. update width of chart by subtracting from text width
    var chartMargin = 32;
    var textWidth = text.node().offsetWidth;

    // chartWidth = graphic.node().offsetWidth - textWidth - chartMargin; // left
    chartWidth = bodyWidth - chartMargin;

    // chartWidth = bodyWidth - chartMargin; // center

    // make the height 1/2 of viewport
    chartHeight = Math.floor(window.innerHeight );

    chart
        .style('width', chartWidth + 'px')
        .style('height', chartHeight + 'px');

    // 4. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    // sticky the graphic
    graphic.classed('is-fixed', true); // is sticky
    graphic.classed('is-bottom', false);

    // fade in current step
    step.classed('is-active', function (d, i) {
        return i === response.index;
    })

    updateData();
    initChart(response.index);

}

// optional to view precise percent progress on callback
function handleProgress(response) {
    console.log(response)
}

// kick-off code to run once on load
function init() {

    // 1. call a resize on load to update width/height/position of elements
    handleResize();

    // 2. setup the scrollama instance
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            container: '#scroll', // our outermost scrollytelling element
            graphic: '.scroll__graphic', // the graphic
            text: '.scroll__text', // the step container
            step: '.scroll__text .step', // the step elements
            offset: 0.5, // set the trigger to be 1/2 way down screen
            debug: true, // display the trigger offset for testing
            progress: false // for precise position
        })
        // .onStepProgress(handleProgress)
        .onStepEnter(handleStepEnter);

    // setup resize event
    window.addEventListener('resize', handleResize);


    updateData();
    initChart();
}



// start it up
init();

var svg;
var map;
var dots;
var lines;

/////////////////////////////////
// SOME D3 CODE FOR OUR GRAPHIC //
/////////////////////////////////

function initChart(index1){

    svg = d3.select("#viz")
                .attr("width", chartWidth)
                .attr("height", chartHeight);

    map = svg.select("#map");

    d3.json("world-alpha3.json", function(error, world) {
    
        //converting topojson to geojson
        var geoJSON = topojson.feature(world, world.objects.countries);
        // console.log(geoJSONs)
        
        //filter for map
        geoJSON.features = geoJSON.features.filter(function(d) {
                                                        return d.id !== "ATA";
                                                    });
        
        //setting scale - W&H of the chart
        var proj = d3.geoMercator()
                    .fitSize([chartWidth, chartHeight], geoJSON);
    
        var path = d3.geoPath()
                    .projection(proj);

                    
        //assigning values
        var countries = map.selectAll("path.countries")
                            .data(geoJSON.features);
    
        countries.enter()
                .append("g")
                .append("path")
                .attr("class","countries")
                .attr("d", path)
                .attr("fill", "BurlyWood")
                .attr("stroke","white")
                .attr("vector-effect","non-scaling-stroke")
                .attr("stroke-width","0.5px");

        svg.select("#ocean")
            .attr("width", chartWidth)
            .attr("height", chartHeight);


        var locs_data =
        [
            {
                location: "USA",
                coordinates: [-92.603760, 38.573936]
            },
            {
                location: "Canada",
                coordinates: [-106.3468, 56.1304]
            },
            {
                location: "Mexico",
                coordinates: [-102.5528, 23.6345]
            },
            {
                location: "Brazil",
                coordinates: [-51.9253, -14.2350]
            },
            {
                location: "Argentina",
                coordinates: [-63.6167, -38.4161]
            },
            {
                location: "Chile",
                coordinates: [-71.5430, -35.6751]
            },
            {
                location: "Alaska",
                coordinates: [-149.4937, 64.2008]
            }
        ]
        
        var dots_loc = map.selectAll("circle.locs")
                        .data(locs_data);

        dots_loc
            .enter()
            .append("circle")
            .attr("class","locs")
            .attr("transform", function(d){
                return "translate(" + proj(d.coordinates) + ")";
            })
            .attr("r", 0)
            .attr("fill","#ffffff");


        dots_loc
            .enter()
            .append("text")
            .text(function(d){
                return d.location
            })
            .attr("transform", function(d){
                return "translate(" + proj(d.coordinates) + ")";
            })
            .attr("text-anchor", "left")
            .attr("font-family", "Open Sans,Arial,Verdana,sans-serif")
            .attr("font-size", "14px")
            .attr("font-weight", "bolder")
            .attr("opacity","0.2");

            var points = [];
            var bds = [];
            var g_coords = [];
            var fnl_data=[];

            d3.csv("final_brids_data.csv", function(error,birddata){
                if(error)
                    {
                        console.log("data error");
                    }
                else
                    {

                        birddata.forEach(function(d,i){

                            points[i] = {"name": d.species, "coords": [d.longitude, d.latitude] };
                            i++;

                        });

                        console.log("finaldata", points); 
                    }

                route_colors = ["#CD5C5C", "#A52A2A", "#00008B", "#006400", "#FF8C00", "#FFD700"];

                const unique = (value, index, self) => 
                {
                    return self.indexOf(value) === index
                }

                i=0;
                points.forEach(point => {
                    bds[i] = point.name;
                    i++;
                });

                var uniq_species = bds.filter(unique);

                i=0;
                points.forEach(point => {
                    if(point.name === uniq_species[index1])
                    {
                        g_coords[i] = point.coords
                        fnl_data[i] = point
                        i++;
                    }
                });

                
                function ret_inicoords(i)
                {
                    return g_coords[0]                   
                }


                dots = map.selectAll("circle")
                            .data(fnl_data);

                dots.enter().append("circle")
                            .attr("transform", function(d){
                                    console.log("final cords")
                                    return "translate(" + proj(d.coords) + ")";
                            })
                            .attr("r",0)
                            .attr("fill",function(d){
                                return route_colors[index1];
                            });

                dots
                    .attr("fill",function(d){
                        return route_colors[index1];
                    })
                    .attr("r",0)
                    .attr("transform", function(d){ 
                            return "translate(" + proj(d.coords) + ")";                                              
                    });


                dots.exit().attr("r",0).remove();

                var link = []

                var i=0;
                g_coords.forEach(cod => {
                    link[i] = proj(cod)
                    i++
                });

                var lineGenerator = d3.line().curve(d3.curveCardinal);

                p_data = lineGenerator(link)

                console.log(g_coords)
                console.log(p_data)

                lines = svg.select("path.route")
                        .attr("d", p_data)
                        .style("stroke-width",4)
                        .style("stroke",function(d)
                        {
                            return route_colors[index1];
                        })
                        .style("fill","none");

                lines.exit().remove();

                svg.append("circle")
                    .attr("class","mv_cir")
                    .attr("cx", -8) //Starting x
                    .attr("cy", -8) //Starting y
                    .attr("r", 6)
                    .transition()
                    .delay(250)
                    .duration(6000)
                    .tween("pathTween", function(){return pathTween(lines)})

                function pathTween(path){
                    var length = path.node().getTotalLength(); // Get the length of the path
                    var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length
                    return function(t){
                        var point = path.node().getPointAtLength(r(t)); // Get the next point along the path
                        d3.select("circle.mv_cir") // Select the circle
                            .attr("cx", point.x) // Set the cx
                            .attr("cy", point.y) // Set the cy
                    }
                }

            })
    });  
};

