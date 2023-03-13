const database = {

    bases: [
        { id: 1, name: "Car", price: 10000 },
        { id: 2, name: "SUV", price: 15000 },
        { id: 3, name: "Truck", price: 22500 },
    ],

    paints: [
        { id: 1, name: "Silver", price: 1000 },
        { id: 2, name: "Midnight Blue", price: 1500 },
        { id: 3, name: "Firebrick Red", price: 1500 },
        { id: 4, name: "Spring Green", price: 1500 }
    ],

    interiors: [
        { id: 1, name: "Beige Fabric", price: 1000 },
        { id: 2, name: "Charcoal Fabric", price: 1000 },
        { id: 3, name: "White Leather", price: 2000 },
        { id: 4, name: "Black Leather", price: 2000 },
    ],

    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 1000 },
        { id: 2, name: "17-inch Pair Radial Black", price: 1000 },
        { id: 3, name: "18-inch Pair Spoke Silver", price: 1500 },
        { id: 4, name: "18-inch Pair Spoke Black", price: 1500 },
    ],

    tech: [
        { id: 1, name: "Basic Package (basic sound system)", price: 1000 },
        { id: 2, name: "Navigation Package (includes integrated navigation controls)", price: 2000 },
        { id: 3, name: "Visibility Package (includes side and rear cameras)", price: 2000 },
        { id: 4, name: "Ultra Package (includes navigation and visibility packages)", price: 2600 }
    ],

    orders: [
        {
            id: 1,
            baseId: 1,
            paintId: 1,
            interiorId: 1,
            wheelId: 1,
            techId: 1,
            timestamp: 1614659931693
        }
    ],

    orderBuilder: {},

}



export const getBases = () => {
    return database.bases.map(base => ({...base}))
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getTech = () => {
    return database.tech.map(object => ({...object}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}


//Now you need to export functions whose responsibility is to SET state.

export const setBase = (id) => {
    database.orderBuilder.baseId = id
    console.log(database.orderBuilder)
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
    console.log(database.orderBuilder)
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
    console.log(database.orderBuilder)
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
    console.log(database.orderBuilder)
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
    console.log(database.orderBuilder)
}

//function that takes temporary choices being stored in the orderBuilder state object and make them permanent.
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

