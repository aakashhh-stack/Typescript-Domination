// What is an array in typescript ?
// Array is data structure that stores multiple values of the same type.

// Syntax: let value:type[]=[];
// Syntax: let value:Array<type>=[];

// Question Problems

// Practice Problem 1 — Product Inventory
// create interface with id name price stock
// create a product inventry class that maintains an array of product objects.
// The class should have methods to add a product, remove a product by ID, find a product by ID, and return all products that are currently in stock.

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

class ProductInventory {

    private _products: Array<Product> = [];

    addProduct(product: Product): string {

        const idx = this._products.findIndex(p => p.id === product.id);
        
        if (idx === -1) {
            this._products.push(product);
            return `Product ${product.name} added successfully..`;
        }
        return `Product Id already exists...`;
    }

    removeProductById(id: number): string {
        const idx = this._products.findIndex((p) => p.id === id);
        if (idx !== -1) {
            this._products.splice(idx, 1);
            return `Product is removed`;
        }
        return `Invalid Product id`;

    }

    findProductById(id: number): Product | undefined {
        return this._products.find(p => p.id === id);
    }

    getInStockProducts(): Product[] {
        return this._products.filter(p => p.stock > 0);
    }
}
const p = new ProductInventory();
console.log(p.addProduct({ id: 101, name: 'Iphone', price: 150000, stock: 69 }))
console.log(p.addProduct({ id: 102, name: 'Nokia', price: 1500, stock: 98 }))
console.log(p.addProduct({ id: 103, name: 'Realme', price: 10990, stock: 1 }))
console.log(p.getInStockProducts());
console.log(p.findProductById(103));
console.log(p.removeProductById(102));

