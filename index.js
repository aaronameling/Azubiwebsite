// document.addEventListener('DOMContentLoaded', function() {
//     const dropdownBtn = document.querySelector('.dropdown-btn');
//     const navContainer = document.querySelector('.nav-container');
//
//     function checkScreenSize() {
//         if (window.innerWidth > 580) {
//             navContainer.style.display = 'flex';
//             dropdownBtn.style.display = 'none';
//         } else {
//             navContainer.style.display = 'none';
//             dropdownBtn.style.display = 'block';
//         }
//     }
//
//     window.addEventListener('resize', checkScreenSize);
//     checkScreenSize();
//
//     dropdownBtn.addEventListener('click', function() {
//         navContainer.classList.toggle('show');
//     });
// });

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
        navContainer.classList.toggle('show');
    });

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});
