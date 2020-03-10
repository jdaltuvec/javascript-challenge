// from data.js
let tableData = data;

// Getting my variables ready
const table = d3.select("#ufo-table")
table.classed("table-stripped", true)
let tbody = table.select("tbody")

const input = d3.select("input")
const button = d3.select("button")


// Creating an event hadler for both the button and input
const handler = function() {

	let userInput = input.property("value")

	tbody.html("")

	tableData.filter(dataRow => dataRow.datetime === userInput).forEach(dataRow => {
	let row = tbody.append("tr")
	row.append("td").text(dataRow.datetime)
	row.append("td").text(dataRow.city)
	row.append("td").text(dataRow.state)
	row.append("td").text(dataRow.country)
	row.append("td").text(dataRow.shape)
	row.append("td").text(dataRow.durationMinutes)
	row.append("td").text(dataRow.comments)
	})
}


input.on("change", handler);
button.on("click", handler);