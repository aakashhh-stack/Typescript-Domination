// what is type unknown ?
// Unknown is type safe for a value whose type you don't know yet,you must narrow it before using it.

//syntax: let value:unknown;

//i.e.
function processData(data: unknown): void {
    if (typeof data === 'string') {
        console.log(data.toUpperCase());
    }
}
processData('typescript');

// Questions to practise:

// Problem 1 — Safe Data Processor
// Create:function processValue(value: unknown): void

// It should:
// Print the value in uppercase if it's a string.
// Print value * 2 if it's a number.
// Print "Unsupported type" for anything else.

function processValue(data: unknown): void {
    if (typeof data === 'string') {
        console.log(data.toUpperCase());
        return;
    }
    if (typeof data === 'number') {
        console.log(data * 2);
        return;
    }
    console.log('Unsupported type');
}

processValue('indian men cricket team');
processValue(5); // 10
processValue(true) // unsupported type



// Problem 2 — API Response
// create :function handleResponse(response: unknown): void
// assume the response could be:
// a string , a number , null , an object
// Use type narrowing to safely handle each case without using any.

function handleResponse(response: unknown): void {
    if (typeof response === 'string') {
        console.log('Response is string:', response);
        return;
    }
    if (typeof response === 'number') {
        console.log('Response is number:', response);
        return;
    }
    if (typeof response === null) {
        console.log('Response is:', null);
        return;
    }
    if (typeof response === 'object') {
        console.log('Response is Object', response);
        return;
    }
    console.log('Unsupported response');
}

handleResponse('Working');
handleResponse(200);
handleResponse({
    name: 'Sam',
    age: 24,
    domain: 'Backend developer'
});
handleResponse(null);
handleResponse(true);


// Problem 3 — User Input Validator
// create function validateInput(input: unknown): boolean

// Return true only when:
// input is a string
// its length is greater than 3
// Otherwise return false.

function validateInput(inputData: unknown): boolean {

    if (typeof inputData === 'string' && inputData.length > 3) {
        return true;
    }
    return false;
}

console.log('Is User data is valid:',validateInput('Developer'));
console.log('Is User data is valid:',validateInput(96));


