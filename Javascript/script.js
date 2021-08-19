function click() {
    const menu = document.getElementById("menu-btn");
    if (menu.style.visibility = "hidden") {
        menu.style.visibility = "visible"
        console.log("Menu is visible");
    } else {
        menu.style.visibility = "hidden"
        console.log("Menu is hidden!");
    }
}
