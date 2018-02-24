/*-- Bar.js
 * Constructs a bar chart.
 * Data format:
 * [ value, value, [...] ]
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
		this.domNode = domNode;
  }

  render() {
  	//set options because method chaining resets the value of 'this'
  	let options = this.opts;
  	let domNode = this.domNode;

  	this.clear();

  	d3.select(domNode)
  		.attr("transform", (options.vert) ? "" : "rotate(-90)")
  		.selectAll("rect")
		    .data(this.data)
	    	.enter()
	    .append("rect")
		    .attr("width", function(d) {
		    	return d * Number(options.h)+"px"
		    })
		    .attr("height", Number(options.w)+"px")
		    .attr("y", function(d, i) {
		    			return i*(10+Number(options.space))+"px"
		    })
		    .attr("fill", function (d, i) { return options.colors(i) });
  }

  clear() {
  	let domNode = this.domNode;

  	d3.select(domNode)
  		.selectAll("*")
  		.remove();
  }
}
