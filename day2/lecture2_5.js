// 2.ES2018
//비구조화 할당(destruncturing)

//-- 객체의 비구조화 할당
var candyMachine = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy : function() {
        this.status.count;
        return this.status.count;
    }
};

// ---- 이전문법 -------
var status = candyMachine.status;
var getCandy = candyMachine.getCandy;

// -----ES6.ver 문법-------
const { status, getCandy } = candyMachine;
// 속성에서 변수를 꺼내올 수록 효율이 좋아짐


// 비구조화 할당 시 this가 의도와 다르게 동작하는 현상이 있을 수 있다.
candyMachine.getCandy();
//4

const { getCandy } = candyMachine;

getCandy();
// undefined

// getCandy가 호출될 때 this를 candyMachine으로 인식하는데
// candyMachine과 분리가 되면 this를 찾지 못하는 현상이 발생함

getCandy.call(candyMachine);
//2

//-- 배열의 비구조화 할당

var array = ['nodejs', {}, 10, true];

// ---- 이전문법 -------
var node = array[0];
var obj = array[1];
var bool = array[array.length - 1];

// -----ES6.ver 문법-------
const [node, obj, , bool] = array;

