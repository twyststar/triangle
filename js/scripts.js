$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var sideOne = parseInt($("input#side1").val());
    var sideTwo = parseInt($("input#side2").val());
    var sideThree = parseInt($("input#side3").val());

    if (sideOne + sideTwo <= sideThree || sideTwo + sideThree <= sideOne || sideOne + sideThree <= sideTwo) {
      $("#answer").text("not a triangle")
    } else if (sideOne === sideTwo && sideOne === sideThree) {
      $("#answer").text("an equalatiral");
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
      $("#answer").text("an Isosceles");
    } else {
      $("#answer").text("a Scalene")
    }


  });
});
