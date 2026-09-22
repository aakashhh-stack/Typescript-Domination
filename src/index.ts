function greet(person: string): string {
    return `Hello ${person} welcome to chai code`
}

const username: string = 'Aakash aur Typescript';
console.log(greet(username));

let airlineSeat: 'aisle' | 'window' | 'middle' = 'window';

let orders = ['12', '20', '23'];

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '20') {
        currentOrder = order;
        break;
    }
    currentOrder = '11';
}
console.log(currentOrder);
