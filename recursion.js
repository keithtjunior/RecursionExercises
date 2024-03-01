/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length <= 1) return words[0];
  if (words[0].length > words[1].length) { words.splice(1, 1); return longest(words); }
  else return longest(words.slice(1, words.length));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';
  return str[1] + everyOther(str.slice(2));``
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length === 1) return true;
  let s = str.toLowerCase().replace(/[^a-z0-9+]+/gi, '');
  if(s.charAt(0) === s.charAt(s.length - 1)) 
    return isPalindrome(s.slice(1, -1))
  else return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;
  return findIndex(arr.slice(1), val) + 1 || -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return '';
  return str.charAt(str.length-1) + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      if (Array.isArray(obj[key])) {
        obj[key].forEach(item => {
          gatherStrings(item);
        })
      } else arr.push(...gatherStrings(obj[key]));
    }
    if(typeof obj[key] === 'string')
      arr.push(obj[key]);
  });
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (arr.length === 1) return -1;
  let mid = Math.floor(arr.length-1 / 2);
  if (arr[0] === val) return 0;
  if (arr[mid] === val) return mid;
  if (arr[arr.length-1] === val) return arr.length-1;
  if (arr[mid] > val) {
    return binarySearch(arr.slice(0, mid), val) || -1;
  }else{
    return binarySearch(arr.slice(mid), val) || -1;
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
