// 2.ES2018
// 프로미스(Promise) 이해하기

const plus = new Promise((resolve, reject) => {
    const a = 1;
    const b = 2;
    if(a+b > 2){
        resolve(a+b);
    } else {
        reject(a+b);
    }
});
// resolve 성공메세지
// reject 실패메세지

plus 
    .then((success) => {
        console.log(success);
    })
    .catch((fail) => {
        console.error(fail);
    });

// proimse 지원이 되는 함수만 사용 가능
// then에 리턴 값이 있으면 다음 then로 넘어간다
// Promise를 리턴하면 resolve나 reject되어 넘어간다
// ex)

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            reject(message3);
        })
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.log(error);
    });

// reject에서 에러가 걸림