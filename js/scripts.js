$(document).ready(function() {
var favArray = []

  $("button#submit").click(function(event) {
    event.preventDefault();
    var food = $("#Food").val();
    var city = $("#City").val();
    var book = $("#Book").val();
    var color = $("#Color").val();
    var hobby = $("#Hobby").val();
    favArray = [food, city, book, color, hobby];
    favArray.forEach(function(favorite) {
      $("ul").append("<li>"+favorite+"</li>");
    });
  });

  $("button#change").click(function(event) {
    event.preventDefault();
    $("ul").empty();
    var index = prompt("Which favorite thing would you like to change, 1-5");
    var newFav = prompt("What would you like to change it to?");
    index -= 1;
    favArray[index] = newFav;
    favArray.forEach(function(favorite) {
      $("ul").append("<li>"+favorite+"</li>");
    });
  });

  $("button#pop").click(function(event) {
    event.preventDefault();
    favArray.pop();
    $("li:last-child").remove();
  });

$("button#push").click(function(event) {
  event.preventDefault();
  var push= prompt("What would yo like to add?")
  favArray.push(push);
  $("ul").empty();
  favArray.forEach(function(favorite) {
  $("ul").append("<li>"+favorite+"</li>");
    });
  });
});
