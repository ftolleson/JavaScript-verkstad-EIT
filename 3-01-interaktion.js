function changeStyle() {
  this.style.color = '#cc33cc';
  this.style.fontSize = '2em';
}

function inisialiseraYear() {
  var actYear = new Date().getFullYear();
  
  var yearElement = document.getElementById('year');
  
  yearElement.value = actYear;
  yearElement.addEventListener('click', changeStyle);
}

document.addEventListener('DOMContentLoaded', inisialiseraYear);