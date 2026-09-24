// what is type assertion ?
// Type assertion tells Typescript ,I know the type of this value better than you do.It changes hoe Typescript treats the value at compile time ,it does not cpvert the actual value.

// syntax: const value: data as string;
// alternativ syntax: const value = <string>data;
// In React/TSX , prefer as Type because <Type> conflicts with JSX syntax


// Question Problems
// Problem 1 — API Data
// You receive:const data: unknown = "Aakash";
// Use type assertion to treat data as a string, then print its uppercase value.

const data: unknown = 'Aakash';
const result = data as string;
console.log(result.toUpperCase());


// Problem 2 — User Object
// you receive const data: unknown = {
//   id: 101,
//   name: "Rahul",
//   email: "rahul@example.com"
// };
// create a user type and use type assertion to access data.name , data.email


type User = {
    id: number;
    name: string;
    email: string;
}

const apiData: unknown = {
    id: 101,
    name: 'Rahul',
    email: 'rahul@gmail.com'
}
const accessingData = apiData as User
console.log(accessingData.name, accessingData.email);


// Problem 3 — DOM Element
// Use document.getElementById() to get an input element.

// TypeScript considers the result potentially null and only knows it as an HTMLElement.

// Use a type assertion to treat it as:HTMLInputElement
// then access its value

const inputElement = document.getElementById('user') as HTMLInputElement;
inputElement.innerHTML = `<h1>Hello User</h1>`

console.log(inputElement);