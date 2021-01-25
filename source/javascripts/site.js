import displayBills from "./scripts/displayBills.js";
import handleCheckboxChecked from "./scripts/handleCheckboxChecked.js";


let bills;

const checkboxesEventListener = () => {
  const checkboxes = document.querySelectorAll('.billCheckbox');
  checkboxes.forEach((checkbox) => checkbox.addEventListener('change', handleCheckboxChecked));
} 

const getData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then(({payments}) => bills = payments)
    .then((res) => displayBills(res))
    .then((res) => checkboxesEventListener());
}

document.addEventListener('DOMContentLoaded', function() {
  getData('https://demo.soan-solutions.io/test_front/company/CIKLEA/payments'); 
})