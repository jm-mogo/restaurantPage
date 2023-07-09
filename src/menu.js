import pizza from "./assets/pizza-order.png";

function createTitle(phrase) {
    const p = document.createElement("p");
    p.textContent = phrase;
    return p;
}

function createPizzaImg() {
    const img = document.createElement("img");
    img.classList.add("pizza-order-img");
    img.setAttribute("src", pizza);

    return img;
}

function createPizza(name) {
    const pizzaContainer = document.createElement("div");
    pizzaContainer.classList.add("pizza-container");

    pizzaContainer.appendChild(createTitle(name));
    pizzaContainer.appendChild(createTitle("18$"))
    pizzaContainer.appendChild(createPizzaImg())

    return pizzaContainer;
}

function createMenu() {
    const div = document.createElement("div");
    div.classList.add("menu-container")

    div.appendChild(createPizza("Margarita"));
    div.appendChild(createPizza("Napolitana"));
    div.appendChild(createPizza("Hawaiana"));
    div.appendChild(createPizza("Primavera"));
    div.appendChild(createPizza("Pomodoro"));
    div.appendChild(createPizza("Carne"));

    return div;
}

export default function loadMenu() {
    return createMenu();
}
