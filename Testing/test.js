
function myFunction() {
  var latters = 'ABCDEF1234567890'.split("");
  var color = '#';
  for (var i=0; i < 6; i++)
  {
  color+=latters[Math.floor(Math.random() * 16)];

  }

  document.getElementById("bg").style.background = color ;

}



window.onload = function(e) {
		console.log("window loaded");

document.getElementById("bg").addEventListener("click", myFunction);

}
