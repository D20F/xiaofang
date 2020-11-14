let num = 9;
let arr = [2, 7, 11, 15, 7, 2, 11, 15];



// 归并排序
let arr = [3, 2, 1, 1,2,2, 4, 2,532,421,124,1,2,421,4,412,4124,5,3];

let arr = [3,1,3];
function quickSort(array) {
    // 数组必须长于1
    if (array.length < 1) {
        return array;
    }
    // 拿到数组最后一位
    let pivot = array[array.length - 1];
    // 小于等于数组最后一个的全部去左边 
    let left = array.filter((v, i) => v <= pivot && i != array.length - 1)
    // 大于等于数组最后一个的全部去右边 
    let right = array.filter(v => v > pivot)
    console.log("left",left)
    console.log("right",right)
    console.log("pivot",pivot)
    return [...quickSort(left), pivot, ...quickSort(right)]
}
quickSort(arr)



// 数组去重
let arr = [3, 2, 1, 1,2,2, 4, 2,532,421,124,1,2,421,4,412,4124,5,3];

