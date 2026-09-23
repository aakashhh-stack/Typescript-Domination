// what is type alias ?
// type let's you create custom name for a type, making complex type easier to reuse.

// syntax: type User={
//   name:sting;
//   age:number;
//   isActive:boolean;
// }

// then-  const user:User={
//   name: 'Aakash',
//   age:22,
//   isActive:true
// }

// i.e. 
type response = 'successful' | 'failed' | 'pending';
let responseStatus: response;

// Question Problem:
// Problem 1 — Product Type

// Create a Product type with:
// name: string
// price: number
// inStock: boolean
// Create 2 products using this type

type Product = {
    name: string;
    price: number;
    inStock: boolean;
}
const product1: Product = {
    name: "Smart LCD TV 44 inch",
    price: 39000,
    inStock: true,
}
const product2: Product = {
    name: 'Samsung Galaxy s23',
    price: 56000,
    inStock: false,
}
console.log(product1);
console.log(product2);


// Problem 2 — User + Function
// Create a User type with:
// id: number
// name: string
// email: string
// role: "admin" | "user"
// then create: function displayUser(user: User): string
// Return a string containing the user's name and role.

type User = {
    id: number,
    name: string,
    email: string,
    role: 'admin' | 'user',
}

function displayUser(user: User): string {
    return `User: ${user.name} 
     Role: ${user.role}`;
}
const user: User = {
    id: 11,
    name: 'abc',
    email: 'qnd@hh',
    role: "admin"
}
console.log(displayUser({
    id: 1168,
    name: 'Mahendra singh dhoni',
    email: 'mahi@gmail.com',
    role: "admin"
}));
console.log(displayUser(user))

// problem 3 - Order System
// create these types
// OrderStatus → "pending" | "shipped" | "delivered" | "cancelled"
// and an Order type containing:
// orderId: number
// customerName: string
// items: string[]
// status: OrderStatus

// Then create a function:updateOrderStatus(order, status)
// that accepts an Order and a valid OrderStatus, and returns the updated order.

type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

type Order = {
    orderId: number,
    customerName: string,
    items: string[],
    status: OrderStatus
}

const order: Order = {
    orderId: 101,
    customerName: 'Aakash',
    items: ['seb', 'kela', 'santra', 'mausambi', 'anar'],
    status: 'pending'
}

function updateOrderStatus(order: Order, status: OrderStatus): Order {
    order.status = status
    return order;
}
console.log(updateOrderStatus(order, 'delivered'));
// console.log(updateOrderStatus(order, 'done')); throws compile time error beacause status value is not in Orderstatus type