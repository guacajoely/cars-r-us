import { getWheels, setWheels } from "./database.js"
const arrayOfWheels = getWheels()


export const wheels = () => {
    let html = `<select id="dropdown-wheels">
                    <option value="0">Select your Wheels</option>`

    // Use .map() for converting objects to <li> elements
    const listItemsArray = arrayOfWheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.name}</option>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</select>"

    return html
}


document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-wheels") {
        setWheels(parseInt(event.target.value))
    }
})
