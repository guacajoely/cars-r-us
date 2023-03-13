import { getBases, getOrders, getPaints, getInteriors, getWheels, getTech } from "./database.js"
const arrayOfPaints = getPaints()
const arrayOfInteriors = getInteriors()
const arrayOfWheels = getWheels()
const arrayOfTech = getTech()
const arrayOfBases = getBases()


const buildOrderListItem = (order) => {

    // Remember that the function you pass to find() must return true/false

    const foundBase = arrayOfBases.find((base) => {
        return base.id === order.baseId
    })

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

    let totalCost=0
    //SET BASE COST OF VEHICLE HERE
    if(foundBase && foundPaint && foundInterior && foundWheel && foundTech){
        totalCost = foundBase.price + foundPaint.price + foundInterior.price + foundWheel.price + foundTech.price
    }

    else{window.alert("Please select an option for each feature to submit an order")
        location.reload()
        return
    }

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    })
    
    return `<li class="order">
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