
// ------------------------------------------------------------------------------------------------------------- 

const findFirstNonRepeatingChar = (str) => {
    let map = {}

    str.split("").forEach((row) => map[row] = map[row] ? map[row] + 1 : 1)

    for (const item in map) {
        if (map[item] === 1) {  // first repeating char condtion  map[item]>1
            return item
        }
    }
}
// Example usage
const inputString = "abcdefe";
const firstNonRepeatingChar = findFirstNonRepeatingChar(inputString);
console.log(firstNonRepeatingChar); // Output: "c"

// ------------------------------------------------------------------------------------------------------------- 
