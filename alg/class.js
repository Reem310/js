/*
Array: Concat
.push allowed: arrName.push(newItem)
Replicate JavaScript’s concat() which combines two arrays into one NEW array
Input: two arrays
Output: one NEW array with the items of both in the original order
*/

// const arrA1 = ["a", "b"]
// const arrB1 = [1, 2, 3]
// const expected1 = ["a", "b", 1, 2, 3]

// const arrA2 = [1, 2, 3]
// const arrB2 = ["a", "b"]
// const expected2 = [1, 2, 3, "a", "b"]

function concat(arr1, arr2) {
    // your code here
    for(i=0;i<arr.length;i++){

    }
}

// const arrA1 = ["a", "b"]
// const arrB1 = [1, 2, 3]
// concat(arrA1, arrB1)

/* ******************************************************************************** */
// Interview 2020!!
/*
Given one array,
return a new array that contains all of the original items duplicated twice
*/

const arr1 = ["a", "b", "c"];
// const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
// const expected2 = ["a", "a"];

const arr3 = [];
// const expected3 = [];

function concatArrWithSelf(arr) {
    
    for(let i=0 ; i<arr.length*2; i++){
        s=arr[i]
        arr.push(s)
    }
    return arr
}
  const arrA3 = ["a", "b"]
  console.log(concatArrWithSelf(arr1))
