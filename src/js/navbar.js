// hide/show the menu when menu-responsive is available

const menu = document.getElementById('menu-responsive');
const btn = document.querySelector('button.icon');

btn.addEventListener('click', function() {
    if (menu.classList.contains('menu-show')) {
        menu.classList.remove('menu-show');
    } else {
        menu.classList.add('menu-show');
    }
});
