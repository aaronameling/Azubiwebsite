// ------- Funktion für den Dropdown Button

document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const headerNavButton = document.querySelector('.headerNav-button');

    function checkScreenSize() {
        if (window.innerWidth > 580) {
            headerNavButton.style.display = 'flex';
            dropdownBtn.style.display = 'none';
            headerNavButton.classList.remove('show');
        } else {
            headerNavButton.style.display = 'none';
            dropdownBtn.style.display = 'block';
        }
    }

    dropdownBtn.addEventListener('click', function() {
        if (headerNavButton.style.display === 'none' || headerNavButton.style.display === '') {
            headerNavButton.style.display = 'flex';
        } else {
            headerNavButton.style.display = 'none';
        }
    });

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});

// ------- Funktion für den Select ------

document.addEventListener("DOMContentLoaded", function() {
    const sortSelect = document.getElementById('sortieren');
    const produktContainer = document.querySelector('.produkt-container');
    const produktBoxen = Array.from(produktContainer.getElementsByClassName('produkt-boxen'));

    sortSelect.addEventListener('change', function() {
        const sortierenNach = this.value;

        if (sortierenNach === 'standart') {
            // Sammle alle Produkt-Items in einem Array
            let allItems = [];
            produktBoxen.forEach(box => {
                allItems = allItems.concat(Array.from(box.getElementsByClassName('produkt-item')));
            });

            // Sortiere die Items basierend auf dem ursprünglichen data-index
            allItems.sort((a, b) => {
                const indexA = parseInt(a.getAttribute('data-index'));
                const indexB = parseInt(b.getAttribute('data-index'));
                return indexA - indexB;
            });

            // Entferne die Items aus ihren Boxen, ohne die Boxen selbst zu entfernen
            allItems.forEach(item => item.parentNode.removeChild(item));

            // Füge die sortierten Items wieder in ihre ursprünglichen Boxen ein
            allItems.forEach((item, index) => {
                const boxIndex = Math.floor(index / Math.ceil(allItems.length / produktBoxen.length));
                produktBoxen[boxIndex].appendChild(item);
            });

            return;
        }

        // Sammle alle Produkt-Items in einem Array für die Preis-Sortierung
        let allItems = [];
        produktBoxen.forEach(box => {
            allItems = allItems.concat(Array.from(box.getElementsByClassName('produkt-item')));
        });

        // Sortiere die Items basierend auf dem Preis
        allItems.sort((a, b) => {
            const preisA = parseFloat(a.getAttribute('data-preis'));
            const preisB = parseFloat(b.getAttribute('data-preis'));

            if (sortierenNach === 'preis-hoch-niedrig') {
                return preisB - preisA; // Absteigend
            } else {
                return preisA - preisB; // Aufsteigend
            }
        });

        // Entferne die Items aus ihren Boxen, ohne die Boxen selbst zu entfernen
        allItems.forEach(item => item.parentNode.removeChild(item));

        // Füge die sortierten Items wieder in ihre ursprünglichen Boxen ein
        allItems.forEach((item, index) => {
            const boxIndex = Math.floor(index / Math.ceil(allItems.length / produktBoxen.length));
            produktBoxen[boxIndex].appendChild(item);
        });
    });
});

// ------ Definition des JSON-Objekts für die Produktbeschreibung

const productDescriptions = {
    "mewtwo-amiibo": {
        "mainDescription": "Tauchen Sie ein in die Welt der Pokémon mit dieser beeindruckenden Mewtwo Amiibo-Figur. Diese exklusive Figur, die Mewtwo in seiner ikonischen Pose zeigt, ist ein absolutes Highlight für jeden Pokémon-Fan und Sammler. Mit einer Höhe von 20 cm hebt sich diese Figur durch ihre Detailtreue und Größe deutlich von herkömmlichen Amiibos ab.",
        "features": [
            "Figur: Mewtwo (Amiibo)",
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
            "Material: Weicher Plüsch",
            "Größe: 35 cm hoch",
            "Einzigartige Shiny-Farbvariante",
            "Perfekt zum Kuscheln"
        ],
        "endDescription": "Shiny Glurak bringt eine seltene Schönheit in Ihre Sammlung. Ideal für alle, die etwas Einzigartiges suchen."
    }
};


// ------- Funktion zur handhabung der Produktdetails

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
    const productId = productItem.getAttribute('data-id'); // ID hinzufügen

    if (!imgSrc || !productName || !productInfo || !productId) {
        console.error('Produktdetails fehlen.');
        return;
    }

    localStorage.setItem('selectedProductImg', imgSrc);
    localStorage.setItem('selectedProductName', productName);
    localStorage.setItem('selectedProductInfo', productInfo);
    localStorage.setItem('selectedProductId', productId); // Speichern der ID

    window.location.href = 'produktInfo2.html';  // Weiterleitung zur produktInfo2.html
}


