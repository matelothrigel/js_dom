const form = document.createElement("form");

// Név input
const nevInput = document.createElement("input");
nevInput.type =  "text";
nevInput.placeholder = "Név";
nevInput.Id = "nev";

// Email input
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";
emailInput.Id = "email";

// Submit gomb
const gomb = document.createElement("button");
gomb.type = "submit";
gomb.textContent = "Küldés";

// Eredmény
const eredmeny = document.createElement("p");

// Elemek hozzááadása
form.appendChild(nevInput);
form.appendChild(emailInput);
form.appendChild(gomb);

document.body.appendChild(form);
document.body.appendChild(eredmeny);
