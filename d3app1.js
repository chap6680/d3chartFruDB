  
var dataset = [15, 20, 35, 25, 25, 40, 40, 30, 25];

var dataset2 = [30, 20, 45, 35, 50, 20, 35, 25, 35];

var dataset3 = [45, 40, 80, 60, 75, 60, 75, 55, 60];


var svgWidth = 500, svgHeight = 200, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
    var svg2 = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
.data(dataset3)
.enter()
.append("rect")
.attr("y", function(d) {
    return svgHeight - d 
})
.style('fill','green')
.attr("height", function(d) { 
   return d; 
})
.attr("width", (barWidth - barPadding)/2)
.attr("transform", function (d, i) {
   var translate = [(barWidth * i)+(barWidth - barPadding)/4, 0]; 
   console.log(translate);
   return "translate("+ translate +")";
});   

    var barChart2 = svg2.selectAll("barchart")
    .data(dataset2)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d 
   })
   .style('fill','red')
   .attr("height", function(d) { 
       return d; 
   })
   .attr("width", (barWidth - barPadding)/2)
   .attr("transform", function (d, i) {
       var translate = [(barWidth * i)+(barWidth - barPadding)/2, 0]; 
       console.log(translate);
       return "translate("+ translate +")";
   });

   var barChart3 = svg2.selectAll("barchart")

  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", function(d) {
       return svgHeight - d 
  })
  .attr("height", function(d) { 
      return d; 
  })
  .attr("width", (barWidth - barPadding)/2)
  .attr("transform", function (d, i) {
      var translate = [barWidth * i, 0]; 
      console.log(translate);
      return "translate("+ translate +")";
  });