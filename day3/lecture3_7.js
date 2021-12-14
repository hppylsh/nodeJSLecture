// 3.노드 기능 알아보기
//*******path 모듈(노드 내장모듈)

/*

> path.sep
'\\'
-- 경로 구분
> path.delimiter
';'
-- 환경변수 구분자

-- 운영체제마다 다르므로 정보를 알려줌
*/

const { Console } = require('console');
const path = require('path');
// 경로
console.log(path.dirname(__filename));
// 확장자
console.log(path.extname(__filename));
// 파일명
console.log(path.basename(__filename));
/**
f:\study\nodejsLecture\day3
.js
lecture3_7.js
 */
console.log(path.parse(__filename));
//분해
/**
{
  root: 'f:\\',
  dir: 'f:\\study\\nodejsLecture\\day3',
  base: 'lecture3_7.js',
  ext: '.js',
  name: 'lecture3_7'
}
 */

//합체
console.log(path.format({
    root: 'f:\\',
    dir: 'f:\\study\\nodejsLecture\\day3',
    base: 'lecture3_7.js',
    ext: '.js',
    name: 'lecture3_7'
}));
//f:\study\nodejsLecture\day3\lecture3_7.js

// 주소 잘못쳤을때
console.log(path.normalize('f:///study\\nodejsLecture\\day3\\\\lecture3_7.js'))
//f:\study\nodejsLecture\day3\lecture3_7.js

// 경로
console.log(path.isAbsolute('C:\\'));
// true
// ./현재 폴더 상대 경로
// ../ 부모 폴더 상대 경로
// / 루트 절대경로

// 상대경로
console.log(path.relative('f:\study\nodejsLecture\day3\lecture3_7.js', 'f:\\'));
//..\..\..

console.log(__dirname);
//f:\study\nodejsLecture\day3
console.log(path.join(__dirname, '..', 'day3', 'lecture3_1'))
//f:\study\nodejsLecture\day3\lecture3_1
// path.join - 절대경로 무시하고 합침

console.log(path.resolve(__dirname, '..', '..', '/users'))
//f:\users
// path.resolve - 절대경로 고려하고 합침





