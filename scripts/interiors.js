import { getInteriors, setInterior } from "./database.js"
const arrayOfInteriors = getInteriors()


export const interiors = () => {
    return `<select id="dropdown-interiors">
                    <option value="0">Select an Interior</option>

   ${
        arrayOfInteriors.map(interior => {
            const price = interior.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0
            })
            return `<option value="${interior.id}">${interior.name} (${price})</option>`
        }).join("")
    }
            </select>`
}



document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-interiors") {
        setInterior(parseInt(event.target.value))
    }
})