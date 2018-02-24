/*-- Line.js
 * Constructs a line chart.
 * Data format:
 * []
 *
 * TODO: add in other data handling stuff
 * TODO: Add axes
/*/
export default class Line {
  constructor(data, opts, domNode) {
    this.data = data;
    this.opts = opts;
    this.domNode = domNode;

  }

  render() {
    //set options because method chaining resets the value of 'this'
    let options = this.opts;
    let data = this.data;

    this.clear();

    let lineData = d3.line()(data);

    d3.select(this.domNode)
    	.append("path")
    		.attr("d", lineData)
    		.attr("stroke", options.color)
    		.attr("stroke-width", options.width)
    		.attr("fill", "none");
  }

  clear() {
  	d3.select(this.domNode)
  		.selectAll("*")
  		.remove();
  }
}
