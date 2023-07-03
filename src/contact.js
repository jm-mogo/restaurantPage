
function createContact() {
    const div = document.createElement("div");
    
    div.innerHTML = "Hi this is the contact"

    return div
}

export default function loadContact() {
    return createContact()
}