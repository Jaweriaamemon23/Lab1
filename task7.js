let reverseString = function(string) {
    return string.split('').reverse().join('');
};

let inputString = "Hello, World!";
let reversed = reverseString(inputString);
console.log(reversed);