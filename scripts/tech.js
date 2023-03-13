import { getTech, setTech } from "./database.js"
const arrayOfTech = getTech()


export const tech = () => {
    let html = `<select id="dropdown-tech">
                    <option value="0">Select your Technology features</option>`

    // Use .map() for converting objects to <li> elements
    const listItemsArray = arrayOfTech.map(tech => {
        return `<option value="${tech.id}">${tech.name}</option>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</select>"

    return html
}



document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-tech") {
        setTech(parseInt(event.target.value))
    }
})