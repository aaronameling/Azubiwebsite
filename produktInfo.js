// ----- Dropdown Button -----

document.addEventListener('DOMContentLoaded', function() {
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
});

// ----- Mengen button -----

document.addEventListener("DOMContentLoaded", function() {
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
});

//-------- Funktion zum auslesen der URL Parameter

document.addEventListener('DOMContentLoaded', function() {
    const imgElement = document.querySelector('.produktImg'); // Bild-Element
    const nameElement = document.querySelector('.kaufboxH2'); // Produktname
    const infoElement = document.querySelector('.kaufboxH3'); // Produktinfo
    const descriptionElement = document.querySelector('.beschreibungP1'); // Hauptbeschreibung (p1)
    const featuresElement = document.querySelector('.ulP2'); // Merkmale Liste (p2)
    const endDescriptionElement = document.querySelector('.beschreibungP3'); // Endbeschreibung (p3)

    const imgSrc = localStorage.getItem('selectedProductImg');
    const productName = localStorage.getItem('selectedProductName');
    const productInfo = localStorage.getItem('selectedProductInfo');
    const productId = localStorage.getItem('selectedProductId'); // ID für die spezifische Beschreibung

    // // Debugging-Ausgaben
    // console.log('Produkt-ID aus localStorage:', productId); // Gibt die Produkt-ID aus
    // console.log('Produktbeschreibung Objekt:', productDescriptions[productId]); // Gibt die Beschreibung für die Produkt-ID aus

    // Setzen des Bildes, Namens und der Info
    if (imgSrc) {
        imgElement.src = imgSrc;
    }

    if (productName) {
        nameElement.textContent = productName;
    }

    if (productInfo) {
        infoElement.textContent = productInfo;
    }

    // Dynamisches Einfügen der Produktbeschreibungen und Merkmale
    if (productId && productDescriptions[productId]) {
        const product = productDescriptions[productId];

        // Hauptbeschreibung (p1)
        descriptionElement.textContent = product.mainDescription;

        // Merkmale Liste (p2 und ul)
        featuresElement.innerHTML = ''; // Liste leeren, um doppelte Einträge zu vermeiden
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresElement.appendChild(li);
        });

        // Endbeschreibung (p3)
        endDescriptionElement.textContent = product.endDescription;
    }
});

