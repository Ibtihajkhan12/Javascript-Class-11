function countTypes(arr) {
    let counts = {
        numbers: 0,
        strings: 0,
        booleans: 0,
    };

    function countRecursive(element) {
        if (Array.isArray(element)) {
            for (let item of element) {
                countRecursive(item);
            }
        } else {
            if (typeof element === 'number') {
                counts.numbers++;
            } else if (typeof element === 'string') {
                counts.strings++;
            } else if (typeof element === 'boolean') {
                counts.booleans++;
            }
        }
    }

    countRecursive(arr);

    return counts;
}

let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

let result = countTypes(arr);
console.log(`Numbers: ${result.numbers}`);
console.log(`Strings: ${result.strings}`);
console.log(`Booleans: ${result.booleans}`);