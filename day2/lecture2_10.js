// 2.ES2018
// async/await

Users.findOne('zero')
    .then((user) => {
        console.log(user);
        return Users.update('zero', 'nero');
    })
    .then((updatedUser) => {
        console.log(updatedUser);
        return Users.remove('nero');
    })
    .then((removeUser) => {
        console.log(removeUser);
    })
    .catch((err) => {
        console.error(error);
    })
console.log('다 찾았니?');

// 한번 프로미스로 then이나 catch로 넘어가면
// 모든 로직이 then/catch안에서 이루어져야함
// console.log('다 찾았니?');가 먼저 콘솔에 나옴
// 활용도는 높아졌지만 코드가 순서대로 실행되지 않는것은 여전함

async() => {
    try{
        const user = await Users.findOne('zero');
        console.log(user);
        const updatedUser = await Users.update('zero', 'nero');
        console.log(updatedUser);
        const removeUser = await remove('nero');
        console.log(removeUser);

        console.log('다 찾았니?');
    } catch(err) {
        console.error(err);
    }
};

// 하지만 async/await를 사용하더라도 에러처리를 해야함
// try catch를 사용하지 않으면 에러가 발생해도 모르기때문에
// 꼭 사용해주어야함