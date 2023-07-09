import homeLoad from "./home.js";
import menuLoad from "./menu.js";
import contactLoad from "./contact.js";

function createHeader() {
    let header = document.createElement("header");
    let title = document.createElement("h1");

    title.textContent = "La Pizzeria";
    title.classList.add("title");

    header.appendChild(title);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");

    nav.appendChild(createButton("home", homeLoad));
    nav.appendChild(createButton("menu", menuLoad));
    nav.appendChild(createButton("contact", contactLoad));

    return nav;
}

function createButton(name, page) {
    const button = document.createElement("button");

    button.textContent = name;
    name += "Load";
    button.classList.add("button-nav");
    button.addEventListener("click", () => {
        appendElementTodMain(page);
    });
    return button;
}

function createFooter() {
    const footer = document.createElement("footer");

    let p = document.createElement("p");
    p.textContent = "lolmike";

    footer.appendChild(p);

    return footer;
}

function createMain() {
    const main = document.createElement("div");
    main.classList.add("container");
    main.setAttribute("id", "main");

    return main;
}

function appendElementTodMain(page) {
    const main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(page());
}

export default function loadPage() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    appendElementTodMain(homeLoad);
}
