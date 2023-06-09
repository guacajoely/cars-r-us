import { paints } from "./paints.js"
import { wheels } from "./wheels.js"
import { interiors } from "./interiors.js"
import { tech } from "./tech.js"
import { orders } from "./orders.js"
import { addCustomOrder } from "./database.js"
import { bases } from "./bases.js"

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id === "orderButton") {
        addCustomOrder()
    }
})

export const createHTML = () => {
    return `
        <h1>Cars-R-Us</h1>

        <h2>First, please select a base model</h2>
        <article class="bases">
            ${bases()}
        </article>

        <h2>Next, select your features</h2>
        <article class="choices">
            <section class="choices__paints options">
                <h2>Paint</h2>
                ${paints()}
            </section>
            <section class="choices__interiors options">
                <h2>Interior</h2>
                ${interiors()}
               
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheels()}
                
            </section>
            <section class="choices__tech options">
                <h2>Technologies</h2>
                ${tech()}
               
            </section>
        </article>
        <article>
            <button id="orderButton">Place Car Order</button>
        </article>
        <article class="custom-orders">
            <h2>Custom Car Orders</h2>
            ${orders()}
    
        </article>
    `
}