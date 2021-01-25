import displayBills from "./scripts/displayBills.js";
import handleCheckboxChecked from "./scripts/handleCheckboxChecked.js";
import handleClickOnPaymentButton from "./scripts/handleClickOnPaymentButton.js";


let bills;

const handleLastValidation = () => {
  let checkboxes = document.querySelectorAll('.billCheckbox');
  const today = new Date();
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      bills.find((element) => element.invoiceNumber === checkbox.parentElement.querySelector('.invoiceNumber').innerText).payedDate = `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`;
      displayBills(bills);
      checkboxesEventListener();
    }
  })
  handleCheckboxChecked();
}

const checkboxesEventListener = () => {
  let checkboxes = document.querySelectorAll('.billCheckbox');
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
  const payBtn = document.getElementById('payButton');
  const btnValidation = document.getElementById("validationPaymentBtn");

  btnValidation.addEventListener('click', handleLastValidation);
  payBtn.addEventListener('click', handleClickOnPaymentButton);
})