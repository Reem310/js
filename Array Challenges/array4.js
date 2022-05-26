function reverse(arr) {
    // your code here
    for (var i=0;i<arr.length/2;i++){
        var temp = arr[i];
        arr[i] =  arr[arr.length-1 - i]; 
        arr[arr.length-1 - i] = temp;
      }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]