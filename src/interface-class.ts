// Problem 1 — User Interface + Class
// Create an interface User
//Then create a UserManager class that:
// stores a User
// has a constructor to initialize the user
// has a method getUserInfo() that returns a string
// has a method isAdmin() that returns a boolean

// Concepts: interface + class + union + method return types

type Role = 'admin' | 'user'
interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
}

class UserManager implements User {
    id: number;
    name: string;
    email: string;
    role: Role
    constructor(id: number, name: string, email: string, role: Role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getUserInfo(): string {
        return `User name is:${this.name}`;
    }
    isAdmin(): boolean {
        return this.role === "admin";
    }
}

const user_1 = new UserManager(101, 'Sam', 'sam@gmail.com', 'user');
console.log(user_1.getUserInfo());
console.log(user_1.isAdmin());