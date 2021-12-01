var searchInsert = function(nums, target) {
    let mid = 0, left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        mid = parseInt( left + (right - left) / 2)
        if (nums[mid] === target) { return mid}
        // else if (right - left === 0) { return mid + 1}
        else if (nums[mid] < target) { left = mid + 1}
        else { right = mid - 1 }
    }
    return target < nums[mid] ? mid : mid + 1 // will only add 1 if target is greater than max(nums)
};
