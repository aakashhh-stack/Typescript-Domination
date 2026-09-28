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


// Problem 3: Active Users:- 
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

function activeUsers(): User[] {
    return users.filter(user => user.isActive);
}
function findUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}
console.log(activeUsers());
console.log(findUserById(111));


// Problem 4: Shopping Cart 🛒
// Create a TypeScript CartItem type containing an id as a number, a productName as a string, a price as a number, and a quantity as a number.
// Create an array containing multiple cart items and write functions that add a new item, remove an item using its ID, update the quantity of an existing item, and calculate the total price of the cart.
// For the total price, each item's contribution should be:price × quantity

// type CartItem = {
//     id: number;
//     productName: string;
//     price: number;
//     quantity: number;
// }

// const carts: CartItem[] = [
//     { id: 201, productName: 'Wrist Watch', price: 4000, quantity: 1 },
//     { id: 201, productName: 'Laptop', price: 29000, quantity: 1 },
//     { id: 201, productName: 'Snikker', price: 10000, quantity: 3 },
//     { id: 201, productName: 'T-shirts', price: 340, quantity: 4 },
//     { id: 201, productName: 'Cargo-jeans', price: 650, quantity: 2 },
//     { id: 201, productName: 'Peanut Butter', price: 1200, quantity: 1 },
// ];

// function addProduct(cart: CartItem): string {
//     const product = carts.findIndex(p => p.id === cart.id);
//     if (product === -1) {
//         carts.push(cart);
//         return `Product ${cart.productName} added to cart successfully...`;
//     }
//     return `${cart.productName} already exists in your cart..`;

// }
// function removeProductById(id: number): string {
//     const product = carts.findIndex(p => p.id === id);
//     if (product === -1) return `Invalid Product id..`
//     carts.splice(product, 1);
//     return `Product is removed successfully...`
// }

// function updateQuanity(id: number, quanity: number): string {
//     const product = carts.find(p => p.id === id);
//     if (!product) return `Invalid product id failed to update quantity...`;
//     product.quantity += quanity;
// }


// Array Question-

type Employee = {
    id: number;
    name: string;
    department: string;
    salary: number;
};

const employees: Employee[] = [
    { id: 1, name: "Aman", department: "IT", salary: 45000 },
    { id: 2, name: "Priya", department: "HR", salary: 60000 },
    { id: 3, name: "Rahul", department: "IT", salary: 75000 },
    { id: 4, name: "Neha", department: "Finance", salary: 48000 },
];

function getHighPaidEmployees(employees: Employee[]): Employee[] {
    return employees.filter(employee => employee.salary > 50000);
}

function calculateTotalSalary(employees: Employee[]): number {
    return employees.reduce((total, employee) => total + employee.salary, 0);
}

console.log(getHighPaidEmployees(employees));
console.log(calculateTotalSalary(employees));

type AppointmentStatus = "waiting" | "completed" | "cancelled";

type Appointment = {
    id: number;
    patientName: string;
    doctorName: string;
    status: AppointmentStatus;
};

const appointments: Appointment[] = [
    {
        id: 101,
        patientName: "Aman",
        doctorName: "Dr. Sharma",
        status: "waiting"
    },
    {
        id: 102,
        patientName: "Priya",
        doctorName: "Dr. Mehta",
        status: "completed"
    },
    {
        id: 103,
        patientName: "Rahul",
        doctorName: "Dr. Sharma",
        status: "waiting"
    },
    {
        id: 104,
        patientName: "Neha",
        doctorName: "Dr. Verma",
        status: "cancelled"
    }
];

function getWaitingAppointments(
    appointments: Appointment[]
): Appointment[] {
    return appointments.filter(
        appointment => appointment.status === "waiting"
    );
}

function getPatientNames(
    appointments: Appointment[]
): string[] {
    return appointments.map(
        appointment => appointment.patientName
    );
}

function findAppointmentById(
    appointments: Appointment[],
    id: number
): Appointment | undefined {
    return appointments.find(
        appointment => appointment.id === id
    );
}

console.log(getWaitingAppointments(appointments));
console.log(getPatientNames(appointments));
console.log(findAppointmentById(appointments, 103));