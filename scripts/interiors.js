import { getInteriors } from "./database.js"
const arrayOfInteriors = getInteriors()


export const interiors = () => {
    let html = `<select id="dropdown-interiors">
                    <option value="0">Select an Interior</option>`

    // Use .map() for converting objects to <li> elements
    const listItemsArray = arrayOfInteriors.map(interior => {
        return `<option value="${interior.id}">${interior.name}</option>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</select>"

    return html
}