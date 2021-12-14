const { odd, even } = require('./lecture3_1_1');
const checkNumber = require('./lecture3_1_2');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

// terminal node day3/lecture3_1_3mo