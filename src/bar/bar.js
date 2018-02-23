/*-- Bar.js
 * Constructs a bar chart.
 * Data format:
 * [ [index, value, name], [...] ]
 * 
 * The index is stored in the array due to D3 making it 
 * complicated to access the index of data while
 * manipulating it.
 *
 * TODO Automatically build indexes inside data
 * TODO: Use the name and add labels + label opts
 * TODO: Add axes + axes opts
 * TODO: Add lists of opts
/*/

export default class Bar {
  constructor(data, opts) {
    this.data = data;
		this.opts = opts;
  }

  render(domNode) {
  	//set options because d3 resets the value of 'this'
  	let options = this.opts;

	  d3.select(domNode)
	    .selectAll("rect")
		    .data(this.data)
	    .enter().append("rect")
		    .attr(((options.vert) ? "height" : "width"), function(d) {return d[1] * (options.h)})
		    .attr(((options.vert) ? "width" : "height"), options.w)
		    .attr(((options.vert) ?  "x" : "y"), function(d) {return d[0]*(10+options.space)+"px";})
		    .attr("fill", options.fill)
		    .text(function(d) {return d[1];});
  }
}
