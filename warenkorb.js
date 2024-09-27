document.addEventListener('DOMContentLoaded', function() {
//     Spricht die Elemente aus dem DOM an
    const minusBTN = document.getElementById('minusBTN')
    const plusBTN = document.getElementById('plusBTN')
    const counter = document.getElementById('counter')
    const preis = document.getElementById('preisPro')



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
    //    Funktion zum anpassen des preises

    });
});
