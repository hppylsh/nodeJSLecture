// 2.ES2018
// 화살표 함수

//-----이전

// 함수선언문
function add1(x, y){
    return x+y;
}

// 함수 표현식
var add2 = function(x, y){
    return x+y;
}

// -----ES6.ver 문법-------
// 화살표 함수
const add3 = (x, y) => { return x+y; }

// 함수의 내용이 return 밖에 없는 경우 더 줄일 수 있다.
const add4 = (x, y) => (x+y);
// 혹은
const add5 = (x, y) => x+y;

// fucntion 과 화살표 함수의 다른점은
// this의 동작이 다름

var relationship1 = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends : function() {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();
//zero nero
//zero hero
//zero xero

var relationship2 = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();
// 화살표 함수는 함수내부의 this를 외부의 this와 같게 만들어줌
// this를 that으로 바꾸는 작업을 하지 않아도 된다.
//zero nero
//zero hero
//zero xero

