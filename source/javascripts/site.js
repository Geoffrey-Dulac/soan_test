import displayBills from "./scripts/displayBills.js";
import handleCheckboxChecked from "./scripts/handleCheckboxChecked.js";
import handleClickOnPaymentButton from "./scripts/handleClickOnPaymentButton.js";
import handleLoginSubmit from "./scripts/handleLoginSubmit.js";


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
  try {
    fetch(url)
    .then((res) => res.json())
    .then(({payments}) => bills = payments)
    .then((res) => displayBills(res))
    .then((res) => checkboxesEventListener()); 
  } catch (error) {
    console.error(error);
    document.querySelector('billsToPayArea').innerText = "Service momentanément indisponible ! Si cette gêne persiste, n'hésitez pas à contacter nos équipes.";
  }
}



document.addEventListener('DOMContentLoaded', function() {
  const indexPage = document.getElementById("indexPage");
  const loginPage = document.getElementById("loginPage");

  if (indexPage) {
    getData('https://demo.soan-solutions.io/test_front/company/CIKLEA/payments'); 
    const payBtn = document.getElementById('payButton');
    const btnValidation = document.getElementById("validationPaymentBtn");
    btnValidation.addEventListener('click', handleLastValidation);
    payBtn.addEventListener('click', handleClickOnPaymentButton); 
  } else if (loginPage) {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLoginSubmit)
  }
})