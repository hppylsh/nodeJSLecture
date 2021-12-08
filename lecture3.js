//const 와 let

if(true){
    var x = 3;
}
console.log(x)
//3

if(true){
    const y = 3;
}
// const로 선언 시 변수는 영역밖으로 나갈 수 없음

const a = 0;
a = 1;
// 에러
// const는 값을 바꿀 수 없음
let b = 0;
b = 1;
// let은 변수의 값을 바꿀 수 있음

var d;
//가능
const e;
// 에러

const g = {a:1, b:2, c:3};
g.a=3;
g.b=5;
// 단 const의 객체는 값을 바꿀 수 있다.
