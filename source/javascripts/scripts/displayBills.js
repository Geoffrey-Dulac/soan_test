const displayBills = (allBills) => {
  let billsToPayToInject = "";
  let billsPayedToInject = "";

  const formatK = (number) => {
    let num = number.toString();
    return num.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  }
  
  allBills.forEach(({ discount: {isDiscountable, discountRate}, payedDate, invoiceNumber, dueDate, amount }) => {
    if (isDiscountable === "1" && payedDate === null) {
      billsToPayToInject += `
        <div class="d-flex justify-content-between mb-5">
          <input type="checkbox" class="my-auto mr-4 billCheckbox">
          <div>
            <p class="mb-1 invoiceNumber"><strong>${invoiceNumber}</strong></p>
            <p class="italic text-10px">A payer avant le ${dueDate}</p>
          </div>
          <div class="flex-grow-1 text-right pr-3">
            <p class="mb-2 line-throught">${formatK(amount)} €</p>
            <p class="mb-1 text-blue"><strong>${formatK(amount * (1 - (discountRate * 0.01))) } €</strong></p>
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
    } else if (isDiscountable === "0" && payedDate === null) {
      billsToPayToInject += `
        <div class="d-flex justify-content-between mb-5">
          <input type="checkbox" class="my-auto mr-4 billCheckbox">
          <div>
            <p class="mb-1 invoiceNumber"><strong>${invoiceNumber}</strong></p>
            <p class="italic text-10px">A payer avant le ${dueDate}</p>
          </div>
          <div class="flex-grow-1 text-right pr-3">
            <p class="mb-1 text-blue"><strong>${formatK(amount)} €</strong></p>
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
    } else if (isDiscountable === "1" && payedDate !== null) {
      billsPayedToInject += `
        <div class="d-flex justify-content-between mb-5">
          <div>
            <p class="mb-1 invoiceNumber"><strong>${invoiceNumber}</strong></p>
            <p class="italic text-10px">A payer avant le ${dueDate}</p>
          </div>
          <div class="flex-grow-1 text-right pr-3">
            <p class="mb-2 line-throught">${formatK(amount)} €</p>
            <p class="mb-1 text-blue"><strong>${formatK(amount * (1 - (discountRate * 0.01))) } €</strong></p>
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
    } else if (isDiscountable === "0" && payedDate !== null) {
      billsPayedToInject += `
        <div class="d-flex justify-content-between mb-5">
          <div>
            <p class="mb-1 invoiceNumber"><strong>${invoiceNumber}</strong></p>
            <p class="italic text-10px">A payer avant le ${dueDate}</p>
          </div>
          <div class="flex-grow-1 text-right pr-3">
            <p class="mb-1 text-blue"><strong>${formatK(amount)} €</strong></p>
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
  document.querySelector('#billsToPayArea').innerHTML = billsToPayToInject;
  document.querySelector('#payedBillsArea').innerHTML = billsPayedToInject;
}

export default displayBills;
