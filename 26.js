"use strict"

// Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

 let total = 0;

 const product1 = {
  id: 33,
  title: 'T-shirt',
  price: 99,
  count: 1,
}

const product2 = {
  id: 29,
  title: 'Jeans',
  price: 199,
  count: 1,
}


const basketItems = [
  {
    id: 28,
    title: 'iPhone 14',
    price: 1599,
    count: 3,
  },
  {
    id: 29,
    title: 'Jeans',
    price: 199,
    count: 2,
  }
];


 function addItemToBasket (product) {
const productInBascket = basketItems.find( item => item.id === product.id)
if (productInBascket) {
  return basketItems.map(item => {
    if (item.id===product.id) {
      return {
        ...item, 
        count: product.count + item.count
      }
    } else return item
    
  } )
} else {
  return [...basketItems, product]
}

console.log(productInBascket)
}


console.log(addItemToBasket(product1))
console.log(addItemToBasket(product2))