// what is union ?
// Union allows a variable , parameter or return value to have more than one possible type .

// synatx - let value: sting | number;

// example-
function printId(id: string | number): void {
    console.log(id);
}

printId('1168');

// problem Questions -
// -----------------------
// 1 - Create a variable userId that can accept either:
// number
// string
// Assign both types one after another and verify TypeScript accepts them.

let userId: string | number;
userId = '1168';
userId = 1168;

console.log(userId);


// problem 2:Create a variable status that can only contain:
// "pending"
// "completed"
// "cancelled"

let status: 'pending' | 'completed' | 'cancelled';

// status='done'; // shows error

status = 'completed';

// problem 3:Create a function formatId(id)
//It should accept either a string or number and return a string representation of the ID.

function formatId(id: number | string): string {
 return `Your UserId is:${id}`;
}
console.log(formatId('1001'));
console.log(formatId(1122));