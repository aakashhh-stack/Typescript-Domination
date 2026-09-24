// ============================================================
// Problem 1 — User Profile
// ============================================================

// Create a User type that represents a user in an application.
// The user should have an ID that can be either a number or a string,
// a name as a string, a role that can only be "admin" or "user",
// and an isActive boolean value.
//
// Then create a displayUser() function that accepts a User object
// and prints the user's name, ID, role, and active status.
// The function should not return any value.
//
// Concepts: type, union, void

type User = {
    id: number | string;
    name: string;
    role: 'admin' | 'user';
    isActive: boolean;
}

function displayUser(user: User): void {
    console.log(`User name:${user.name}
    User id:${user.id} 
    User role:${user.role}
    isUser Active:${user.isActive}`);
}

let user: User = {
    id: 101,
    name: 'Aakash',
    role: 'admin',
    isActive: true

}

// displayUser(user)


// ============================================================
// Problem 2 — API Data Processor
// ============================================================

// Create a processApiData() function that receives data whose type
// is not known in advance.
//
// If the received data is a string, return "String: <value>".
// If it is a number, return "Number: <value>".
// If it is an array of strings, return "Items: <length>".
// For any other type of data, return "Invalid data".

// You must use unknown instead of any and use type narrowing
// to safely determine the type of the received data.
//
// Concepts: unknown, type narrowing

function processApiData(data: unknown): string {

    if (typeof data === 'string') {
        return `String: ${data}`;
    }
    if (typeof data === 'number') {
        return `Number: ${data}`;
    }
    if (Array.isArray(data)) {
        // let isString: boolean = true;
        // for (let i = 0; i < data.length; i++) {
        //     if (typeof data[i] !== 'string') {
        //         isString = false;
        //         break;
        //     }
        // }

        // optimize approach
        const isArrayOfString = data.reduce(item => typeof item === 'string');

        return isArrayOfString ? `Items: ${data.length}` : 'Data is not a array of string';
    }
    return `Invalid data`;

}

// console.log(processApiData([1, 2, 3, 4, 'hello']));



// ============================================================
// Problem 3 — Order Status System
// ============================================================

// Create an OrderStatus type that allows only these four values:
// "pending", "processing", "shipped", and "delivered".
//
// Then create an Order type containing an order ID, customer name,
// and order status.
//
// Create a handleOrder() function that accepts an Order and returns
// a different message depending on the current order status.
//
// After handling all possible statuses, add an exhaustive check
// using never so TypeScript can detect if a new status is added
// later but not handled inside the function.
//
// Concepts: type, union, type narrowing, never

type OrderSystem = 'processing' | 'shipped' | 'delivered' | 'pending';
type Order = {
    orderId: number;
    customerName: string;
    orderStatus: OrderSystem;
}

function assertDataNever(order: never): never {
    throw new Error(`Unexpected order type:${order}`);
}

function handleOrder(order: Order): string {
    if (order.orderStatus === 'delivered') {
        return `Order is ${order.orderStatus}`;
    }
    else if (order.orderStatus === 'pending') {
        return `Order is ${order.orderStatus}`;
    }
    else if (order.orderStatus === 'processing') {
        return `Order is ${order.orderStatus}`;
    }
    else if (order.orderStatus === 'shipped') {
        return `Order is ${order.orderStatus}`;
    }
    else {
        return assertDataNever(order.orderStatus);
    }

}
const userOrder: Order = {
    orderId: 101,
    customerName: 'Rahul',
    orderStatus: 'shipped'
}
// console.log(handleOrder(userOrder));

// ============================================================
// Problem 4 — External API User
// ============================================================

// Imagine that an external API returns data whose structure is
// initially unknown.
//
// Create an ApiUser type containing an ID, name, and email.
// Use type assertion to tell TypeScript that the received API data
// should be treated as an ApiUser.
//
// Then create a getUserEmail() function that accepts an ApiUser
// and returns the user's email.
//
// Think about what could happen if the actual API response does
// not contain the properties expected by ApiUser.
//
// Concepts: unknown, type, type assertion

type ApiUser = {
    id: number;
    name: string;
    email: string;
}

function getUserEmail(response: unknown): string {
    let data = response as ApiUser;
    return `User email is:${data.email}`;
}
console.log(getUserEmail('invalid data')) // output is undefined 
console.log(getUserEmail({
    id:1168,
    name:'Priyanka',
    email:'priyanka@gmail.com'
}));// output is valid email
