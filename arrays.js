
// ------------------------------------------------------------------------------------------------------------- 

// 1.Question rotateArray

let input = [2, 7, 11, 4, -2];

function rotateArray(input, rotate) {
    for (let i = 0; i < rotate; i++) {
        let temp = input[0];
        for (let j = 0; j < input.length; j++) {
            input[j] = input[j + 1];
        }
        input[input.length - 1] = temp;
    }
    return input;
}
console.log("Rotate Array =>", rotateArray(input, 2));







// ------------------------------------------------------------------------------------------------------------- 

// 2.Question flatarray

let ques = [1, 2, 3, [3, 4, 5, 6], 34, 5, [7, 8]]

let result = []


flatArray = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result.push(arr[i])

        }
        if (typeof arr[i] === "object") {
            flatArray(arr[i])

        }
    }
    return arr
}
flatArray(ques)

console.log("flatArray =>", result)



// ------------------------------------------------------------------------------------------------------------- 




// Question Common Element



let inputObj1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
let inputObj2 = { a: 2, e: 12, f: 6, d: 10 };

function commonElement(arr1, arr2) {
    let obj = {};

    for (let i in arr1) {
        if (arr1[i] === arr2[i]) {
            obj[i] = arr1[i];
        }
    }
    return obj;
}
console.log("common Element =>", commonElement(inputObj1, inputObj2));


// ------------------------------------------------------------------------------------------------------------- 




// Question secondLargest



function secondLargest(input) {
    let arr = [...new Set(input)].sort((a, b) => a - b);

    return arr[arr.length - 2];
}

console.log("second Largest =>", secondLargest(input));



// ------------------------------------------------------------------------------------------------------------- 




// fibonacci series

let fibo = [0, 1];

for (let i = 0; i < 10; i++) {
    fibo.push(fibo[i] + fibo[i + 1]);
}

console.log("fibonacci series =>>>>", fibo.join(" "));


// ------------------------------------------------------------------------------------------------------------- 


// factorial number

const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};
console.log("factorial number =>>>", factorial(5));

// ------------------------------------------------------------------------------------------------------------- 


// prime number

let checkPrime = (n) => {
    let prime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
};

for (let i = 1; i < 30; i++) {
    checkPrime(i) && console.log(i);
}


// ------------------------------------------------------------------------------------------------------------- 


//  missing number

const missingNum = (...nums) => {
    let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);
    let missing = [];
    for (let i = minNum; i <= maxNum; i++) {
        !nums.includes(i) && missing.push(i);
    }
    return missing;
};

console.log("missingNum =>>", missingNum(1, 2, 3, 4, 5, 6, 8, 9, 10, 13));


// ------------------------------------------------------------------------------------------------------------- 


// anagram number

let checkAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let map1 = {};
    let map2 = {};

    for (const item in str1) {
        map1[str1[item]] = map1[str1[item]] ? map1[str1[item]] + 1 : 1;
        map2[str2[item]] = map2[str2[item]] ? map2[str2[item]] + 1 : 1;
    }
    for (const item in map1) {
        if (map1[item] !== map2[item]) return false;
    }

    return true;
};
console.log("anagram =>>>", checkAnagram("cat", "act"));


// ------------------------------------------------------------------------------------------------------------- 



const twoSum = (arr, target) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const compliment = target - arr[i];
        if (map.has(compliment)) {
            return [i, map.get(compliment)]
        } else {
            map.set(arr[i], i);
        }
    }
};


let arr = [1, 2, 5, 3, 4, 6, 3];
let target = 11;
console.log(twoSum(arr, target));


// ------------------------------------------------------------------------------------------------------------- 
