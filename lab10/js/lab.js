/**
 * Author:    Spencer G.
 * Created:   5.30.2022
 *
 * (c) Copyright by ucsc.
 **/

// Define Variables



  var outputEl = document.getElementById("output");

  var buttonEl = document.getElementById("my-button");

  var inputEl = document.getElementById("user-name");

  function scrambleUserName(word){
    var nameArray = word.split('');

    var nameArraySort = nameArray.sort();

    var nameSorted = nameArraySort.join('');

    return nameSorted;
  }

  buttonEl.addEventListener("click", function(){
    var userName = inputEl.value;

    var newName = scrambleUserName(userName);

    outputEl.innerHTML = "<p id-name-results>" + "This is your new name: " +
    newName + "</p>";
  });
