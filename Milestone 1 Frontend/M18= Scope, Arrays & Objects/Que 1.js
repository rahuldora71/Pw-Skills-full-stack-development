// 1. In the following shopping cart add, remove, and edit items
//  => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


//here sequence defines that the item is added to the last or first of array by default it will added to the last of array 
function addItemArray(item, sequence = false) { 
    if (!shoppingCart.includes(item)) {
        if (sequence) shoppingCart.unshift(item)
            else shoppingCart.push(item)
    } else console.log(item+" is already inserted");
}

// add 'Meat' in the beginning of your shopping cart if it has not been already added.
addItemArray("Meat",true)
console.log(shoppingCart);

//add Sugar at the end of you shopping cart if it has not been already added
addItemArray("Sugar")
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
let allergic_to_honey=true;
if(allergic_to_honey){
    var index=(shoppingCart.indexOf("Honey"));
    shoppingCart.splice(index,1)
}
console.log(shoppingCart);

// modify Tea to 'Green Tea'
let a=shoppingCart.indexOf("Tea")
shoppingCart[a]="Green Tea"

console.log(shoppingCart);



