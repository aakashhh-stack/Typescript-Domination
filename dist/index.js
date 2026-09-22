function greet(person) {
    return `Hello ${person} welcome to chai code`;
}
const username = 'Aakash aur Typescript';
console.log(greet(username));
let airlineSeat = 'window';
let orders = ['12', '20', '23'];
let currentOrder;
for (let order of orders) {
    if (order === '20') {
        currentOrder = order;
        break;
    }
    currentOrder = '11';
}
console.log(currentOrder);
export {};
//# sourceMappingURL=index.js.map