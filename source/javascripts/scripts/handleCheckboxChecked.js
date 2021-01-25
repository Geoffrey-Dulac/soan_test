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
    if (valueInvoices.length === 2) {
      document.querySelector("#recapSumArea").innerText = `${formatK(valueInvoices.reduce((a, b) => a + b))} €`;
    } else if (valueInvoices.length === 1) {
      document.querySelector("#recapSumArea").innerText = `${formatK(valueInvoices[0])} €`;
    } else {
      document.querySelector("#recapSumArea").innerText = "0 €";
    }
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