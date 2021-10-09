///Simple One
var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});


///Function  concept

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
