function initialize() {
    const headerMenuIcon = document.getElementById("header-menu-icon");
    headerMenuIcon.addEventListener("click", showHideMenu);

    const sideMenuIcon = document.getElementById("side-menu-icon");
    sideMenuIcon.addEventListener("click", hideSideMenu)
}

function showHideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.style.visibility = "visible";
}

function hideSideMenu() {
    const sideMenuIcon = document.getElementById("side-menu");
    sideMenuIcon.style.visibility = "hidden";
}

initialize();