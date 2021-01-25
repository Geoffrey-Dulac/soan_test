const handleClickOnPaymentButton = () => {
  let sum = 0;
  const checkboxes = document.querySelectorAll('.billCheckbox');
  const facs = [];
  let stringfacs = "";

  const formatK = (number) => {
    let num = number.toString();
    return num.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  }

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      sum += (parseInt(checkbox.parentElement.querySelector('.text-blue').innerText.replace(/\s/g,'').replace(/€+/i, '')));
      facs.push(checkbox.parentElement.querySelector('.invoiceNumber').innerText);
    }
  });

  document.querySelector('#modalContentArea').innerHTML = `
    <p class="text-18px font-weight-bold mb-4">Payer ${formatK(sum)} €</p>
    <p class="text-14px mb-0 text-light-grey">IBAN</p>
    <p class="text-14px font-weight-bold mb-3">FR49 3000 2004 4000 0037 5630 B40</p>
    <p class="text-14px mb-0 text-light-grey">Code BIC</p>
    <p class="text-14px font-weight-bold mb-3">CRLYFRPPXX</p>
    <p class="text-14px mb-0">Afin d'en faciliter le traitement, merci d'indiquer les références de factures suivantes dans le libellé de votre virement.</p>
    <div class="modalFacsArea"></div>
  `;

  facs.forEach((fac) => {
    stringfacs += `
      <p class="text-14px mb-0 font-weight-bold">${fac}</p>
    `
  })

  document.querySelector('.modalFacsArea').innerHTML = stringfacs;
}

export default handleClickOnPaymentButton;