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


// Problem 3 — Payment Processor

// Create an interface called Payment that defines a payment's id as a number or string, amount as a number, and status as one of "pending", "success", or "failed".

// Then create a PaymentProcessor class that implements the Payment interface, initializes all required properties through a constructor, and has a process() method that returns a different message for each payment status.
// Use type narrowing to handle the different statuses and use a never exhaustive check so TypeScript can detect if a new payment status is added but not handled.


interface Payment {
    readonly id: number | string;
    amount: number;
    readonly status: PaymentStatus;
}

type PaymentStatus = 'success' | 'pending' | 'failed';

function assertNever(status: never): never {
    throw new Error(status);
}

class PaymentProcessor implements Payment {

    constructor(
        public readonly id: number | string,
        public amount: number,
        public readonly status: PaymentStatus,
    ) { }

    process(): string {
        switch (this.status) {
            case "failed":
                return `Payment is failed`;
            case 'pending':
                return `Payment is pending`;
            case 'success':
                return `Payment is successful`;
        }
        return assertNever(this.status);
    }
}

const payment_1 = new PaymentProcessor(1001, 5000, 'failed');
console.log(payment_1.process());
