
function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }

    }
    return arr
}


function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {


        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {

            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]

        }



    }
    return arr
}

function sectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let index = i

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[index]) {
                index = j
            }

        }

        if (index !== i) {
            [arr[index], arr[i]] = [arr[i], arr[index]]
        }

    }
    return arr
}

function mergeSort(arr) {

    if (arr.length < 2) return arr

    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))

}
function merge(leftArr, rightArr) {

    let sortedArr = []
    while (leftArr.length && rightArr.length) {

        leftArr[0] <= rightArr[0] ? sortedArr.push(leftArr.shift()) : sortedArr.push(rightArr.shift())
    }
    return [...sortedArr, ...leftArr, ...rightArr]

}

function quickSort(arr) {

    if (arr.length < 2) return arr

    let pivot = arr[arr.length - 1]
    let left = [], right = []

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])

    }

    return [...quickSort(left),pivot,...quickSort(right)]



}


console.log("bubble sort =>>>>>", bubbleSort([7, 5, 3, 2, 3, 4, 2, 1, 3]))
console.log("Insertion sort =>>>>>", insertionSort([7, 5, 3, 2, 3, 4, 2, 1, 3]))
console.log("selection sort =>>>>>", sectionSort([7, 5, 3, 2, 3, 4, 2, 1, 3]))
console.log("merge sort =>>>>>", mergeSort([7, 5, 3, 2, 3, 4, 2, 1, 3]))
console.log("quick sort =>>>>>", mergeSort([7, 5, 3, 2, 3, 4, 2, 1, 3]))