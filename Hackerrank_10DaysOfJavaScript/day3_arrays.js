/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
const nums = [2, 3, 6, 6, 5];
function getSecondLargest(nums) {
  // Complete the function
  let largest = nums[0];
  let secondLargest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    }
    if (nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i];
    }
  }
  //   console.log(largest);
  //   console.log(secondLargest);
  return secondLargest;
}

getSecondLargest(nums);
