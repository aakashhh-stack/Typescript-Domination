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

// Problem 2 — Interface + Class + private
//create interface of product and Create a ProductManager class.
// The class should:
// store products
// have a method to add a product
// have a method to find a product by ID
// have a method to check whether a product is in stock

// Requirement: Keep the product collection private.

// Concepts: interface + class + private + arrays + methods.

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

class ProductManager {

    private _products: Product[] = [];

    addProduct(newProduct: Product): string {
        this._products.push(newProduct);
        return `Product added successfully...`;
    }

    findProductById(id: number): Product | undefined {
        return this._products.find(p => p.id === id);

    }

    isProductInStock(id: number): boolean {
        const product = this._products.find(p => p.id === id);
        return product !== undefined && product.stock > 0;
    }
}

const p1 = new ProductManager();
console.log(p1.addProduct({ id: 101, name: 'Santre', price: 69, stock: 24 }));
console.log(p1.isProductInStock(101));
console.log(p1.findProductById(101));