/**
 * Author:    Spencer G.
 * Created:   5.25.2022
 *
 * (c) Copyright by ucsc.
 **/

// Define Variables

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");

new1El.id = "paragraph";

new1El.innerHTML = "For some reason, I think there is a character limit and it
  will only allow me write this much before not working anymore.";

var new2El = document.createElement("h1");

new2El.id = "header";

new2El.innerHTML = "I love Noodles";

outputEl.appendChild(new2El);

outputEl.appendChild(new1El);

document.getElementById("paragraph").
  style.color = "orange";

document.getElementById("header").
  style.padding = "2.5px";
