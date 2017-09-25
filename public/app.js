// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(scrapeddb) {
  // First, empty the table
  $("tbody").empty();
  var commentDiv = $("<div class='container'><div class='dialogbox'><div class='body'><span class='tip tip-up'></span><div class='message'>Leave a comment<form><input type='text'><input type='submit'></form></span></div></div></div>");

  // Then, for each entry of that json...
  scrapeddb.forEach(function(scrapeddb) {
    // Append each of the animal's properties to the table
    $("tbody").append("<tr id='article'><td>" + scrapeddb.title + "</td>" + "<td>" + scrapeddb.summary + "</td>" +
                         "<td><div>Read More Here" + "<a href='" + scrapeddb.link + "'></div>" + "</td>" + "<td id='comment'>" + commentDiv + "</td></tr>"
      );
  $("<td id='comment'>").each(function( index ) {
    $("#comment").append(commentDiv);
  });
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