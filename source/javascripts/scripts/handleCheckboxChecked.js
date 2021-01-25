const handleCheckboxChecked = () => {
  const checkboxes = document.querySelectorAll('.billCheckbox');
  const billsIds = [];
  const values = [];

  const formatK = (number) => {
    let num = number.toString();
    return num.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  }

  const displayTotal = (idInvoices, valueInvoices) => {
    let invoicesIdToInject = "";
    idInvoices.forEach((idInvoice) => {
      invoicesIdToInject += `
        <p class="text-light-grey">${idInvoice}</p>
      `
    })
    document.querySelector("#recapInvoicesArea").innerHTML = invoicesIdToInject;
    document.querySelector("#recapSumArea").innerText = `${formatK(valueInvoices.reduce((a, b) => a + b))} €`;
  }

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      values.push(parseInt(checkbox.parentElement.querySelector(".text-blue strong").innerText.replace(/\s/g,'').replace(/€+/i, '')));   
      billsIds.push(checkbox.parentElement.querySelector(".invoiceNumber strong").innerText);     
    }
  })
  displayTotal(billsIds, values);
}

export default handleCheckboxChecked;