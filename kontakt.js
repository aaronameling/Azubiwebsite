// ------ Funktion für den Dropdown Button ------ //

document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const buttonBox = document.querySelector('.button-box');

    function checkScreenSize() {
        if (window.innerWidth > 480) {
            buttonBox.style.display = 'flex';
            dropdownBtn.style.display = 'none';
            buttonBox.classList.remove('show');
        } else {
            buttonBox.style.display = 'none';
            dropdownBtn.style.display = 'block';
        }
    }

    dropdownBtn.addEventListener('click', function() {
        if (buttonBox.style.display === 'none' || buttonBox.style.display === '') {
            buttonBox.style.display = 'flex';
        } else {
            buttonBox.style.display = 'none';
        }
    });

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});

// ------ Funktion für den Submit Button ------ //

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Verhindert das automatische Absenden des Formulars

        const vornamen = document.getElementById('vornamenEingabe').value;
        const nachname = document.getElementById('nachnamenEingabe').value;
        const telefon = document.getElementById('telefonEingabe').value;
        const email = document.getElementById('emailEingabe').value;
        const anfrage = document.getElementById('anfragenEingabe').value;

        console.log("Vorname: " + vornamen);
        console.log("Nachname: " + nachname);
        console.log("E-Mail: " + email);
        console.log("Telefon: " + telefon);
        console.log("Nachricht: " + anfrage);
    })
});

