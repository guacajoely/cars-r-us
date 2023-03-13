import { getBases, setBase } from "./database.js"
const arrayOfBases = getBases()


export const bases = () => {
    let html = `<select id="dropdown-bases">
                    <option value="0">Select a Base Model</option>`

    // Use .map() for converting objects to <li> elements
    const listItemsArray = arrayOfBases.map(base => {
        const price = base.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        })
        return `<option value="${base.id}">${base.name} (${price})</option>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</select>"

    return html
}



document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-bases") {
        setBase(parseInt(event.target.value))
    }
})