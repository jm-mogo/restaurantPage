
function createMenu() {
    const div = document.createElement("div");
    
    div.innerHTML = "Hi this is the menu"

    return div
}

export default function loadMenu() {
    return createMenu()
}