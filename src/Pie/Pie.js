/*-- Pie.js
 * Constructs a Pie chart.
 * Data format:
 * [ [value, name], [...] ]
 *
 * TODO: Add more opts
 * TODO: Add styling
 * TODO: Add labeling
/*/

export default class Pie {
	constructor(data, opts, domNode) {
		this.data = data;
		this.opts = opts;
		this.domNode = domNode;
	}

	render() {
		//set options because method chaining resets the value of 'this'
		let options = this.opts;

		this.clear();

		// Data set up
		let arcSegs = d3.pie()(this.data);
		let arcPaths = d3.arc()
			.outerRadius(options.outerRadius)
			.innerRadius(options.innerRadius)
			.startAngle(function (d) {return d.startAngle})
			.endAngle(function (d) {return d.endAngle})

		// SVG Rendering
		let colors = d3.scaleOrdinal(d3.schemeCategory10);

		d3.select(this.domNode)
			.selectAll('path')
			.data(arcSegs)
			.enter()
			.append('path')
			.attr('d', arcPaths)
			.attr('fill', function (d, i) { return colors(i);});
	}

	clear() {
		d3.select(this.domNode)
			.selectAll("*")
			.remove();
	}
}
