// ------ Funktion für den Dropdown Button ------ //

document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const buttonBox = document.querySelector('.button-box');

    function checkScreenSize() {
        if (window.innerWidth > 530) {
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