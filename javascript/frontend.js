const focim = document.createElement("h1");
focim.id = "focim";
focim.textContent = "DOM (Document Object Model)";
focim.style.color = "Blue";
focim.style.textAlign = "center";

const alcim = document.createElement("h4");
alcim.id = "alcim";
alcim.textContent = "Hogyan generáljunk weboldalt dinamikusan.";
focim.style.color = "Red";
alcim.style.textAlign = "Center";

const vonal = document.createElement("hr")

const szoveg = document.createElement("p");
szoveg.id = "szoveg"
// formázás a css-ben
szoveg.textContent = `
A Budapest–Kelebia-vasútvonalon 2022. február 1-jétől vágányzári menetrend érvényes, Budapest felé munkanapokon napi 4, Délegyháza felé napi 5 vonat a G25-ös jelzést kapta. A vonatok helyett Délegyházától Kunszentmiklós-Tassig vonatpótló autóbusz közlekedik.[1] 2022. május 1-jétől a teljes vasútvonalon szünetel a vasúti közlekedés. Vonatok helyet a teljes vonalat a Volánbusz pótolja.[2] Szeged és Kelebia között új pótlóbusz járat közlekedik.`;

const szoveg2 = document.createElement("p");
szoveg2.id = "szoveg2";
szoveg2.textContent = `
A Budapest–Kelebia-vasútvonalon 2022. február 1-jétől vágányzári menetrend érvényes, Délegyháza felé munkanapokon reggel 1 vonat a Z25-ös jelzést kapta. A vonatok helyett Délegyházától Kunszentmiklós-Tassig vonatpótló autóbusz közlekedik. Budapest felé nem jár.[1] 2022. május 1-jétől a teljes vasútvonalon szünetel a vasúti közlekedés. Vonatok helyet a teljes vonalat a Volánbusz pótolja.[2] Szeged és Kelebia között új pótlóbusz járat közlekedik.`;

const szoveg3 = document.createElement("p");
szoveg3.id = "szoveg3";
szoveg3.textContent = `
2022. február 1-jétől a Budapest–Kelebia-vasútvonalon elkezdődik a pályafelújítás. A vonatok Kunszentmiklós-Tass helyett csak Délegyházáig közlekednek. Délegyházától Kunszentmiklós-Tassig vonatpótló autóbusz közlekedik.[8][9][10] 2022. május 1-jétől a teljes vasútvonalon szünetel a vasúti közlekedés. Vonatok helyet a teljes vonalat a Volánbusz pótolja.[11]`;

const gomb = document.createElement("button");
gomb.id = "gomb";
gomb.textContent = "Kattints!";

const gomb2 = document.createElement("button");
gomb2.id = "gomb2";
gomb2.textContent = "Kattints erre is!";

// elemek összefűzése
document.body.appendChild(focim);
document.body.appendChild(alcim);
document.body.appendChild(vonal);
document.body.appendChild(szoveg);
document.body.appendChild(szoveg2);
document.body.appendChild(szoveg3);
document.body.appendChild(gomb);
document.body.appendChild(gomb2);