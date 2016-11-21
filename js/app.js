var data = [2, 3, 4]



//CREATE THE CANVAS
var containerSize = d3.select('#interactiveChart').node().getBoundingClientRect()
var margin = {top: 0.008 * containerSize.height , right: 0.008 * containerSize.width, bottom: 0.008 * containerSize.height, left: 0.008 * containerSize.width};
var width = containerSize.width - margin.right - margin.left; //Chart width
var height = containerSize.height - margin.top - margin.bottom; //Chart height

var chart = d3.select('#interactiveChart').append('svg') //http://bl.ocks.org/mbostock/3019563
			.attr({
			  height: height + margin.top + margin.bottom,
			  width: width + margin.left + margin.right
			})
			.attr("id", "chart")
			.attr("transform", "translate(" + (margin.left) + "," + (margin.top)+ ")")//moving the origin to the point where it starts


//DRAW

chart.append('text')
	.html('&#f183')
	.attr({
		x: 25,
		y 50
	})
	.style('font-size', '10px')
	.style('font-family', 'FontAwesome')




// chart.append('line')
// 	.attr({
//     	x1: 10,
//     	y1: 250,
// 	    x2: 10,
// 	    y2: 250
// 	})
// 	.style('stroke','rgb(200,200,200)')
// 	.style('stroke-width','5px')
//   	.transition()
//   	.duration(2500)
//   	.attr({
//     	x2: 750,
//     	y2: 250
//   	});

// chart.append('line')
// 	.attr({
// 		x1: 10,
// 		y1: 5,
// 		x2: 10,
// 		y2: 250
// 	})
// 	.style('stroke','rgb(200,200,200)')
// 	.style('stroke-width','5px')
// 	.transition()
//   	.duration(2500)
//   	.attr({
//     	x1: 750,
//     	x2: 750
//   	});

