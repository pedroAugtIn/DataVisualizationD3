// Parte 1 - gráfico de retângulos
const dataset = [10, 20, 30, 40, 50];

const svg = d3.select("svg");

// Criando os retângulos com base nos dados
svg.selectAll("rect") 
   .data(dataset) 
   .enter() 
   .append("rect") 
   .attr("x", function(d, i) { return i * 30; }) 
   .attr("y", function(d) { return 100 - d; }) 
   .attr("width", 25) 
   .attr("height", function(d) { return d; }) 
   .attr("fill", "steelblue") 
   .attr("class", "bar")
   .append("title")
   .text((d) => d);

// Parte 2 - gráfico de pontos
// criando os circulos com base nos novos dados
const datasset = [
    [ 34,     78 ],
    [ 109,   280 ],
    [ 310,   120 ],
    [ 79,   411 ],
    [ 420,   220 ],
    [ 233,   145 ],
    [ 333,   96 ],
    [ 222,    333 ],
    [ 78,    320 ],
    [ 21,   123 ]
  ];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3.scaleLinear()
       .domain([0, d3.max(datasset, (d) => d[0])])
       .range([padding, w - padding]);

const yScale = d3.scaleLinear()
       .domain([0, d3.max(datasset, (d) => d[1])])
       .range([h - padding, padding]);

const svgg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svgg.selectAll("circle")
.data(datasset)
.enter()
.append("circle")
.attr("cx", (d) => xScale(d[0]))
.attr("cy",(d) => yScale(d[1]))
.attr("r", (d) => 5);

svgg.selectAll("text")
.data(datasset)
.enter()
.append("text")
.text((d) =>  (d[0] + "," + d[1]))
.attr("x", (d) => xScale(d[0] + 10))
.attr("y", (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale);
// Add your code below this line
const yAxis = d3.axisLeft(yScale);
// Add your code above this line

svgg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);

// Add your code below this line

svgg.append("g")
.attr("transform", "translate(60, 0)")
.call(yAxis)

// Add your code above this line

