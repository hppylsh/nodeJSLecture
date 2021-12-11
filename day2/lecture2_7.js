// 2.ES2018
// 콜백과 프로미스 비교

//콜백함수 지옥
Users.findOne('zero', (err, user) => {
    if(error){
        return console.error(error);
    }
    console.log(user);
    //콜백 안에 다시 콜백
    Users.update('zero', 'nero', (err, UpdateUser) => {
        if(error){
            return console.error(error);
        }
        console.log(UpdateUser);
        User.remove('nero', (err, removeUser) => {
            if(error){
                return console.error(error);
            }
            console.log(removeUser);
        });
    });
});
console.log('다 찾았니?');

// 노드의 API들이 Promise 기반으로 재편되고 있음

// -----ES6.ver 문법-------
Users.findOne('zero')
    .then((user) =>{
        console.log(user);
        return Users.update('zero', 'nero');
    })
    .then((updateUser) =>{
        console.log(updateUser);
        return Users.remove('nero');
    })
    .then((removeUser) => {
        console.log(removeUser);
    })
    .catch((err) => {
        console.log(error);
    });
console.log('다 찾았니?');