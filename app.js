   var letters = "abcdefghijklmnopqrstuvwxyz";
   var userName = prompt("Enter Your Full Name:");
   var sign = "@";
var fa = Math.floor(Math.random() * 100)
var result = sign +userName+fa;
var userdiv = document.getElementById("generateName").innerHTML = result
