// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// Adding eventListeners
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", resetData);

// Set variables
var filteredData = dataSet; 
var resetData = dataSet;

// Renders the table
function renderTable() {

  // Loop for rendering table
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {

    // Get get the current data object and its fields
    var data = filteredData[i];
    var fields = Object.keys(data);

    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {

      // For every field in the data object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

// Function for handling clicks
function handleSearchButtonClick(event) {

  // prevent page from refreshing
  event.preventDefault();


  //If loops for input checks
  // Date
  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    filteredData = dataSet.filter(function (data) {
      var dataDate = data.datetime;
      return dataDate === filterDate;
    });
  };

  // City
  var filterCity = $cityInput.value.trim().toLowerCase();
  if (filterCity !="") {
    filteredData = filteredData.filter(function(data) {
      var dataCity = data.city.toLowerCase();
      return dataCity === filterCity;
    });
  };

  // State
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState !="") {
    filteredData = filteredData.filter(function(data) {
      var dataState = data.state.toLowerCase();
      return dataState === filterState;
    });
  };

  // Country
  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry!="") {
    filteredData = filteredData.filter(function(data) {
      var dataCountry = data.country.toLowerCase();
      return dataCountry === filterCountry;
    });
  };

  // Shape
  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape) {
    filteredData = filteredData.filter(function(data) {
      var dataShape = data.shape.toLowerCase();
      return dataShape === filterShape;
    });
  };
  // Return table based on inputs
  renderTable();
  }

// Reset the data
function resetData() {
    filteredData = dataSet;
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
    renderTable();
}

// Reset form
function resetForm() {
    document.getElementById("myForm").reset();
}

// Render the table for the first time on page load
renderTable();