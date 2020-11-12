let num = 9;
let arr = [2, 7, 11, 15, 7, 2, 11, 15];


// 未完成
[3, 2, 1]
function directInsertionSort(arr) {

    var length = array.length;
    var curr, index;

    for (var i = 1; i < length; i++) {
        index = i - 1;
        curr = arr[i]
        while (index >= 0 && arr[index] > curr) {
            arr[index + 1] = arr[index]
            index--;
        }
    }



    return array;
}
directInsertionSort(arr)


let arr = [4, 3, 1, 2, 4];
function quickSort(array) {
    if (array.length < 1) {
        return array;
    }
    let pivot = array[array.length - 1];
    let left = array.filter((v, i) => v <= pivot && i != array.length - 1)
    let right = array.filter(v => v > pivot)
    console.log(pivot)
    return [...quickSort(left), pivot, ...quickSort(right)]
}

quickSort(arr)

            
let arr = [3, 2, 1, 1, 4, 5];
