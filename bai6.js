function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

const numbers = [1, 2, 3, 4, 5];
const result1 = fakeFind(numbers, element => element > 2);
console.log(result1);

const result2 = fakeFind(numbers, element => element > 10);
console.log(result2); 