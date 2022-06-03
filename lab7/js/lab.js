/**
 * Author:    Spencer G.
 * Created:   5.20.2022
 *
 * (c) Copyright by ucsc.
 **/

// Define Variables



// sortUserName: a function that takes user input and sorts the letters
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name");

  // split string to array
  var nameArray = userName.split('');

  // sort the array
  var nameArraySort = nameArray.sort();

  // join array back to string
  var nameSorted = nameArraySort.join('');

  return nameSorted;
}

// Output
document.writeln("Oh hey, I've finished playing with your name: ",
  sortUserName(), "</br>");
