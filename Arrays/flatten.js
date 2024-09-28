let arry1 = [1, 2, [3, 4, [6, 7], 9], 89]
const result = arry1.flat(Infinity)
console.log(result)


function flattenArray(arr) {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator.concat(Array.isArray(currentValue) ? flattenArray(currentValue) : currentValue);
    }, []);
}

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
let flatArray = flattenArray(nestedArray);
console.log(flatArray);
