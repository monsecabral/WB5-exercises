let menu = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},
];

// find a single element matching a condition
let searchId = 3;
let matching = null;

let numItems = menu.length;

matching = getMenuObjectById(menu, searchId);

if (matching != null) {
    console.log(matching.item + " costs $" + matching.price);
}

else {
    console.log("Item " + searchId + " not found!");
}


function getMenuObjectById(menuObjects, id){
    for(let menuObject of menuObjects){
        if(menuObject.id == id){
        return menuObject;
        }
    }

    return null;
}