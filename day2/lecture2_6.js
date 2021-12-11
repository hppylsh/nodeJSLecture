// 2.ES2018
// rest 문법과 Q&A

const array = ['nodejs', {}, 10, true];
const [node, obj, ...bool] = array;

//...변수는 rest로 여러 개의 변수를 모아서 배열로 만듦

const m = (x,y) => console.log(x,y);

m(5,6);
// 5 6

m(5,6,7,8,9);
// 5 6

const n = (x, ...y) => console.log(x,y)

n(5,6,7,8,9);
//5 [6,7,8,9] -- 배열

// ---- 이전문법 -------
function o() {
    console.log(arguments);
}

o(1,2,3,4,5)
// [1,2,3,4,5] -- 배열이 아님

//-----ES6.ver 문법-------
const p = (...rest) => console.log(rest);

p(5,6,7,8,9)
// [5,6,7,8,9] -- 배열


// --- 객체 참조가 뭔가요
const x = { a:1, b:2 }
let y = x;
// y가 가리키는 값이 x
// x가 바뀌면 y도 바뀜

