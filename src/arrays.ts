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


// Problem 2: Student Marks
// Create a TypeScript Student type that contains an id as a number, a name as a string, and marks as a number.
// Create an array containing multiple students and then write functions that can add a new student, find a student using their ID, return all students who scored 60 or more, and calculate the average marks of all students.
// Focus on: push(), find(), filter(), and reduce()

type Student = {
    id: number;
    name: string;
    marks: number;
}
const students: Array<Student> = [];
function addNewStudent(s: Student): string {
    const index = students.findIndex(st => st.id === s.id);
    if (index === -1) {
        students.push(s);
        return `Student added sucessfully`;
    }
    return `Student id already exists`
}
function findStudentById(id: number): Student | undefined {
    return students.find(st => st.id === id);
}
function getHighScoringStudents(): Student[] {
    return students.filter(st => st.marks >= 60);
}
function calculateAverageOfAllStudents(): number | undefined {
    if (students.length === 0) return undefined;
    const totalMarks = students.reduce((ac, st) => ac + st.marks, 0);
    return totalMarks / students.length;

}
console.log(addNewStudent({ id: 1001, name: 'Aman', marks: 97 }))
console.log(addNewStudent({ id: 1002, name: 'Ajay', marks: 95 }))
console.log(addNewStudent({ id: 1003, name: 'Aniket', marks: 87 }))
console.log(addNewStudent({ id: 1004, name: 'vartika', marks: 91 }))
console.log(calculateAverageOfAllStudents())
console.log(findStudentById(1004))


// Problem 2: Active Users:- 
// Create a TypeScript User type with an id as a number, a name as a string, and an isActive as a boolean.
// Create an array containing multiple users, with both active and inactive users.
// Write a function that returns a new array containing only the active users.
// Also write a function that finds a user by ID and returns that user if found, otherwise undefined.

type User = {
    id: number;
    name: string;
    isActive: boolean;
}
const users: User[] = [
    { id: 101, name: 'Abhishek', isActive: true },
    { id: 102, name: 'Abhijeet', isActive: false },
    { id: 103, name: 'Daya', isActive: false },
    { id: 104, name: 'Purvi', isActive: true },
    { id: 105, name: 'Swati', isActive: false },
    { id: 106, name: 'Nandini', isActive: true },
    { id: 107, name: 'Sakshi', isActive: true },
    { id: 108, name: 'Dhruv', isActive: true },
];

function activeUsers(): User[]  {
    return users.filter(user => user.isActive);
}
function findUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}
console.log(activeUsers());
console.log(findUserById(111));

