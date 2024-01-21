function chunkArrayInGroups(arr, n) {
    const result = [];

    for (let i = 0; i < arr.length; i += n) {
        const chunk = arr.slice(i, i + n);
        result.push(chunk);
    }

    return result;
}
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunkArrayInGroups(originalArray, 3);
console.log(chunkedArray);
