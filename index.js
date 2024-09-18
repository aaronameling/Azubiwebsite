document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const navContainer = document.querySelector('.nav-container');

    function checkScreenSize() {
        if (window.innerWidth > 580) {
            navContainer.style.display = 'flex';
            dropdownBtn.style.display = 'none';
            navContainer.classList.remove('show');
        } else {
            navContainer.style.display = 'none';
            dropdownBtn.style.display = 'block';
        }
    }

    dropdownBtn.addEventListener('click', function() {
        if (navContainer.style.display === 'none' || navContainer.style.display === '') {
            navContainer.style.display = 'flex';
        } else {
            navContainer.style.display = 'none';
        }
    });

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});




