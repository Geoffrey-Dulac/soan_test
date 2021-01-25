const handleLoginSubmit = (event) => {
  event.preventDefault();
  const data = {
    email: document.getElementById('emailInput').value,
    password: document.getElementById('passwordInput').value
  }
  
  fetch("https://demo.soan-solutions.io/test_front/inscription", { method: "POST", body: JSON.stringify(data) })
    .then(res => {
      if (!res.redirected) {
        document.getElementById('loginErrorMessage').innerText = "Erreur d'identifiants";
      } 
    });
}
  
  export default handleLoginSubmit;