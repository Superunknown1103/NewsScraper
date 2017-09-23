// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(scrapeddb) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  scrapeddb.forEach(function(scrapeddb) {
    // Append each of the animal's properties to the table
    $("tbody").append("<tr><td>" + scrapeddb.title + "</td>" + "<td>" + scrapeddb.summary + "</td>" +
                         "<td>" + scrapeddb.link + "</td></tr>"
              );
  });
}

// Bonus function to change "active" header
function setActive(selector) {
  // remove and apply 'active' class to distinguish which column we sorted by
  $("th").removeClass("active");
  $(selector).addClass("active");
}

// 1: On Load
// ==========

// First thing: ask the back end for json with all animals
$.getJSON("/all", function(scrapeddb) {
  // Call our function to generate a table body
  displayResults(scrapeddb);
});

// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
$("#weight-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#animal-weight");

  // Do an api call to the back end for json with all animals sorted by weight
  $.getJSON("/weight", function(scrapeddb) {
    // Call our function to generate a table body
    displayResults(scrapeddb);
  });
});

// When user clicks the name sort button, display the table sorted by name
$("#name-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("name");

  // Do an api call to the back end for json with all animals sorted by name
  $.getJSON("/name", function(scrapeddb) {
    // Call our function to generate a table body
    displayResults(scrapeddb);
  });
});
