import { getPaints } from "./database.js"
const arrayOfPaints = getPaints()


export const paints = () => {
    let html = `<select id="dropdown-paints">
                    <option value="0">Select a Paint Color</option>`

    // Use .map() for converting objects to <li> elements
    const listItemsArray = arrayOfPaints.map(paint => {
        return `<option value="${paint.id}">${paint.name}</option>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</select>"

    return html
}