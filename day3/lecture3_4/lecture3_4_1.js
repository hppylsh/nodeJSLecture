// 3.노드 기능 알아보기
// 타이머(setTimeout, setInterval, setImmediate)

// setTimeout, setInterval로 설정
// cleartimeout, clearInterval로 해제

const timeout = setTimeout(() => {
    console.log('1.5초후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실헹');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
}, 3000);
// 3초만에 시작되기 전에 2.5초전에 clear되어버림

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

//clearTimeout(timeout);
//clearInterval(interval);
