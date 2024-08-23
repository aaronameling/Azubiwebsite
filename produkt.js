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

// ------- Funktion für die Select

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
