// 2.ES2018
// 프로미스(Promise) API

const promise = new Promise((res), (rej) => {
    res('성공');
});

// 무조건 성공하는 promise
const successPromise = Promise.resolve('성공');
// 무조건 실패하는 promise
const failurePromise = Promise.reject('실패');


Promise.all([User.findOne(), USers.remove(), USers.update()])
    .then((results) => {})
    .catch((error) => {})
// all에 담긴 모든 프로미스가 모두 성공해야 results로 넘어감
// 하나라도 실패하면 error

// 한마디정리 - promise 결과값을 가지고 있지만 
// .then이나 .catch를 붙이기 전까지 반환하지않음

// callback의 경우 함수가 실행되며 바로 결과부분이 이어져야함
Users.findOne('zero', (err, user) => {
    console.log(user);
})
// promise는 중간에 다른 로직을 실행 후 
let zero = Users.findOne('zero');
zero = Users.findOne('nero');

//다른로직
//다른로직

zero.then((z) => {
    console.log(z);
});