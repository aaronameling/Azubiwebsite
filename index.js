document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const navContainer = document.querySelector('.nav-container');

    dropdownBtn.addEventListener('click', function() {
        if (navContainer.style.display === 'flex') {
            navContainer.style.display = 'none';
        } else {
            navContainer.style.display = 'flex';
        }
    });
});