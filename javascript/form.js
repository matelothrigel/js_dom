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

// Submit 
form.addEventListener("submit", function(event){
    event.preventDefault();

    const nev = nevInput.value.trim();
    const email = emailInput.value.trim();

    // Validálás
    if (nev === "") {
        eredmeny.textContent = "A név megadása kötelező.";
        return;
    }

    if (nev.lenght < 3 ) {
        eredmeny.textContent = "A név legalább 3 karakter legyen.";
        return;
    }

    if (email === "") {
        eredmeny.textContent = "Az email megadása kötelező.";
        return;
    }

    if (!email.includes("@")) {
        eredmeny.textContent = "Nem megfelelő email cím.";
        return;
    }

    // Ha minden megfelelő
    eredmeny.textContent = "Név: " + nev + " | Email: " + email;

});