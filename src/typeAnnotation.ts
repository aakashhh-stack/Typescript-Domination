// Primitive data types
// type annotation: it means explicitly definnig data type of variable's , function's parameter and return value.

//string
let productName: string;
productName = 'Laptop';

// number
let productPrice: number;
productPrice = 45000;

// boolean
let isAvailable: boolean;
isAvailable = true;

// Number array
const array: number[] = [45, 67, 55, 89, 94];

// Object
let student: {
    name: string,
    age: number,
    course: string
} = {
    name: 'Aakash',
    age: 22,
    course: 'Computer science'
}

// function with number return type
function multiply(num1: number, num2: number): number {
    let result: number;
    result = num1 * num2;
    return result;
}

console.log("Multiplication of two numbers:", multiply(12, 5));

// function with string return type and string parameter

function getFullName(firstname: string, lastName: string): string {
    let fullName: string;
    fullName = firstname.concat(lastName);
    return fullName;
}

console.log('Full name of user is:', getFullName('Aakash', 'Pandey'));

// function with one optional parameter

function optionalParameter(name: string, age?: number): string {
    
    if (age) {
        return `Hello ${name} , now you are ${age} years old`;
    }
    return `Hello ${name}, is everything fine!!`

}
console.log(optionalParameter('Aakash', 22));
