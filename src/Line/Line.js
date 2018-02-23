/*-- Line.js
 * Constructs a line chart.
 * Data format:
/*/
export default class Line {
  constructor(name, data, opts) {
    this.name = name;
    this.data = data;
    this.opts = opts;
  }

  render(domNode) {
    //set options because d3 resets the value of 'this'
    let options = this.opts;

  }
}
