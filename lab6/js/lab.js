/**
 * Author:    Spencer G.
 * Created:   5.10.2022
 *
 * (c) Copyright by ucsc.
 **/

// Define Variables
myTransport = ["Toyota Prius", "uber", "rides from friends", "walking"];

myMainRide = {
    make : "Toyota",
    model : "Prius",
    color : "Silver",
    year : 2010,
    age : function() {
      return 2019 - age;
    }
}

// Output
document.writeln("Transportation: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
