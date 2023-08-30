function bclick(val) {
  document.getElementById("inputText").value += val;
}
function equalto() {
  var result = eval(document.getElementById("inputText").value);
  document.getElementById("inputText").value = result;
}
function dclear() {
  document.getElementById("inputText").value = " ";
}
function back() {
  document.getElementById("inputText").value = document
    .getElementById("inputText")
    .value.slice(0, -1);
}
