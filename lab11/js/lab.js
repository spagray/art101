/**
 * Author:    Spencer G.
 * Created:   5.30.2022
 *
 * (c) Copyright by ucsc.
 **/


$("#challenge").append("<button id='challenge-button'>button</button>")
$("#problems").append("<button id='problems-button'>button</button>")
$("#results").append("<button id='results-button'>button</button>")

$("#challenge-button").click(function(){
  $("#challenge").toggleClass("special");
})

$("#problems-button").click(function(){
  $("#problems").toggleClass("special");
})

$("#results-button").click(function(){
  $("#results").toggleClass("special");
})
