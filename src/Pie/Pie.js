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
	constructor(data, opts) {
		this.data = data;
		this.opts = opts;
	}

	render(domNode) {
		//set options because d3 resets the value of 'this'
		let options = this.opts;

		// Data set up
		let arcSegs = d3.pie()(this.data);
		console.log(arcSegs);
		let arcPaths = d3.arc()
			.outerRadius(options.outerRadius)
			.innerRadius(options.innerRadius)
			.startAngle(function (d) {return d.startAngle})
			.endAngle(function (d) {return d.endAngle})

		// SVG Rendering
		let colors = d3.scaleOrdinal(d3.schemeCategory10);

		d3.select(domNode)
			.selectAll('path')
			.data(arcSegs)
			.enter()
			.append('path')
			.attr('d', arcPaths)
			.attr('fill', function (d, i) { return colors(i);});
	}
}
