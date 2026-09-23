// what is type narrowing ?
// It means checking a value's type so Typescript can safely treat it as a more specific type. 

// common narrowing technniques:
// typeof value !== 'string'
// typeof value === 'number'
// Array.isArray(value)
// value instanceOf someclass

// Question problems to practise

// Problem 1 — String or Number
// create:function processId(id: string | number): string

// If id is a string → return it in uppercase.
// If id is a number → return "ID-" + id.
// Use typeof for narrowing.

function processId(id: string | number): string {
    if (typeof id === 'string') {
        return `${id.toUpperCase()}`;
    }
    return `ID:${id}`

}
console.log(processId('1168'));
console.log(processId(1001));

// Problem 2 — Different Input Types
// Create:function calculateValue(value: string | number | boolean): number

//  Rules:
// number → return the number itself.
// string → return its .length.
// boolean → return 1 for true, 0 for false.
// Use type narrowing instead of type assertions.

function calculateValue(value: string | number | boolean): number {
    if (typeof value === 'string') {
        return value.length;
    }
    if (typeof value === 'number') {
        return value;
    }

    return value ? 1 : 0;

}
console.log(calculateValue('typescript developer'));
console.log(calculateValue(68));
console.log(calculateValue(true));

// Problem 3 — API Data
// create:function handleData(data: unknown): string

// handle these cases:
// string → return "String: <value>"
// number → return "Number: <value>"
// string[] → return "Array contains X items"
// anything else → return "Unsupported data"
// Hint: You'll need typeof + Array.isArray().

function handleData(data: unknown): string {
    if (typeof data === 'string') {
        return `String: ${data}`;
    }
    if (typeof data === 'number') {
        return `Number: ${data}`;
    }
    if (  Array.isArray(data) ) {
        return `Array contains ${data.length} items`;
    }
    return `Unsupported data format`;
}

console.log(handleData('python'));
console.log(handleData(23));
console.log(handleData(['apple', 'mango', 'pineapple', 'oranges']));
console.log(handleData(false));
console.log(handleData([1, 2, 3, 4, 5, 5]));


