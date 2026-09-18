const focim = document.createElement("h1");
focim.id = "focim";
focim.textContent = "Massospondylus";
focim.style.textAlign = "center";

const alcim = document.createElement("h4");
alcim.id = "alcim";
alcim.textContent = "Massospondylus";
alcim.style.textAlign = "Center";

const vonal = document.createElement("hr")

const szoveg = document.createElement("p");
szoveg.id = "szoveg"

szoveg.textContent = `
A Massospondylus (ógörög eredetű nevének jelentése 'megnyúlt gerinc') a prosauropoda dinoszauruszok egyik neme, amely a kora jura kor hettangi – pliensbachi korszakában, mintegy 200–183 millió évvel ezelőtt élt. Ez az egyik legelsőként elnevezett dinoszaurusz, a holotípusát Richard Owen írta le 1854-ben, egy Dél-Afrikában talált lelet alapján. Azóta Dél-Afrika más részein, Lesothóban és Zimbabwében is megtalálták a fosszíliáit. Az Arizona állambeli Kayenta-formációból, Indiából és Argentínából is kerültek elő olyan maradványok, amelyeket a Massospondylushoz kapcsoltak, de elképzelhető, hogy ezek a leletek nem ehhez a nemhez tartoznak.`;

const szoveg2 = document.createElement("p");
szoveg2.id = "szoveg2";
szoveg2.textContent = `
Típusfaja a M. carinatus, de a felfedezése utáni 150 évben további hét fajt is elneveztek, melyek közül jelenleg csak a M. kalae számít érvényesnek. Ezen időszak utolsó éveiben a prosauropodák rendszertana sokat változott, és számos tudós vitatni kezdte, hogy a Massospondylust a dinoszauruszok evolúciós fájának megfelelő pontján helyezték-e el. A nem számára megalkotott családnév, a Massospondylidae érvényessége a prosauropodák kapcsolatainak változásai miatt szintén vitatottá vált. Nem világos az sem, hogy mely más dinoszauruszokkal tartozott egy csoportba (amennyiben voltak ilyenek); de a családot több 2007-ben megjelent cikk is érvényesnek tekinti.`;

const szoveg3 = document.createElement("p");
szoveg3.id = "szoveg3";
szoveg3.textContent = `
Valószínűleg növényevő volt, bár létezik olyan elképzelés, ami szerint prosauropodák mindenevők voltak. Karcsú testtel, hosszú nyakkal és farokkal rendelkezett, mellső lábainak hüvelykujjain éles karmok helyezkedtek el, melyeket a táplálkozás vagy esetleg a védekezés során használhatott. Néhány újabb vizsgálat szerint a Massospondylus folyamatosan növekedett egész életében, testében a madarakéhoz hasonló légzsákok voltak, és feltehetően gondozta az utódait.`;

const alcim2 = document.createElement("h4");
alcim2.id = "alcim2";
alcim2.textContent = "Anatómia";
alcim2.style.textAlign = "Center";

const szoveg4 = document.createElement("p");
szoveg4.id = "szoveg4";
szoveg4.textContent = `
A Massospondylus közepes méretű prosauropoda volt, testhossza körülbelül 4–[1][2][3] 6[4][5] méter, tömege mintegy 135[3]-250[6] kilogramm lehetett. Habár sokáig négy lábon járó állatként ábrázolták, egy 2007-ben, a mellső lábakon elvégzett anatómiai vizsgálat megállapította, hogy a két végtag mozgásának korlátozottsága megnehezíthette ezt a járásmódot. Emellett a vizsgálat kizárta az ujjízületeken való járás valószínűségét és a helyváltoztatás más módjait is, arra hivatkozva, hogy a Massospondylus csak korlátozott mértéken volt képes megcsavarni a mellső végtagjait. Ezért, még ha a tömege alapján négy lábon járónak tűnik is, kénytelen volt a hátsó lábain mozogni.[7]`;

const szoveg5 = document.createElement("p");
szoveg5.id = "szoveg5";
szoveg5.textContent = `
A Massospondylus ennek ellenére a legtöbb szempontból átlagos prosauropoda volt. Karcsú testtel, kis fejjel, hosszú nyakkal és farokkal rendelkezett. Nyakát 9, hátát 13, keresztcsontját 3, farkát pedig 40 csigolya alkotta. Szeméremcsontja – a hüllőmedencéjűekre jellemző módon – előre irányult. Könnyebb testfelépítésű volt, mint a hozzá hasonló Plateosaurus.[8] Egy újabb felfedezés alapján a Massospondylus jól fejlett kulcscsontokkal rendelkezett, melyek a villacsonthoz hasonlóan összekapcsolódva helyezkedtek el, így valószínűleg nem volt képes mozgatni a vállait, de maguk a kulcscsontok mégsem voltak olyan fejletlenek és használhatatlanok, mint azoknál a dinoszauruszoknál, amelyeknek nincs igazi villacsontjuk. Ez a felfedezés azt is jelzi, hogy a madarak villacsontja a kulcscsontokból alakult ki.[9]`;

const szoveg6 = document.createElement("p");
szoveg6.id = "szoveg6";
szoveg6.textContent = `
A Plateosaurushoz hasonlóan minden lábán öt ujja volt, a hüvelykujjain pedig nagy karmokat viselt, amiket feltehetően táplálkozásra vagy a ragadozókkal szembeni védekezésre használt. A mellső láb negyedik és ötödik ujja kisebb volt, aszimmetrikus látszatot keltett. A 2007-es vizsgálat megállapította, hogy a kéztartás félig szupinált („imádkozó tartás”) volt, a tenyerek egymás felé fordultak; a csuklókat sosem találták meg elfordított helyzetben a még ízelt (kapcsolódó részekből álló) fosszíliáknál.[7]`;

const alcim3 = document.createElement("h4");
alcim3.id = "alcim3";
alcim3.textContent = "A koponya";
alcim3.style.textAlign = "Center";

const szoveg7 = document.createElement("p");
szoveg7.id = "szoveg7";
szoveg7.textContent = `
Fejének hossza körülbelül a combcsont hosszának felét érte el. Számos nyílás található rajta, melyek csökkentik a tömegét és izomtapadási pontokat, illetőleg helyet biztosítanak az érzékszervek számára. A nyílások a koponya két oldalán szimmetrikusan helyezkednek el. Elöl két nagyobb méretű, ellipszis alakú orrnyílás található. A szemnyílások aránylag nagyobbak, mint a hasonló nemeknél, például a Plateosaurusnál. A szemek és az orr között elhelyezkedő oldalsó nyílás (fenestra antorbitalis) kisebb, mint a Plateosaurusé. A koponya hátsó részén, közvetlenül a szemek mögött oldalt és felül, valamint az állkapocs oldalán, további nyílások találhatók.[8] A koponya szélesebb és rövidebb, mint a Plateosaurusé, de az összehasonlítást megnehezíti, hogy az egyes példányok koponyái sérültek, csak a helyreállított változataik vizsgálhatók.[8] A különböző egyedek koponyái eltérő jellegzetességeket mutatnak; például más a szemnyílás felső szegélyének vastagsága és a felső állcsont alsó részének magassága. Ezek a különbségek talán a nemi kétalakúság jelei,[10] vagy az egyedek közti kisebb eltérések lehetnek.[11]`;

const szoveg8 = document.createElement("p");
szoveg8.id = "szoveg8";
szoveg8.textContent = `
Más prosauropodákhoz hasonlóan valószínűleg a Massospondylusnak is volt a táplálék kihullását gátló pofarésze, mivel az állkapocs csontok felszínén a hüllőkre jellemző apró lyukaknál jóval nagyobbak találhatók a véredények számára.[8] A. W. Crompton és John Attridge 1986-ban készült tanulmányukban megállapították, hogy a Massospondylus koponyák a túlharapás jeleit mutatják, és azt feltételezték, hogy az alsó állkapocs elején egy elszarusodott csőrszerű képződmény helyezkedhetett el, ami az alsó és a felső fogsor közötti távolságot töltötte ki.[12] A feltételezésről azonban a későbbiekben megállapították, hogy helytelen, mivel az eltérést a fosszíliára alulról és felülről ható nyomás okozta. A hasonló módon nem sérült koponyáknál nem észlelhető a túlharapás.[10] Emellett úgy tűnik, hogy a fogak alaktanára vonatkozó megállapítások a fogak állkapocsban való elhelyezkedésén alapulnak.[13] Bár a Massospondylus heterodont fogazata nagyobb fogak közötti eltérést mutat, mint a Plateosaurusé, nem ér el olyan szintű specializációt, ami például a Heterodontosaurusnál tapasztalható.[13] A felső fogsor elülső fogai kör keresztmetszetűek és kúposak, ellentétben a hátsó fogakkal, melyek laposabbak és ovális keresztmetszetűek.[8][13]`;

const alcim4 = document.createElement("h4");
alcim4.id = "alcim4";
alcim4.textContent = "Felfedezés";
alcim4.style.textAlign = "Center";

const szoveg9 = document.createElement("p");
szoveg9.id = "szoveg9";
szoveg9.textContent = `
A Massospondylus első fosszíliáit Richard Owen írta le 1854-ben.[14] Neve az ógörög masszon ('megnyúlt')[15] és szpondülosz ('gerinc') szavakból származik.[16] A fosszíliákat J. M. Orpen fedezte fel az Elliot-formáció felső részén, a dél-afrikai Harrismith közelében, 1853-ban. A maradványok között megtalálhatók voltak a nyak, a hát és a farok csigolyák, egy lapocka, egy felkarcsont, egy részleges csípő, egy combcsont, egy sípcsont és a kezek, valamint a lábak csontjai. A holotípus a londoni Royal College of Surgeons gyűjteményébe került, majd megsemmisült a második világháború alatt; csupán a másolatai maradtak fenn.[17] A későbbiekben feltételezett Massospondylus maradványok kerültek elő a dél-afrikai Elliot-formáció felső részéről, a clarens formációból, a bushveldi homokkő formáció dél-afrikai és lesothói részéről; a zimbabwei Forest Sandstone-formációból és a Karroo Sandstone-formáció felső részéről; valamint az arizonai Kayenta-formációból. Ezek a leletek legalább 80 hiányos csontvázat és négy koponyát tartalmaznak, egy részük fiatal, más részük pedig felnőtt egyedektől származik.[8]`;

const szoveg10 = document.createElement("p");
szoveg10.id = "szoveg10";
szoveg10.textContent = `
Az arizonai lelet egy 1985-ös leírásból vált ismertté. Ez a példány 25%-kal nagyobb koponyával rendelkezett, mint a legnagyobb afrikai társa.[13] A felső állkapcsa elülső részén (premaxilla) 4, a hátsó részén (maxilla) pedig 16 fog található. A dinoszauruszok között egyedülálló módon apró, egy milliméter hosszú palatális fogakkal is rendelkezett.[18] Az afrikai koponyák újabb vizsgálata azonban feltárta, hogy a kayentai példány nem tartozik a Massospondylus nembe.[19]`;

const szoveg11 = document.createElement("p");
szoveg11.id = "szoveg11";
szoveg11.textContent = `
Argentínából is ismert Massospondylusról szóló beszámoló,[8] de erről a leletről később megállapították, hogy egy közeli rokon nemhez tartozik. A több részleges csontvázat és legalább egy koponyát tartalmazó fosszíliákra a kora jura kori Cañon del Colorado-formációban találtak rá, az argentínai San Juan mellett. Az anyag 2009-ben az Adeopapposaurus nevet kapta.[20]`;

const gomb = document.createElement("button");
gomb.id = "gomb";
gomb.textContent = "Kattints!";


document.body.appendChild(focim);
document.body.appendChild(alcim);
document.body.appendChild(vonal);
document.body.appendChild(szoveg);
document.body.appendChild(szoveg2);
document.body.appendChild(szoveg3);
document.body.appendChild(szoveg4);
document.body.appendChild(szoveg5);
document.body.appendChild(szoveg6);
document.body.appendChild(szoveg7);
document.body.appendChild(szoveg8);
document.body.appendChild(szoveg9);
document.body.appendChild(szoveg10);
document.body.appendChild(szoveg11);
document.body.appendChild(gomb);