
function first() {
    second();
    console.log('첫번째');
}
function second() {
    third();
    console.log('두번째');
}
function third() {
    console.log('세번째');
}
first();


function run() {
    console.log('3초 후 실행');
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');

// 이벤트리스너
// 태스크 큐
// 호출 스택 (콜스택)

//setTimeout, setInterval
//setImmediate,
//Promise resolve, reject
// (async, await)
// 이벤트 리스너의 콜백

 // 어떻게 노드를 서버처럼 동작할 수 있을까
 // 서버 - 요청을 받아서 응답을 하는 것
 // 클라이언트 - 요청보내는 주체
 // 요청은 언제 올지 모른다
 // 마냥 대기할 수는 없고 이럴때 사용하는 것이 이벤트 리스너
 
 // 논블로킹 - 태스크큐로 보내서 실행 순서가 달라지게 하는 것
 // IO - (input/output...) 파일시스템 / 네트워크

 // 싱글스레드 - 동시에 한가지일밖에못함(자바스크립트의 특성)