function findLargestNumber(...arrays) {
    const resultArray = arrays.reduce((acc, currentArray) => {
        currentArray.forEach((element, index) => {
            acc[index] = (element > acc[index]) ? element : acc[index];
        });
        return acc;
    }, Array.from({ length: Math.max(...arrays.map(array => array.length)) }, () => Number.MIN_VALUE));

    return resultArray;
}
const result = findLargestNumber([1, 5, 3], [8, 2, 7], [4, 6, 9]);
console.log(result);
