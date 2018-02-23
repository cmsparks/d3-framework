export default class Bar {
  constructor(data, opts) {
    this.data = data;
		this.opts = opts;
  }

  render(domNode) {
  	let options = this.opts
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
