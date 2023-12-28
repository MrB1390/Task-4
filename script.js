const array = [21, 3, 5, 7, 6, 10,121,7];
const k = 2;
const k2 = 3;
const array2 = [12,23,58,41,81,96,55,11]
const oddnumbers1 = []
const oddnumbers2 = []
const sum = 0;
const array1 = ["g","u","v",'i'];
const capital = []
const capital1 = []
const prime =[]
const prime1 =[]
const palindrome1 =[]
const palindrome2 =[]
const Dup = []
const m1 = [2,3,4,5,6];
const m2 = [7,8,9,4,5];


// Anonymous Function
console.log("Anonymous Function");
// 1
const oddnumbers = function(arr) {
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] % 2 !== 0) {
            oddnumbers1.push(arr[ind])
        }
    }
}

oddnumbers(array);
console.log("odd numbers are",oddnumbers1)
//2
const caps = function(arr1) {
    for (let ind1 = 0; ind1 < arr1.length; ind1++) {
        capital.push(arr1[ind1].toUpperCase()) ;
    }
}

caps(array1);
console.log(capital)
//3
const sumofnumbers = function(arr1,sum1) {
    for(let ind1 = 0; ind1 < arr1.length; ind1++){
          sum1 += arr1[ind1];
          }
          console.log("sum of all numbers", sum1)
}

sumofnumbers(array,sum);
//4
const primenumbers = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2) {
            isPrime = false;
        } else {
            for (let j = 2; j <= arr[i] / 2; j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            prime.push(arr[i]);
        }
    }
    console.log("Prime numbers are",prime)
};

primenumbers(array);
//5
const isPalindrome = (str) => str === str.split('').reverse().join('');
const palindrome = function(arr){
   for(let ind = 0; ind < arr.length; ind++){
    if(isPalindrome(String(arr[ind]))){
        palindrome1.push(arr[ind])
    }
   }
   console.log("palindromes are",palindrome1)
};
palindrome(array);
//6
const duplicates = function(arr){
     console.log("Duplicates removed ",[...new Set(arr)]);
}
duplicates(array);
//7
const rotated = function(arr, k){
    const len = arr.length;
    const rotations = k % len;
    const rotated = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log("Rotated",rotated)
}
rotated(array, k);
//8
const median = function(arr1,arr2){
    const length = arr1.length;
    let i = 0, j = 0;
    let mid1, mid2;
    for (let count = 0; count <= length; count++) {
        mid1 = mid2;
        if (i !== length && (arr1[i] < arr2[j])) {
            mid2 = arr1[i];
            i++;
        } else {
            mid2 = arr2[j];
            j++;
        }
    }
    return (mid1 + mid2) / 2;
};
median(m1,m2);
const result = median(m1,m2);
console.log("Median",result);

// IIFE (Immediately Invoked Function Expression)
console.log("IIFE (Immediately Invoked Function Expression)");
(function(arr) {
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] % 2 !== 0) {
            oddnumbers2.push(arr[ind])
        }
    }
    console.log("Odd numbers are",oddnumbers2);
})(array);
// 2 
(function(arr1){
    for(let ind1 = 0; ind1 < arr1.length; ind1++){
        capital1.push(arr1[ind1].toUpperCase()) ;
    }
    console.log(capital1);
})(array1);
//3
(function(arr1,sum1){
    for(let ind1 = 0; ind1 < arr1.length; ind1++){
        sum1 += arr1[ind1]
    }
    console.log("sum of all numbers", sum1)
})(array,sum);
//4
(function(arr){
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2) {
            isPrime = false;
        } else {
            for (let j = 2; j <= arr[i] / 2; j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            prime1.push(arr[i]);
        }
    }
    console.log("Prime numbers are",prime1)
})(array);
//5
(function(arr){
    for(let ind = 0; ind < arr.length; ind++){
        if(isPalindrome(String(arr[ind]))){
            palindrome2.push(arr[ind])
        }
       }
       console.log("palindromes are",palindrome1)
    })(array);
//6
(function(arr){
    for(let ind = 0; ind < arr.length; ind++){
        if(isPalindrome(String(arr[ind]))){
            palindrome2.push(arr[ind])
        }
       }
       console.log("palindromes are",palindrome2)
    })(array);
//7
(function(arr){
    console.log("Duplicates removed ",[...new Set(arr)]);
})(array);
//8
(function(arr,k2){
    const len = arr.length;
    const rotations = k2 % len;
    const rotated = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log("Rotated",rotated)
})(array,k2);
//9
(function(arr1,arr2){
    const length = arr1.length;
    let i = 0, j = 0;
    let mid1, mid2;
    for (let count = 0; count <= length; count++) {
        mid1 = mid2;
        if (i !== length && (arr1[i] < arr2[j])) {
            mid2 = arr1[i];
            i++;
        } else {
            mid2 = arr2[j];
            j++;
        }
    }
    return(
        console.log("Median",(mid1 + mid2) / 2))
})(m1,m2)

