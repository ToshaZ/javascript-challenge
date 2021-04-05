// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Display the entire dataset as default
tableData.forEach((report) => {
    //console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the submit button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
submit.on("click", function() {

    // Remove existing table
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var input = d3.select("#datetime").property("value");
    console.log(input);

    // Filter reports
    var filteredData = tableData.filter(record => record.datetime === input);
    console.log(filteredData);

    // Display the filtered dataset
    filteredData.forEach((report) => {
        var row = tbody.append('tr');

        Object.entries(report).forEach(([key, value]) => {
            //console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });

});
