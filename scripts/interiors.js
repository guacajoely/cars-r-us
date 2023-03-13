import { getInteriors, setInterior } from "./database.js"
const arrayOfInteriors = getInteriors()


export const interiors = () => {
    return `<select id="dropdown-interiors">
                    <option value="0">Select an Interior</option>

   ${
        arrayOfInteriors.map(interior => {
            return `<option value="${interior.id}">${interior.name}</option>`
        }).join("")
    }
            </select>`
}



document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-interiors") {
        setInterior(parseInt(event.target.value))
    }
})