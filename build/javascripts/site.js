import displayBills from "./scripts/displayBills.js";

let bills;

const getData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => bills = res.payments)
    .then((res) => displayBills(res));
}

document.addEventListener('DOMContentLoaded', function() {
  getData('https://demo.soan-solutions.io/test_front/company/CIKLEA/payments');
})