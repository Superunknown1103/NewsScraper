// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(scrapeddb) {
  // First, empty the table
  $("tbody").empty();
  var commentDiv = $("<div class='container'><form><input type='text'><input type='submit'></form></div>");

  // Then, for each entry of that json...
  scrapeddb.forEach(function(scrapeddb) {
    // Append each of the animal's properties to the table
    $("tbody").append("<tr id='article'><td>" + scrapeddb.title + "</td>" + "<td id='article'>" + scrapeddb.summary + "</td>" +
                         "<td id='article'>" + "<a href=" + "'" + scrapeddb.link + "'>Full Article</a>" + "</td>" + 
                         "<td id='comment'>" + 
                         "<form method='post'><textarea rows='4' cols='100' style='width:500px;' type='text' name='comment' id='comment' /><br /><input type='submit' value='Submit'>" + 
                         "</td>" +
                         "</tr>"
      );
            });
          };
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