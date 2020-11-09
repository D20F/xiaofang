function twoSum (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let data = target - nums[i];
        if (data >= 0) {
            for (let l = i + 1; l < nums.length; l++) {
                if (nums[l] == data) {
                    return [i, l]
                }
            }
        }
    }
};

var reverse = function(x) {
    x.reverse();
};



let arr =[2,7,11,15];
let num = 9;
twoSum(arr,num)
