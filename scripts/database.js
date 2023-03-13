const database = {

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
            paintId: 1,
            interiorId: 1,
            wheelId: 1,
            techId: 1,
            timestamp: 1614659931693
        }
    ],

    orderBuilder: {},

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
