
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

rotateArray(input, 2);






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
