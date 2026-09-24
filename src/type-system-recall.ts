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