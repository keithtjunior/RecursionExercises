/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/*
    product([1, 2, 3])
    1 * product([2, 3]);
        2 * product([3]);
            3 * product([3]);
                1
*/

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length <= 1) return words[0];
  if (words[0].length > words[1].length) { words.splice(1, 1); return longest(words); }
  else return longest(words.slice(1, words.length));
}

/*
    longest(['abc', 'ab', 'abcdef', 'abcd'])
        'abc' > 'ab' 
            longest(['abc', 'abcdef', 'abcd', ])
                'abc' >  'abcdef' 
                    longest(['abcdef', 'abcd'])
                          'abcdef' > 'abcd'
                                longest(['abcdef'])
                                    'abcdef'
*/

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';
  return str[1] + everyOther(str.slice(2));``
}

/*
    everyOther('abcdef')
      a + everyOther(['cdef'])
          c + everyOther(['ef'])
              e + everyOther(['ef'])
                  ''
*/

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length === 1) return true;
  let s = str.toLowerCase().replace(/[^a-z0-9+]+/gi, '');
  if(s.charAt(0) === s.charAt(s.length - 1)) 
    return isPalindrome(s.slice(1, -1))
  else return false;
}

/*
    isPalindrome('abcba')
      a === a 
            isPalindrome('bcb')
            b === b 
                  isPalindrome('c')
                  c 
*/


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;
  return findIndex(arr.slice(1), val) + 1 || -1;
}

// ['a', 'b', 'c', 'd'], 'c'
/*
    findIndex(['a', 'b', 'c', 'd'])
        val === 'a' 
            findIndex(['b', 'c', 'd']) +1
                val === b 
                    findIndex(['c', 'd']) +1 
                        val === c 
                            0 +1 +1
*/


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return '';
  return str.charAt(str.length-1) + revString(str.slice(0, -1));
}

/*
    revString(['abcde'])
         'e' + revString(['abcd'])
              'e' + 'd' + revString(['abc'])
                  'e' + 'd' + 'c' + revString(['ab']) 
                        'e' + 'd' + 'c' + 'b' + revString(['a']) 
                              'e' + 'd' + 'c' + 'b' + 'a' + revString([''])+
                                    'e' + 'd' + 'c' + 'b' + 'a' + ''

*/

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

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  new: {
    name: 'gold'
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  },
  element: 'gold'
};

console.log(product([1,2,3,4,100]));
console.log(longest(['a', 'abcdefg', 'abcd', 'abcde', 'abcdefgh', 'abc', 'abcdef', 'ab', '']));
console.log(longest(['geeks', 'for', 'geeks', 'a', 'portal', 'to', 'learn', 'can', 'be', 'computer', 'science', 'zoom', 'yup', 'fire', 'in', 'be', 'data', 'geeks']));
console.log(isPalindrome('Red roses run no risk, sir, on Nurse\'s order.'));
console.log(findIndex(['people','my','than','first','did','been','call','who','oil','its','now','find','long','down','day','water','get','come','made','may','part'], 'water'));
console.log(gatherStrings({one: 'one', two: 2, three: 'three', four: 4, five: 'five'}));
console.log(gatherStrings(nestedObj));
console.log(binarySearch([ 1, 5, 12, 13, 20, 25, 26, 27, 33, 34, 35, 37, 46, 51, 52, 61, 64, 65, 74, 79, 81, 88, 90, 95, 97], 52));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13], 4));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13], 15));

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
