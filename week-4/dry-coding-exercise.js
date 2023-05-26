// Instructions: debug code that's broken
// Solution: (see below code)
const fourIncreasing = function(nums) {
    for (let i = 0; i < nums.length - 3; i++) {
      if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2] && nums[i + 2] + 1 === nums[i + 3]) {
        return true;
      }
    }
    return false
  };

  console.log(fourIncreasing([5, 1, 2, 3, 4, 6])); // true
  console.log(fourIncreasing([5, 1, 2, 4, 3, 6])); // false
