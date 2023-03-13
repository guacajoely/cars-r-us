import { getOrders, getPaints, getInteriors, getWheels, getTech } from "./database.js"
const arrayOfPaints = getPaints()
const arrayOfInteriors = getInteriors()
const arrayOfWheels = getWheels()
const arrayOfTech = getTech()


const buildOrderListItem = (order) => {

    // Remember that the function you pass to find() must return true/false
    const foundPaint = arrayOfPaints.find((paint) => {
        return paint.id === order.paintId
    })

    const foundInterior = arrayOfInteriors.find((interior) => {
        return interior.id === order.interiorId
    })

    const foundWheel = arrayOfWheels.find((wheel) => {
        return wheel.id === order.wheelId
    })

    const foundTech = arrayOfTech.find((tech) => {
        return tech.id === order.techId
    })

    //SET BASE COST OF VEHICLE HERE
    let totalCost = 13000
    if(foundPaint !== undefined){totalCost += foundPaint.price}
    if(foundInterior !== undefined){totalCost += foundInterior.price }
    if(foundWheel !== undefined){totalCost += foundWheel.price}
    if(foundTech !== undefined){totalCost += foundTech.price}

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
                Order #${order.id} cost ${costString}
            </li>`

}



export const orders = () => {

    //WE NEED TO ASSIGN ORDERS WITHIN THE FUNCTION
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}