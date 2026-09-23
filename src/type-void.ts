// what is type void ?
// void means a function does not return a value.

//syntax: function function_name():void{
// code
// }

// void is mainly used in for functions where you performs an action but don't return a result.

// Question problems:
// problem 1:Problem 1 — Logger
// Create a function logUser(name) that:

// accepts a string
// prints User: <name>
// returns nothing (void)

function logUser(username: string): void {
    console.log(`User:${username}`);
}

logUser('Aakash');


// Practise question 2:
// Create a function updateStatus(status) that:
// accepts "active" | "inactive"
// prints the new status
// has a void return type

function updateStatus(status: 'active' | 'inactive'): void {
    console.log(`Current status is:${status}`);

}

updateStatus('active');
updateStatus('inactive');


// practise question 3.
// Create a function printSkills(skills) that:
// accepts a string[]
// prints each skill
// returns nothing

function printSkills(skills: string[]): void {
    for (let skill of skills) {
        console.log(skill);
    }
}

printSkills(['Reactjs', 'ExpressJs', 'NodeJs', 'Typescript']);
