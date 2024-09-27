// -------------------- FUNKTION ZUM GENERIEREN DER PRODUKT ELEMENTS --------------------------

// Produktdaten Array definieren
const produkt = {
    name: "Rayquaza Actionfigur",
    preis: 49.99,
    bild: "img/Rayquaza Actionfigur.png"
};

// -------------------- FUNKTION ZUR GENERIERUNG DES PRODUKTS --------------------------

// Funktion zur Generierung des gesamten HTML-Blocks für das `produkte`-Div
function generiereProduktHTML(produkt) {
    return `
    <div class="produkte">
        <div class="produktInfo">
            <div class="infoIMG">
                <img class="rayquazaIMG" src="${produkt.bild}" alt="Bild">
            </div>
            <div class="infoTEXT">
                <div class="infoH2">${produkt.name}</div>
                <div class="infoP">€${produkt.preis.toFixed(2)}</div>
            </div>
        </div>
    
        <div class="produktAnzahl">
            <div class="anzahlButton">
                <div class="minusBTN">
                    <button id="minusBTN">-</button>
                </div>
                <p id="counter">1</p>
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
            <div id="preisPro" class="preis">${produkt.preis.toFixed(2)}</div>
        </div>
    </div>
    `;
}

// Funktion, um das generierte HTML in den Platzhalter einzufügen
function ladeProduktInContainer() {
    // Hole den Container mit der Klasse "produkte0"
    const container = document.querySelector(".produkte0");

    // Generiere das HTML für das Produkt und füge es in den Container ein
    container.innerHTML = generiereProduktHTML(produkt);

    // Event-Listener nach dem Laden des Produkts initialisieren
    initialisiereEventListener();

}

// -------------------- FUNKTION ZUM LADEN DES PRODUKTS IN DEN CONTAINER --------------------------

function ladeProduktInContainer() {
    // Hole den Container mit der Klasse "produkte0"
    const container = document.querySelector(".produkte0");

    // Überprüfe, ob der Container gefunden wurde
    if (!container) {
        console.error("Das Platzhalter-Div mit der Klasse 'produkte0' wurde nicht gefunden.");
        return;
    }

    // Generiere das HTML für das Produkt und füge es in den Container ein
    container.innerHTML = generiereProduktHTML(produkt);

    // Event-Listener nach dem Laden des Produkts initialisieren
    initialisiereEventListener();
}



// -------------------- FUNKTION ZUM ERHÖHEN/VERRINGERN DER PRODUKTE + ANPASSUNG DES PREISES --------------------------

function initialisiereEventListener() {
    //     Spricht die Elemente aus dem DOM an
    const minusBTN = document.getElementById('minusBTN')
    const plusBTN = document.getElementById('plusBTN')
    const counter = document.getElementById('counter')
    const preis = document.getElementById('preisPro')

    // Überprüfen, ob die Elemente existieren, bevor Listener hinzugefügt werden
    if (!minusBTN || !plusBTN || !counter || !preis) {
        console.error("Ein oder mehrere benötigte Elemente wurden nicht gefunden.");
        return;
    }

    //     Funktion zum erhöhen des Zählers
    plusBTN.addEventListener('click', function() {
        let currentValue = parseInt(counter.textContent)
        let currentCost = parseFloat(preis.textContent)
        counter.textContent = currentValue + 1;
        preis.textContent =  (currentCost + 49.99).toFixed(2);
    });
    //    Funktion zum verringern des Zählers
    minusBTN.addEventListener('click', function() {
        let currentValue = parseInt(counter.textContent);
        let currentCost = parseFloat(preis.textContent)
        if (currentValue > 1) {
            counter.textContent = currentValue - 1;
            preis.textContent =  (currentCost - 49.99).toFixed(2);
        }
    });
}

// -------------------- PRODUKT LADEN --------------------------

// Führe diese Funktion aus, nachdem die Seite vollständig geladen wurde
document.addEventListener('DOMContentLoaded', ladeProduktInContainer);

