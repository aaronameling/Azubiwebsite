// ------ Definition des JSON-Objekts für die Produktbeschreibung

const productDescriptions = {

    "rayquaza-actionfigur": {
        "mainDescription": "Die Rayquaza Actionfigur stellt das legendäre Flug- und Drache-Pokémon in all seiner Pracht dar. Perfekt für Sammler, die nach einem außergewöhnlichen Stück suchen.",
        "features": [
            "Figur: Rayquaza",
            "Typ: Drache Flug",
            "Material: Hochwertiger Kunststoff",
            "Größe: 30 cm hoch",
            "Bewegliche Gliedmaßen",
            "Leuchtet im Dunkeln"
        ],
        "endDescription": "Rayquaza strahlt Macht und Anmut aus, ideal für die ultimative Pokémon-Sammlung."
    },

    "shiny-glurak-kuscheltier": {
        "mainDescription": "Das Shiny Glurak Kuscheltier ist eine seltene und besondere Version des beliebten Pokémon. Mit seinem einzigartigen Farbschema und der weichen Oberfläche ist es ein Muss für Sammler.",
        "features": [
            "Figur: Shiny Glurak",
            "Typ: Feuer Flug",
            "Material: Weicher Plüsch",
            "Größe: 35 cm hoch",
            "Einzigartige Shiny-Farbvariante",
            "Perfekt zum Kuscheln"
        ],
        "endDescription": "Shiny Glurak bringt eine seltene Schönheit in Ihre Sammlung. Ideal für alle, die etwas Einzigartiges suchen."
    }
};

// ----- 1. Produktdaten-Array definieren --------------------

const products = [

    {
        id: "shiny-glurak-kuscheltier",
        typ: "Feuer Flug",
        name: "Shiny Glurak Kuscheltier",
        preis: "19.99",
        info: "19,99€ (inkl.MwSt.)",
        imgSrc: "img/ShinyGlurak.png"
    },
    {
        id: "rayquaza-actionfigur",
        typ: "Drache Flug",
        name: "Rayquaza Actionfigur",
        preis: "49.99",
        info: "49,99€ (inkl.MwSt.)",
        imgSrc: "img/Rayquaza Actionfigur.png"
    }
];

// 2. Funktion zum Erstellen eines Produkt-Items

function createProductItem(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('produkt-item');
    productDiv.setAttribute('data-id', product.id);
    productDiv.setAttribute('data-preis', product.preis);
    productDiv.setAttribute('data-name', product.name);
    productDiv.setAttribute('data-info', product.info);
    productDiv.setAttribute('data-typ', product.typ)

    productDiv.innerHTML = `
        <img class="produkt-img" src="${product.imgSrc}" alt="${product.name} Produkt IMG">
        <div class="imgBox-underline"></div>
        <h2 class="produkt-name">${product.name}</h2>
        <span class="produkt-info-box">
            <p class="produkt-info">${product.info}</p>
            <a href="#" class="ansehen-button" onclick="saveProductDetails(event)">Produkt&nbsp;&nbsp;&nbsp;Ansehen</a>
        </span>
    `;
    return productDiv;
}

// --------- NEUE FUNKTION ----------

function saveProductDetails(event) {
    event.preventDefault();  // Verhindert das Standardverhalten des Links

    // Produktinformationen aus dem geklickten Element extrahieren
    const productId = event.target.getAttribute('data-id');

    // Überprüfen, ob die Produkt-ID vorhanden ist
    if (!productId) {
        console.error('Produkt-ID nicht gefunden.');
        return;
    }

    // Suche nach dem Produkt im products-Array
    const selectedProduct = products.find(product => product.id === productId);

    // Speichere die relevanten Produktdetails im localStorage
    if (selectedProduct) {
        localStorage.setItem('selectedProductId', selectedProduct.id);
        localStorage.setItem('selectedProductName', selectedProduct.name);
        localStorage.setItem('selectedProductInfo', selectedProduct.info);
        localStorage.setItem('selectedProductImg', selectedProduct.imgSrc);
    }

    // Weiterleitung zur Produkt-Detailseite
    window.location.href = 'produktInfo2.html';  // Navigiert zur produktInfo2.html
}



//---- FUNKTION FÜR DEN DROPDOWN BUTTON ----//

document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const navContainer = document.querySelector('.nav-container');

    function checkScreenSize() {
        if (window.innerWidth > 580) {
            navContainer.style.display = 'flex';
            dropdownBtn.style.display = 'none';
            navContainer.classList.remove('show');
        } else {
            navContainer.style.display = 'none';
            dropdownBtn.style.display = 'block';
        }
    }

    dropdownBtn.addEventListener('click', function() {
        if (navContainer.style.display === 'none' || navContainer.style.display === '') {
            navContainer.style.display = 'flex';
        } else {
            navContainer.style.display = 'none';
        }
    });

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});




