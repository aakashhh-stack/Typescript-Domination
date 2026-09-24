// what is never ?
// never represent a value that can never occur , it is mainly used for functions that never successfully finish or for impossible cases.

// syntax - function throwError(message:string):never{
// throw new Error(message)
// }


// Question Problems

// Problem 1 — Error Function
// createa function - it should always thorw an error with the provided message.

function failOperation(message: string): never {
    throw new Error(message);
}

// failOperation('Fake Error');
// failOperation('Fake Reference error');

// Problem 2 — Impossible Status
// create type status with pending success and failed
// create a function to handle all three statuses.Then add a final else block where you use never to represent an impossible status.

type Status = 'pending' | 'success' | 'failed';

// exhaustive function
function assertNever(value: never): never {
    throw new Error(`Unexpected status:${value}`);
}

function handleStatus(status: Status): string {
    if (status === 'pending') {
        return 'Request pending'
    }
    else if (status === 'failed') {
        return 'Request failed'
    }
    else if (status === 'success') {
        return 'Request success'
    }

    return assertNever(status);

}

console.log(handleStatus('success'));


// Problem 3 — Exhaustive API Response
// create response union type
// and a function to hande response
//Handle both possible response types.
// Then add an exhaustive check using never so TypeScript can catch you if another response type is added later.

type Response = | { type: 'success'; data: string } | { type: 'error'; message: string };


function asserAPINever(value: never): never {
    throw new Error(`Unexpected response ${value}`);
}
function handleResponse(response: Response): string {
    if (response.type === 'success') {

        return `Response success ${response.data}`
    }
    else if (response.type === 'error') {
        return `Error: ${response.message}`;
    }
    return asserAPINever(response);
}

console.log(handleResponse({ type: 'success', data: 'data received' }))