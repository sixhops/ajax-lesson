$(document).ready(function() {

  $("button").on("click", function() {
    // e.preventDefault();
    // console.log("in the click");
    var searchString = document.forms["imageform"].elements["imagebox"].value;
    $.get('https://www.reddit.com/search.json', {
      q: searchString
    }).done(function(data) {
      // var results = data.data.children;
      var results = data.data.children;
      console.log(data);
      results.forEach(function(item) {
        if (item.data.thumbnail !== 'default') {
          $("#results").append("<img src='" + item.data.thumbnail + "'>");
        }
      });

    });
  });
});
