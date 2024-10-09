// -------------------- FUNKTION ZUM GENERIEREN DER PRODUKT ELEMENTS --------------------------

// Produktdaten Array definieren
const produkt =[
    {
        id: 1,
        name: "Rayquaza Actionfigur",
        preis: 49.99,
        bild: "img/Rayquaza Actionfigur.png"
    },
    {
        id: 2,
        name: "Mewtwo Actionfigur",
        preis: 39.99,
        bild: "img/Mewtwo Actionfigur.png"
    },
    {
        id: 3,
        name: "Lucario Actionfigur",
        preis: 37.99,
        bild: "img/Lucario Actionfigur.png"
    },
    {
        id: 4,
        name: "Dragoran Actionfigur",
        preis: 39.98,
        bild: "img/Dragoran Actionfigur.png"
    },
    {
        id: 5,
        name: "Dragonir Kuscheltier",
        preis: 17.99,
        bild: "img/Dragonir Kuscheltier.png"
    },
    {
        id: 6,
        name: "Dratini Kuscheltier",
        preis: 16.99,
        bild: "img/Dratini Kuscheltier.png"
    },
    {
        id: 7,
        name: "Shiny Glurak Kuscheltier",
        preis: 19.99,
        bild: "img/Shiny Glurak Kuscheltier.png"
    },
    {
        id: 8,
        name: "Mew Kuscheltier",
        preis: 16.98,
        bild: "img/Mew Kuscheltier.png"
    },
    {
        id: 9,
        name: "Superball",
        preis: 9.99,
        bild: "img/Superball.png"
    },
];

// -------------------- FUNKTION ZUR GENERIERUNG DES PRODUKTS --------------------------

// Funktion zur Generierung des gesamten HTML-Blocks für das `produkte`-Div
function generiereProduktHTML(produkt) {
    if (!produkt || typeof produkt.preis === 'undefined') {
        console.error("Produktdaten fehlen oder Preis ist undefined:", produkt);
        return `<div>Fehler beim Laden des Produkts.</div>`;
    }

    return `
    <div class="produkte">
        <div class="produktInfo">
            <div class="infoIMG">
                <img class="rayquazaIMG" src="${produkt.bild}" alt="Bild">
            </div>
            <div class="infoTEXT">
                <div class="infoH2">${produkt.name}</div>
                <div class="infoP">€${produkt.preis.toFixed(2)}<p class="MwSt">(inkl.MwSt.)</p></div>
            </div>
        </div>
    
        <div class="produktAnzahl">
       
            <div class="anzahlButton">
                <div class="minusBTN">
                    <button id="minusBTN">-</button>
                </div>
                <p id="counter">${produkt.menge}</p>
                <div class="plusBTN">
                    <button id="plusBTN">+</button>
                </div>
            </div>
    
            <div class="müllEimer">
                <button id="trashCan">
                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 -960 960 960" width="3em" fill="#234412">
                        <path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0
                        24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/>
                    </svg>
                </button>
            </div>
        
        </div>
    
        <div class="produktGesamtsumme">
            <div id="preisPro" class="preis" data-initial-price=${parseFloat(produkt.preis).toFixed(2)}>€ ${parseFloat(produkt.preis * produkt.menge).toFixed(2)}</div>
        </div>
    </div>
    `;
}

// -------------------- FUNKTION ZUR SPEICHERUNG DES WARENKORBS --------------------------
// Diese Funktion speichert alle aktuellen Produkte im `produkte0`-Container in den `localStorage`
function speichereWarenkorb() {
    const container = document.getElementById('produkte0');
    const produktElemente = container.querySelectorAll('.produkte');

    // Leeres Array, um die aktuellen Produkte zu speichern
    const warenkorb = [];

    // Schleife durch alle Produkt-Elemente im `produkte0`-Container
    produktElemente.forEach(produktElement => {
        const bild = produktElement.querySelector('img').src;
        const name = produktElement.querySelector('.infoH2').textContent;
        const preis = parseFloat(produktElement.querySelector('.preis').getAttribute('data-initial-price'));
        const menge = parseInt(produktElement.querySelector('#counter').textContent);

        // Produktdaten als Objekt speichern
        const produktObjekt = { bild, name, preis, menge };
        warenkorb.push(produktObjekt);
    });

    // Speichere das Array mit allen Produkten im `localStorage`
    localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
}

// -------------------- FUNKTION ZUR BERECHNUNG DER GESAMTSUMME --------------------------
function berechneGesamtsumme() {
    const summeElement = document.querySelector('.summe');
    if (!summeElement) {
        console.error("Das Element mit der Klasse 'summe' wurde nicht gefunden.");
        return;
    }

    const preisElemente = document.querySelectorAll('.preis');
    let gesamtSumme = 0;

    // Summe aller Produkte berechnen
    preisElemente.forEach(preisElement => {
        const preisWert = parseFloat(preisElement.textContent.replace(/[^\d.-]/g, ''));
        if (!isNaN(preisWert)) {
            gesamtSumme += preisWert;
        } else {
            console.error("Ungültiger Preiswert:", preisElement.textContent);
        }
    });

    // Gesamtsumme in die HTML-Elemente einsetzen
    summeElement.textContent = `€${gesamtSumme.toFixed(2)} EURO`;

    // Konsolenausgabe zur Überprüfung
    console.log("Gesamtsumme berechnet:", gesamtSumme);
}


// -------------------- FUNKTION ZUM LADEN DES WARENKORBS AUS DEM LOCALSTORAGE --------------------------
// Lädt den Warenkorb aus dem `localStorage` und zeigt ihn im `produkte0`-Container an
function ladeProdukteAusWarenkorb() {
    const container = document.getElementById("produkte0");
    container.innerHTML = "";  // Leere den Container zuerst

    const warenkorb = JSON.parse(localStorage.getItem('warenkorb')) || [];

    // Überprüfe, ob der Warenkorb leer ist
    if (warenkorb.length === 0) {
        console.log("Warenkorb ist leer.");
        container.innerHTML = "<p>Ihr Warenkorb ist derzeit leer.</p>";
        return;
    }

    // Generiere HTML für jedes Produkt im Warenkorb und füge es dem Container hinzu
    warenkorb.forEach(produkt => {
        const produktHTML = generiereProduktHTML(produkt);
        container.innerHTML += produktHTML;
    });

    // Initialisiere die Event-Listener für jedes Produkt
    initialisiereEventListener();
    berechneGesamtsumme();
}

// -------------------- FUNKTION ZUM LADEN DES PRODUKTS IN DEN CONTAINER --------------------------

function ladeProduktInContainer() {
    const container = document.getElementById("produkte0");

    // Überprüfe, ob der Artikel im localStorage als hinzugefügt markiert ist
    const produktHinzugefuegt = localStorage.getItem('produktHinzugefuegt');
    const ausgewaehltesProdukt = JSON.parse(localStorage.getItem('ausgewaehltesProdukt'));

    // Lade den aktuellen Warenkorb
    const warenkorb = JSON.parse(localStorage.getItem('warenkorb')) || [];

    // Falls das Produkt als hinzugefügt markiert ist und nicht bereits im Warenkorb existiert
    if (produktHinzugefuegt === 'true' && ausgewaehltesProdukt) {
        // Überprüfe, ob das Produkt bereits im Warenkorb ist
        const produktExistiert = warenkorb.find(p => p.name === ausgewaehltesProdukt.name);

        if (!produktExistiert) {
            // Produkt zum Warenkorb hinzufügen und im LocalStorage speichern
            ausgewaehltesProdukt.menge = 1;
            warenkorb.push(ausgewaehltesProdukt);
            localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
        }

        // HTML neu generieren und anzeigen
        ladeProdukteAusWarenkorb();
        console.log("Neues Produkt hinzugefügt.");
    } else {
        console.log("Kein neues Produkt ausgewählt.");
    }
}  //...

// -------------------- FUNKTION ZUM ERHÖHEN/VERRINGERN DER PRODUKTE + ANPASSUNG DES PREISES --------------------------
function initialisiereEventListener() {
    // Hole alle relevanten Elemente aus dem DOM
    const minusBTNs = document.querySelectorAll('.minusBTN');
    const plusBTNs = document.querySelectorAll('.plusBTN');
    const counterElements = document.querySelectorAll('#counter');
    const preisElemente = document.querySelectorAll('.preis');
    const trashCans = document.querySelectorAll('#trashCan');

    // Überprüfen, ob die Elemente existieren, bevor Listener hinzugefügt werden
    if (minusBTNs.length === 0 || plusBTNs.length === 0 || counterElements.length === 0 || preisElemente.length === 0) {
        console.error("Ein oder mehrere benötigte Elemente wurden nicht gefunden.");
        return;
    }

    // Event-Listener für das Erhöhen der Menge
    plusBTNs.forEach((plusBTN, index) => {
        plusBTN.addEventListener('click', function() {
            let currentValue = parseInt(counterElements[index].textContent);
            currentValue += 1;
            counterElements[index].textContent = currentValue;
            preisElemente[index].textContent = `€ ${(parseFloat(preisElemente[index].getAttribute('data-initial-price')) * currentValue).toFixed(2)}`;

            // Speichere das hinzugefügte Produkt im Warenkorb
            speichereWarenkorb();
            berechneGesamtsumme();
        });
    });

    // Event-Listener für das Verringern der Menge
    minusBTNs.forEach((minusBTN, index) => {
        minusBTN.addEventListener('click', function() {
            let currentValue = parseInt(counterElements[index].textContent);
            if (currentValue > 1) {
                currentValue -= 1;
                counterElements[index].textContent = currentValue;
                preisElemente[index].textContent = `€ ${(parseFloat(preisElemente[index].getAttribute('data-initial-price')) * currentValue).toFixed(2)}`;

                // Speichere das hinzugefügte Produkt im Warenkorb
                speichereWarenkorb();
                berechneGesamtsumme();
            }
        });
    });

    // Event-Listener für das Entfernen eines Produkts
    trashCans.forEach((trashCan, index) => {
        trashCan.addEventListener('click', function() {
            counterElements[index].closest('.produkte').remove();
            // Warenkorb nach Änderung neu speichern
            speichereWarenkorb();
            berechneGesamtsumme();
            console.log("Das Produkt wurde aus dem Warenkorb entfernt.");
        });
    });
}

// -------------------- PRODUKT LADEN --------------------------

// Führe diese Funktion aus, nachdem die Seite vollständig geladen wurde
document.addEventListener('DOMContentLoaded', () => {
    ladeProduktInContainer();    // Lade das neu ausgewählte Produkt in den Warenkorb
    ladeProdukteAusWarenkorb();  // Lade vorhandene Produkte aus dem localStorage

});

// localStorage.removeItem('warenkorb');



