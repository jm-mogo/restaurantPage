import map from "./assets/map.png";

function createTitle(phrase) {
    const p = document.createElement("p");
    p.textContent = phrase;
    return p;
}

function createMapImg() {
    const img = document.createElement("img");
    img.classList.add("img-map");
    img.setAttribute("src", map);

    return img;
}

function createContact() {
    const div = document.createElement("div");

    div.appendChild(createTitle("📞 +58 123-456789"));
    div.appendChild(createTitle("🏠 Happy View, Caracas City, Venezuela"));
    div.appendChild(createMapImg());

    return div;
}

export default function loadContact() {
    return createContact();
}
