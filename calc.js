function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 + num2;
  document.getElementById("result").value = result;
}

function sub() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 - num2;
  document.getElementById("result").value = result;
}

function mult() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 * num2;
  document.getElementById("result").value = result;
}

function div() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 / num2;
  document.getElementById("result").value = result;
}