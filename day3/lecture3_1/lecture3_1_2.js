
// 3.노드 기능 알아보기
// 노드 모듈 시스템
// lecture3.js와 이어짐

// odd와 even을 다른 페이지에서 불러와서 쓰려면
// 불러와서쓰면 된다

// 비구조화 할당
const { odd, even } = require('./lecture3_1_1');

console.log(odd);
console.log(even);

function checkOddOrEven(num) {
    if(num%2){  //홀수면
        return odd;
    }
    return even;
}

//함수 내보내기
module.exports = checkOddOrEven;

//lecture3 ->lecture3_1