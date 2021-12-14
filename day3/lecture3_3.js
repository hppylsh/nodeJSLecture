// 3.노드 기능 알아보기
// console 객체

// teminal - node > console

const string = 'abc';
const number =  1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value',
        },
    },
};

console.time('전체 시간');

console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);
// abc 1 true
console.log('에러 메시지는 console.error에 담아주세요');

// 객체 전용 로그 console.dir
console.dir (obj, { colors : false, depth : 2 });
// { outside: { inside: { key: 'value' } } }
console.dir (obj, { colors : true , depth : 1 });
// { outside: { inside: [36m[Object][39m } }

console.time('시간측정');
for(let i=0; i < 100000; i++){
    continue;
}
console.timeEnd('시간측정');
// 시간측정: 11.143ms
console.timeEnd('전체 시간');
// 전체 시간: 17.143ms

function b() {
    //호출 스택 추적
    console.trace('에러 위치 추적');
}
/*
Trace: 에러 위치 추적
    at b (f:\study\nodejsLecture\day3\lecture3_3.js:41:13)
    at a (f:\study\nodejsLecture\day3\lecture3_3.js:44:5)
    */
//어떤 함수의 경로를 거쳐서 오는지 확인 가능

function a() {
    b();
}
a();

console.timeEnd('전체 시간');