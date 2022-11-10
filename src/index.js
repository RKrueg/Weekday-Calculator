import CalcDate from "./date.js";

//const newArray = [];

function handleDate(event) {
  event.preventDefault();
  
  const month = document.querySelector("#month").value;
  const day = document.querySelector("#day").value;
  const year = document.querySelector("#year").value;
  const result = document.querySelector("#result");
  const date1 = new CalcDate(month, day, year);
  const response = date1.checkDate();
  result.innerHTML = `You were born on: ${response}`;
  
  //result.innerHTML = `${month}/${day}/${year}`;

}

window.addEventListener("load", function() {
  document.querySelector("#button").addEventListener("click", handleDate);
})