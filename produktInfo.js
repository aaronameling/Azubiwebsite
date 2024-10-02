
// Überprüfe, ob das Dokument geladen ist, und füge alle Event-Listener hinzu
document.addEventListener('DOMContentLoaded', function() {
    // ----- Dropdown Button -----
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const headerNavButton = document.querySelector('.header-navButton');

    function checkScreenSize() {
        if (window.innerWidth > 660) {
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

    // ----- Mengen button -----

    // Wähle die Elemente aus dem DOM aus
    const minusBtn = document.getElementById('minusBTN');
    const plusBtn = document.getElementById('plusBTN');
    const counter = document.getElementById('counter');

    // Funktion zum Erhöhen des Zählers
    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(counter.textContent);
        counter.textContent = currentValue + 1;
    });

    // Funktion zum Verringern des Zählers
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(counter.textContent);
        if (currentValue > 0) { // Optional: Verhindert, dass der Zähler unter 0 fällt
            counter.textContent = currentValue - 1;
        }
    });

    //-------- PRODUKTINFORMATIONEN LADEN ----------
    const imgElement = document.querySelector('.produktImg'); // Bild-Element
    const nameElement = document.querySelector('.kaufboxH2'); // Produktname
    const infoElement = document.querySelector('.kaufboxH3'); // Produktinfo
    const descriptionElement = document.querySelector('.beschreibungP1'); // Hauptbeschreibung (p1)
    const featuresElement = document.querySelector('.ulP2'); // Merkmale Liste (p2)
    const endDescriptionElement = document.querySelector('.beschreibungP3'); // Endbeschreibung (p3)
    const warenkorbBTN = document.getElementById('warenkorbBTN'); // Warenkorb Button

    const ausgewaehltesProdukt = JSON.parse(localStorage.getItem('ausgewaehltesProdukt'));

    if (ausgewaehltesProdukt) {
        imgElement.src = ausgewaehltesProdukt.bild;
        nameElement.textContent = ausgewaehltesProdukt.name;
        infoElement.textContent = ausgewaehltesProdukt.preis.toFixed(2) + "€"; // **Preis korrekt anzeigen**

        const productId = ausgewaehltesProdukt.id;
        if (productDescriptions[productId]) {
            const product = productDescriptions[productId];

            descriptionElement.textContent = product.mainDescription;
            featuresElement.innerHTML = ''; // Liste leeren
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresElement.appendChild(li);
            });
            endDescriptionElement.textContent = product.endDescription;
        }

        warenkorbBTN.setAttribute('data-id', productId);
    } else {
        console.error("Keine Produktdaten im localStorage gefunden.");
    }

    // Warenkorb-Button Event-Listener
    warenkorbBTN.addEventListener('click', function(event) {
        event.preventDefault();

        localStorage.setItem('produktHinzugefuegt', 'true');
        window.location.href = "warenkorb.html";
    });
});








