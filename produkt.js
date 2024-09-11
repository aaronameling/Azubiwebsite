// ------ Definition des JSON-Objekts für die Produktbeschreibung

const productDescriptions = {
    "mewtwo-amiibo": {
        "mainDescription": "Tauchen Sie ein in die Welt der Pokémon mit dieser beeindruckenden Mewtwo Amiibo-Figur. Diese exklusive Figur, die Mewtwo in seiner ikonischen Pose zeigt, ist ein absolutes Highlight für jeden Pokémon-Fan und Sammler. Mit einer Höhe von 20 cm hebt sich diese Figur durch ihre Detailtreue und Größe deutlich von herkömmlichen Amiibos ab.",
        "features": [
            "Figur: Mewtwo (Amiibo)",
            "Typ: Psycho",
            "Material: Hochwertiger Kunststoff",
            "Größe: 20 cm hoch",
            "Funktionalität: Kompatibel mit einer Vielzahl von Nintendo-Spielen, einschließlich Super Smash Bros., wo Mewtwo als spielbarer Charakter verfügbar ist.",
            "Besonderheiten: Scannen Sie die Figur, um exklusive In-Game-Features freizuschalten, wie besondere Kostüme, Fähigkeiten oder andere einzigartige Inhalte."
        ],
        "endDescription": "Diese Mewtwo Amiibo-Figur ist ein beeindruckendes Sammlerstück und eignet sich perfekt, um Ihre Spielumgebung oder Ihr Regal zu verschönern. Mit seiner imposanten Größe von 20 cm bringt Mewtwo eine unvergleichliche Präsenz in Ihre Pokémon-Sammlung. Lassen Sie sich von der mystischen Aura und der mächtigen Erscheinung dieses legendären Pokémon begeistern."
    },
    "dragoran-figur": {
        "mainDescription": "Erleben Sie die Kraft von Dragoran mit dieser hochwertigen Actionfigur. Die Figur zeigt Dragoran in einer beeindruckenden Kampfpause, ideal für Sammler und Pokémon-Enthusiasten.",
        "features": [
            "Figur: Dragoran",
            "Typ: Drache Flug",
            "Material: Hochwertiger Kunststoff",
            "Größe: 25 cm hoch",
            "Bewegliche Gliedmaßen",
            "Detailgetreue Darstellung"
        ],
        "endDescription": "Die Dragoran Figur bringt Stärke und Mut in Ihre Sammlung. Ein Muss für jeden Pokémon-Fan."
    },
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
    "dragonir-kuscheltier": {
        "mainDescription": "Das Dragonir Kuscheltier ist der perfekte Begleiter für kleine und große Pokémon-Fans. Mit weichem Plüsch und liebevollen Details wird Dragonir schnell zum Lieblingsspielzeug.",
        "features": [
            "Figur: Dragonir",
            "Typ: Drache",
            "Material: Weicher Plüsch",
            "Größe: 30 cm lang",
            "Besonders kuschelig",
            "Ideal zum Schlafen und Spielen"
        ],
        "endDescription": "Dragonir bringt die Magie der Pokémon-Welt in Ihr Zuhause. Ein treuer Freund zum Kuscheln und Träumen."
    },
    "dratini-kuscheltier": {
        "mainDescription": "Das Dratini Kuscheltier ist klein, süß und unglaublich weich. Es lädt ein zum Kuscheln und Spielen und ist das perfekte Geschenk für jeden Pokémon-Fan.",
        "features": [
            "Figur: Dratini",
            "Typ: Drache",
            "Material: Weicher Plüsch",
            "Größe: 20 cm lang",
            "Detailgetreu gestaltet",
            "Ideal für unterwegs"
        ],
        "endDescription": "Dratini bringt Freude und Abenteuer ins Kinderzimmer. Ein niedlicher Begleiter für alle kleinen Pokémon-Trainer."
    },
    "superball": {
        "mainDescription": "Der Superball ist ein unverzichtbares Zubehör für jeden Pokémon-Trainer. Mit seinem auffälligen Design und den verbesserten Fangmöglichkeiten ist er ideal für schwierige Pokémon.",
        "features": [
            "Modell: Superball",
            "Typ: Pokébälle",
            "Material: Hochwertiger Kunststoff",
            "Größe: 10 cm Durchmesser",
            "Leuchtet im Dunkeln",
            "Robust und langlebig"
        ],
        "endDescription": "Der Superball ist ein klassisches Accessoire für die Pokémon-Jagd. Perfekt für spannende Abenteuer und das Fangen seltener Pokémon."
    },
    "mew-kuscheltier": {
        "mainDescription": "Das Mew Kuscheltier ist klein, zart und von hoher Qualität. Mit seiner sanften Erscheinung und dem niedlichen Lächeln wird es schnell zum Favoriten in jeder Sammlung.",
        "features": [
            "Figur: Mew",
            "Typ: Psycho",
            "Material: Weicher Plüsch",
            "Größe: 15 cm hoch",
            "Leicht und handlich",
            "Ideal für Fans jeden Alters"
        ],
        "endDescription": "Mew bringt Freude und Zärtlichkeit. Ein liebevolles Geschenk für alle, die die magische Welt der Pokémon lieben."
    },
    "lucario-actionfigur": {
        "mainDescription": "Die Lucario Actionfigur zeigt das ikonische Pokémon in seiner dynamischen Kampfpose. Ideal für Fans, die die Stärke und den Mut von Lucario schätzen.",
        "features": [
            "Figur: Lucario",
            "Typ: Kampf Stahl",
            "Material: Hochwertiger Kunststoff",
            "Größe: 18 cm hoch",
            "Bewegliche Arme und Beine",
            "Detailgetreue Gestaltung"
        ],
        "endDescription": "Lucario ist ein Symbol für Stärke und Gerechtigkeit. Diese Figur ist eine großartige Ergänzung für jede Pokémon-Sammlung."
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
        id: "dragoran-figur",
        typ: "Drache Flug",
        name: "Dragoran Actionfigur",
        preis: "39.98",
        info: "39,98€ (inkl.MwSt.)",
        imgSrc: "img/Dragoran Actionfigur.png"
    },
    {
        id: "dragonir-kuscheltier",
        typ: "Drache",
        name: "Dragonir Kuscheltier",
        preis: "17.99",
        info: "17,99€ (inkl.MwSt.)",
        imgSrc: "img/Dragonir Kuscheltier.png"
    },
    {
        id: "dratini-kuscheltier",
        typ: "Drache",
        name: "Dratini Kuscheltier",
        preis: "16.99",
        info: "16,99€ (inkl.MwSt.)",
        imgSrc: "img/Dratini Kuscheltier.png"
    },
    {
        id: "superball",
        typ: "Pokebälle",
        name: "Superball",
        preis: "9.99",
        info: "9,99€ (inkl.MwSt.)",
        imgSrc: "img/Superball.png"
    },
    {
        id: "mewtwo-amiibo",
        typ: "Psycho",
        name: "Mewtwo Actionfigur",
        preis: "39.99",
        info: "39,99€ (inkl.MwSt.)",
        imgSrc: "img/Mewtwo Actionfigur.png"
    },
    {
        id: "mew-kuscheltier",
        typ: "Psycho",
        name: "Mew Kuscheltier",
        preis: "16.98",
        info: "16,98€ (inkl.MwSt.)",
        imgSrc: "img/Mew Kuscheltier.png"
    },
    {
        id: "lucario-actionfigur",
        typ: "Kampf Stahl",
        name: "Lucario Actionfigur",
        preis: "37.99",
        info: "37,99€ (inkl.MwSt.)",
        imgSrc: "img/Lucario Actionfigur.png"
    },
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

// 3. Funktion zum Hinzufügen der Produkte zum DOM

function displayProducts() {
    const productContainer = document.getElementById('produkt-boxen');
    products.forEach(product => {
        const productItem = createProductItem(product);
        productContainer.appendChild(productItem);
    });
}

// 4. Initialisierung der Anzeige

document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    checkScreenSize(); // Für den Dropdown Button


// ----- Suchfunktion -------------------------

    function searchProducts() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
        console.log('Search Input:', searchInput); // Debugging: Überprüfe die Suchanfrage

        if (searchInput === '') {
            console.log('Suchfeld ist leer. Zeige alle Produkte an.');
            displayProducts(); // Zeigt alle Produkte an, wenn das Suchfeld leer ist
            return;
        }

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchInput)
        );

        console.log('Filtered Products:', filteredProducts); // Debugging: Überprüfe gefilterte Produkte

        // Zeige nur gefilterte Produkte an
        const productContainer = document.getElementById('produkt-boxen');
        productContainer.innerHTML = ''; // Leert die Liste, um alle alten Produkte zu entfernen

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productItem = createProductItem(product);
                productContainer.appendChild(productItem);
            });
        } else {
            console.log('Keine Produkte gefunden.'); // Debugging: Ausgabe, wenn keine Produkte gefunden wurden
            productContainer.innerHTML = '<p>Keine Produkte gefunden.</p>'; // Anzeige, wenn keine Produkte gefunden wurden
        }
    }

// Event Listener für die Suche
    document.getElementById('searchButton').addEventListener('click', searchProducts);
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') { // Suche auch bei Enter-Taste
            searchProducts();
        }
    });
});


// ------- Funktion für den Dropdown Button ----------------

function checkScreenSize() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const headerNavButton = document.querySelector('.headerNav-button');

    if (window.innerWidth > 580) {
        headerNavButton.style.display = 'flex';
        dropdownBtn.style.display = 'none';
        headerNavButton.classList.remove('show');
    } else {
        headerNavButton.style.display = 'none';
        dropdownBtn.style.display = 'block';
    }

    dropdownBtn.addEventListener('click', function() {
        if (headerNavButton.style.display === 'none' || headerNavButton.style.display === '') {
            headerNavButton.style.display = 'flex';
        } else {
            headerNavButton.style.display = 'none';
        }
    });

    window.addEventListener('resize', checkScreenSize);
}



// ------- Funktion für den Select (Sortierung) ----------------------

document.addEventListener("DOMContentLoaded", function() {
    const sortSelect = document.getElementById('sortieren');
    const produktBoxen = document.querySelector('.produkt-boxen');

    sortSelect.addEventListener('change', function() {
        const sortierenNach = this.value;
        let filteredProducts = [...products]; // Kopie des Originalproduktarrays erstellen

        // Überprüfen, ob nach Typ sortiert werden soll
        if (sortierenNach !== 'standart' && sortierenNach !== 'preis-hoch-niedrig' && sortierenNach !== 'preis-niedrig-hoch') {
            filteredProducts = products.filter(product => product.typ.includes(sortierenNach));
        }

        // Sortiere die Produkte basierend auf dem Preis oder dem ursprünglichen Index
        if (sortierenNach === 'preis-hoch-niedrig') {
            filteredProducts.sort((a, b) => parseFloat(b.preis) - parseFloat(a.preis));
        } else if (sortierenNach === 'preis-niedrig-hoch') {
            filteredProducts.sort((a, b) => parseFloat(a.preis) - parseFloat(b.preis));
        }

        // Entferne alle aktuellen Produkt-Items und füge die gefilterten/sortierten Produkte wieder hinzu
        produktBoxen.innerHTML = ''; // Entferne alle aktuellen Produkt-Items
        filteredProducts.forEach(product => {
            const productItem = createProductItem(product);
            produktBoxen.appendChild(productItem);
        });
    });
});


// ------- Funktion zur Handhabung der Produktdetails -------------

function saveProductDetails(event) {
    event.preventDefault();  // Verhindert das Standardverhalten des Links

    const productItem = event.target.closest('.produkt-item');

    if (!productItem) {
        console.error('Produkt-Element nicht gefunden.');
        return;
    }

    const imgElement = productItem.querySelector('.produkt-img');
    if (!imgElement) {
        console.error('Bild-Element nicht gefunden.');
        return;
    }

    const imgSrc = imgElement.src;
    const productName = productItem.getAttribute('data-name');
    const productInfo = productItem.getAttribute('data-info');
    const productId = productItem.getAttribute('data-id');

    if (!imgSrc || !productName || !productInfo || !productId) {
        console.error('Produktdetails fehlen.');
        return;
    }

    localStorage.setItem('selectedProductImg', imgSrc);
    localStorage.setItem('selectedProductName', productName);
    localStorage.setItem('selectedProductInfo', productInfo);
    localStorage.setItem('selectedProductId', productId);

    window.location.href = 'produktInfo2.html';  // Weiterleitung zur produktInfo2.html
}


