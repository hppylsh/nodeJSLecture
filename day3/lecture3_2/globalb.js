const A = require('./globala');

global.message = '안녕하세요';
console.log(A());

// global은 모든파일에서 사용가능하기때문에
// 값을담아서 잘 사용하지 않음