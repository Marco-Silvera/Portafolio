// Deslizamiento suave

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Menu responsive
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
    toggleMenuButtonVisibility(false);
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
    toggleMenuButtonVisibility(true);
}

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const currentDisplay = window.getComputedStyle(sidebar).getPropertyValue('display');

    if (currentDisplay === 'none') {
        sidebar.style.display = 'flex';
        toggleMenuButtonVisibility(false);
    } else {
        sidebar.style.display = 'none';
        toggleMenuButtonVisibility(true);
    }
}

function toggleMenuButtonVisibility(show) {
    const menuButton = document.getElementById("menuButton");
    menuButton.style.display = show ? 'block' : 'none';
}