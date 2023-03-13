const database = {

    bases: [
        { id: 1, name: "Hummus and Hot Sauce", price: 10 },
        { id: 2, name: "Chicken Fried Lamb Kebab", price: 10 },
        { id: 3, name: "Hot Chicken Greek Salad", price: 10 },
        { id: 4, name: "Brussel Sprout Moussaka", price: 10 }
    ],

    vegetables: [
        { id: 1, name: "Okra", price: 5 },
        { id: 2, name: "Collard Greens", price: 5 },
        { id: 3, name: "Swiss Chard", price: 5 },
        { id: 4, name: "Corn", price: 5 },
        { id: 5, name: "Brussel Sprouts", price: 5 },
        { id: 6, name: "Sweet Potatoes", price: 5 },
        { id: 7, name: "Grits", price: 5 },
        { id: 8, name: "Fried Green Tomatoes", price: 5 },
        { id: 9, name: "Baked Potato", price: 5 }
    ],

    sides: [
        { id: 1, name: "Chicken Fried Steak", price: 3 },
        { id: 2, name: "Bacon", price: 3 },
        { id: 3, name: "Turkey Leg", price: 3 },
        { id: 4, name: "Ribs", price: 3 },
        { id: 5, name: "Catfish", price: 3 },
        { id: 6, name: "Souvlaki", price: 3 }
    ],

    orders: [
        {
            id: 1,
            baseId: 1,
            vegetableId: 1,
            sideId: 1,
            timestamp: 1614659931693
        }
    ],

    orderBuilder: {},

}


// Other modules invoke these function to GET their state.
export const getBases = () => {
    return database.bases.map(base => ({...base}))
}

export const getVegetables = () => {
    return database.vegetables.map(veggie => ({...veggie}))
}

export const getSides = () => {
    return database.sides.map(side => ({...side}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}
