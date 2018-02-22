export default class Bar {
	constructor() {

	}
	
	setData(data) {
		this.data = data
	}

	render(domNode) {
		d3.select(domNode)
			.selectAll("div")
				.data(this.data)
			.enter().append("div")
				.style("width", function(d) {return d * 10 + "px";})
				.text(function(d) {return d;});
	}
}
