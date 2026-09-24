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

displayUser(user)


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

console.log(processApiData([1, 2, 3, 4, 'hello']));
