// 2.ES2018
// 객체 리터럴의 변화

// --------옛날 문법-------
var sayNode = function() {
    console.log('Node');
}

var es = 'ES';
var oldObject = {
    sayJS : function() {
        console.log('JS');
    },
    sayNode: sayNode,
};

oldObject[es + 6] = 'Fantastic';

oldObject.sayJS();
// JS

console.log(oldObject.ES6);
// Fantastic 





// -----ES6.ver 문법--------
const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6] : 'Fantastic',
};

// sayJS:function() { 을 sayJS()로 표시할 수 있습니다.
// 키와 값(변수)가 같은경위 {data : data, hello:hello}를 {data, hello}로 간단하게 표시 가능
// 동적으로 변수가 들어간 키를 변경할 때 객체 안에서 한번에 쓸 수 있게 바뀜