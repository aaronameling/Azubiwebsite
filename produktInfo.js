
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
        currentValue += 1;  // Erhöhe den Zähler um 1
        counter.textContent = currentValue;  // Setze den neuen Wert im Counter an

        // Aktualisiere die Menge im ausgewählten Produkt
        if (ausgewaehltesProdukt) {
            ausgewaehltesProdukt.menge = currentValue;
            localStorage.setItem('ausgewaehltesProdukt', JSON.stringify(ausgewaehltesProdukt));  // Speichere aktualisierte Menge
        }
    });

    // Funktion zum Verringern des Zählers
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(counter.textContent);
        if (currentValue > 1) {  // Verhindere, dass der Zähler unter 1 fällt
            currentValue -= 1;  // Verringere den Zähler um 1
            counter.textContent = currentValue;

            // Aktualisiere die Menge im ausgewählten Produkt
            if (ausgewaehltesProdukt) {
                ausgewaehltesProdukt.menge = currentValue;
                localStorage.setItem('ausgewaehltesProdukt', JSON.stringify(ausgewaehltesProdukt));  // Speichere aktualisierte Menge
            }
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

        // Aktuelle Zahl aus dem Counter übernehmen und speichern
        const currentMenge = parseInt(counter.textContent);  // Menge aus Counter übernehmen

        // Hinzufügen der Menge zum Produktobjekt
        ausgewaehltesProdukt.menge = currentMenge;  // Menge zum Produktobjekt hinzufügen

        console.log("Produkt mit Menge zum Warenkorb hinzugefügt:", ausgewaehltesProdukt);

        // Produkt im localStorage aktualisieren mit der richtigen Menge
        localStorage.setItem('ausgewaehltesProdukt', JSON.stringify(ausgewaehltesProdukt));  // Produkt mit aktualisierter Menge speichern

        localStorage.setItem('produktHinzugefuegt', 'true');
        window.location.href = "warenkorb.html";
    });
});








