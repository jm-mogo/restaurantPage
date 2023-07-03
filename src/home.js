import chef from "./assets/chef.jpg";

function createTitle(phrase) {
    const p = document.createElement("p");
    p.textContent = phrase;
    return p;
}

function createChefImg() {
    const img = document.createElement("img");
    img.classList.add("img-chef");
    img.setAttribute("src", chef);

    return img
}

function createHome() {
    const div = document.createElement("div");

    div.appendChild(createTitle("The best pizza you'll ever try"));
    div.appendChild(createTitle("Serving you since 1999"));
    div.appendChild(createChefImg())
    return div;
}

export default function loadPage() {
    return createHome();
}
