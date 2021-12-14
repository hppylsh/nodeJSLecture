// 3.노드 기능 알아보기
// __filename, __dirname, process

console.log(__filename);
// f:\study\nodejsLecture\day3\lecture3_5.js
console.log(__dirname);
// f:\study\nodejsLecture\day3

// teminal - teminal -> process
// process 객체에는 현재 실행중인 노드 프로그램 정보가 들어있음

/*
> process.version
'v12.22.7'
> process.arch
'x64'
> process.platform
'win32'
> process.pid
23600
-- 현재 실행되고있는 프로세스 아이디
> process.uptime()
192.5415125
-- 프로그램시작된지 얼마나 되었는지 알려줌(초단위)
> process.cwd()
'F:\\study\\nodejsLecture'
-- 프로세스가 어디서 실행되는지
> process.execPath
'C:\\Program Files\\nodejs\\node.exe'
-- 노드가 어디에 설치되어있는지
process.exit()
-- 프로그램 종료
*/

for (let i = 0; i < 100000; i++) {
    console.log(i);
    process.exit()
}



