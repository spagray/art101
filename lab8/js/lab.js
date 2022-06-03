/**
 * Author:    Spencer G.
 * Created:   5.20.2022
 *
 * (c) Copyright by ucsc.
 **/

 function addTwo(x){
     return (x + 2);
 }
console.log("3 + 2 =", addTwo(3));
console.log("10 + 2 =", addTwo(10));

array = [25, 50, 75, 100, 125, 150]
console.log("my Array", array);

var result = array.map(addTwo);
console.log("my array + 2", result);

var result = array.map(function(x){
    return x * 0.2
})
console.log("my array * 0.2", result);
