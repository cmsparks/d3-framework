/*-- Line.js
 * Constructs a line chart.
 * Data format:
 * 
 *
 *
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



  }

  clear() {
  	d3.select(this.domNode)
  		.selectAll("*")
  		.remove();
  }
}
