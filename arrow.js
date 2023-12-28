//Arrow Functions
const array3 = [12,13,78,52]
const array4 = ['g','e','e','k']
const oddnumbers3 = []
const capital2 = []
const sum1 = 0;
const prime3 =[]
const palindrome3 =[]

console.log("Arrow Function");
//1
const oddarrownumbers = (arr) => {
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] % 2 !== 0) {
            oddnumbers3.push(arr[ind])
        }
    }
}

oddarrownumbers(array3);
console.log("odd numbers are",oddnumbers3)
//2
const capsarrow = (arr1) => {
    for (let ind1 = 0; ind1 < arr1.length; ind1++) {
        capital2.push(arr1[ind1].toUpperCase()) ;
    }
}

capsarrow(array4);
console.log(capital2)
//3
const sumarrownumbers = (arr1,sum1) => {
    for(let ind1 = 0; ind1 < arr1.length; ind1++){
          sum1 += arr1[ind1];
          }
          console.log("sum of all numbers", sum1)
}

sumarrownumbers(array3,sum1);
//4
const primearrownumbers = (arr) => {
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
            prime3.push(arr[i]);
        }
    }
    console.log("Prime numbers are",prime3)
};

primearrownumbers(array3);
//5
const isPalindrome1 = (str) => str === str.split('').reverse().join('');
const palindromearrow = (arr) => {
   for(let ind = 0; ind < arr.length; ind++){
    if(isPalindrome1(String(arr[ind]))){
        palindrome3.push(arr[ind])
    }
   }
   console.log("palindromes are",palindrome3)
};
palindromearrow(array3);