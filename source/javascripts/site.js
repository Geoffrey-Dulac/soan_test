let bills;

const formatK = (number) => {
  let num = number.toString();
  return num.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}


const displayBills = (allBills) => {
  let stringToInject = "";
  allBills.forEach((bill) => {
    if (bill.discount.isDiscountable === "1") {
        stringToInject += `
          <div class="d-flex justify-content-between mb-3">
            <div>
              <p class="mb-1"><strong>${bill.invoiceNumber}</strong></p>
              <p class="italic text-10px">A payer avant le ${bill.dueDate}</p>
            </div>
            <div class="flex-grow-1 text-right pr-3">
              <p class="mb-2 line-throught">${formatK(bill.amount)} €</p>
              <p class="mb-1 text-blue"><strong>${formatK(bill.amount * (1 - (bill.discount.discountRate * 0.01))) } €</strong></p>
              <div class="d-flex justify-content-end">
                <img src="images/escompte.svg" alt="escompte">
                <p class="mb-0 italic text-10px text-orange">5% d'escompte jursqu'au 17/06/2021</p>
              </div>
            </div>
            <div class="d-flex">
              <img src="images/icon_eye.svg" alt="icon_eye" class="mr-2">
              <img src="images/icon_download.svg" alt="icon_download">
            </div>
          </div>
        `
    } else {
        stringToInject += `
          <div class="d-flex justify-content-between mb-3">
            <div>
              <p class="mb-1"><strong>${bill.invoiceNumber}</strong></p>
              <p class="italic text-10px">A payer avant le ${bill.dueDate}</p>
            </div>
            <div class="flex-grow-1 text-right pr-3">
              <p class="mb-1 text-blue"><strong>${formatK(bill.amount)} €</strong></p>
              <div class="d-flex justify-content-end">
                <img src="images/escompte.svg" alt="escompte">
                <p class="mb-0 italic text-10px text-orange">5% d'escompte jursqu'au 17/06/2021</p>
              </div>
            </div>
            <div class="d-flex">
              <img src="images/icon_eye.svg" alt="icon_eye" class="mr-2">
              <img src="images/icon_download.svg" alt="icon_download">
            </div>
          </div>
        `
    }

  })
  document.querySelector('#billsArea').innerHTML = stringToInject;
}

const getData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => bills = res.payments)
    .then((res) => displayBills(bills));
}

document.addEventListener('DOMContentLoaded', function() {
  getData('https://demo.soan-solutions.io/test_front/company/CIKLEA/payments');
})