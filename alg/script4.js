/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  No trailing separator at the end
  Bonus: Default the separator to a comma with a space after it if no separator is provided
*/

// const arr1 = [1, 2, 3]
// const separator1 = ", "
// const expected1 = "1, 2, 3"

// const arr2 = [1, 2, 3]
// const separator2 = "-"
// const expected2 = "1-2-3"

// const arr3 = [1, 2, 3]
// const separator3 = " - "
// const expected3 = "1 - 2 - 3"

// const arr4 = [1]
// const separator4 = ", "
// const expected4 = "1"

// const arr5 = []
// const separator5 = ", "
// const expected5 = ""

// const arr6 = [1, 2, 3]
// separator is not given
// const expected 6 = "1, 2, 3"
function join(arr, separator) {
    // code here
  }
  /*****************************************************************************/
  
  /*
      Book Index
    
      Given an array of ints representing page numbers
      return a string with the page numbers formatted as page ranges when the nums span a consecutive range
    */
  
  // const nums1 = [1, 13, 14, 15, 37, 38, 70];
  // const expected1 = "1, 13-15, 37-38, 70";
  
  function bookIndex(pageNums) {
    // code here
        if(pageNums.length == 0){
            return ""
        }
        var string =""
        for (var i=0; i<pageNums.length-1; i++){
            if(pageNums[i+1] == pageNums[i]+1){
                if(pageNums[i]-1 != pageNums[i-1]){
                    string+=pageNums[i]
                    string+="-"
                }
            }
            else{
                string+=pageNums[i]
                string+=", "
            }
        }
        string+=pageNums[pageNums.length-1]
        return string
    }


var myName = ["firstName", "lastName"];
// note the sep = " ", this is JS's default value syntax
function join(arr, sep = ", ") {
    // if arr is not an instance of an array
    // then we return an empty string as per the specs
    if (!(arr instanceof Array)) {
        return "";
    }
    // initialize the final string to an empty string
    var ret = "";
    // standard for loop for iterating through an array
    for (var i = 0; i < arr.length; i++) {
        // add the array element to the end of the return string
        // equivalent to ret = ret + arr[i]
        ret += arr[i];
        // if i is arr.length - 1, it's the last element of the array
        // so we don't want to add the separator
        if (i < arr.length - 1) {
            // but since it's not arr.length - 1 in this if statement
            // we can add the separator
            ret += sep;
        }
    }
    // we return the actual string
    return ret
}
console.log(join([1, 2, 3],'-'))