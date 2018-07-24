/*******  Variables & Functions for Traffic ******/
var trafficCount = [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000] ;
var weeks = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];

var ctx = document.getElementById("trafficChart");
var trafficChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: weeks,
    datasets: [
      { 
        data: trafficCount,
        label: "Traffic",
        lineTension: 0,
        backgroundColor: "#E2E3F6"
      }
    ]
  }
});


/*****  Variables & Functions for Daily Traffic ********/

var dailyTraffic = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});





/***** Variables & Functions for Mobiles Users *******/


var mobileUsers = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});


