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
  constructor(data, opts, domNode) {
		this.opts = opts;
		this.data = data;
  }

  render(domNode) {
  	//set options because d3 resets the value of 'this'
  	let options = this.opts;

  	d3.select(domNode)
  		.selectAll("rect")
		    .data(this.data)
	    	.enter()
	    .append("rect")
		    .attr(((options.vert) ? "height" : "width"), function(d) { return d[1] * Number(options.h)+"px"})
		    .attr(((options.vert) ? "width" : "height"), Number(options.w)+"px")
		    .attr(((options.vert) ?  "x" : "y"), function(d) {return d[0]*(10+Number(options.space))+"px"})
		    .attr("fill", options.fill);
  }
}
