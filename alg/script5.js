/*
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears.
If final result is not shorter (such as "bb" => "b2" ),
return the original string.
  */

const str1 = "aaaabbcddd"
// const expected1 = "a4b2c1d3"

// const str2 = ""
// const expected2 = ""

// const str3 = "a"
// const expected3 = "a"

// const str4 = "bbcc"  // b2c2  -> length is both 4
// const expected4 = "bbcc"

function encodeStr(str) {
    // your code
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
}
console.log(encodeStr(str1))
/*****************************************************************************/

/*
    String Decode
    Given a string, create a function that repeats each letter by the number that follows
    */

// const str1 = "a3b2c1d3";
// const expected1 = "aaabbcddd";

function decodeStr(str) {
    // code here
}

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
    
    return freq;
    };
    
    console.log(getFrequency('aabc'))