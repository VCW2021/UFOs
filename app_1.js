// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

function addition(4, 5)  {
    return 4 + 5; 
    }

    function sum(a, b) {
        return a + b;
    }

    console.log(sum(2, 9));

    // Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

doubleAddition = (c, d) 
=> addition(c, d) * 2;

function buildTable(data) {

}