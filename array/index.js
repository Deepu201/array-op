// index.js

export function arrayOperations(arr, operation, value) {
    switch (operation) {
        case 'sort':
            return arr.slice().sort((a, b) => a - b);
        case 'reverse':
            return arr.slice().reverse();
        case 'add':
            if (value !== undefined) {
                return [...arr, value];
            } else {
                throw new Error('Value must be provided for add operation');
            }
        case 'unique':
            return [...new Set(arr)];
        case 'length':
            return arr.length;
        case 'filter':
            if (typeof value === 'function') {
                return arr.filter(value);
            } else {
                throw new Error('A filtering function must be provided for filter operation');
            }
        case 'sum':
            return arr.reduce((acc, num) => acc + num, 0);
        default:
            throw new Error('Invalid operation');
    }
}// index.js
