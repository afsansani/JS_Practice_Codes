// Unhide
document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("hidden1").style.display = 'block';
  document.getElementById("img1dog").style.display = "block";
  document.getElementById("greetings1").innerHTML = "<p>Greetings Mate!</p>";
  document.getElementById("greetings1").style.display = "block";
});
// Hide
document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("hidden1").style.display = 'none';
  document.getElementById("img1dog").style.display = 'none';
  document.getElementById("greetings1").style.display = "none";
});
// Change Text
document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("hidden1").innerHTML = '<p>Hello World!</p>';
});
// Undo Change 
document.getElementById("btn4").addEventListener("click", function () {
  document.getElementById("hidden1").innerHTML = "<p>Hey! I was hidden!</p>";
});

