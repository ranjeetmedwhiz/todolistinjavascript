// console.log("This is toturial of async");

// async function hello(){
//     console.log('in side hello function')
//     const response = await fetch('https://api.github.com/users');
//     console.log('before response')
//     const users =await response.json();
//     console.log('users resolve')
//     return users;
// }
// console.log("before calling hello")
// let a = hello();
// console.log('after claiing hello')
// console.log(a);
// a.then(data=>console.log(data))
// console.log('last line of this js file ')
//22222222222222222222222222222222222222222222

// const pobj1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4, 5];
//         // if (resolve) {
//         //     console.log(roll_no)
//         // } else {
//         //     reject('roll_no');
//         // }
//        resolve(roll_no)

//     }, 7000);
// });
// const getBiodata = (indexdata) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((indexdata) => {
//             let biodata = {
//                 name: 'ranjeet',
//                 age: 22
//             }
//             resolve(`my name is${biodata.name}and i am ${biodata.age} years old`);
//         }, 4000, indexdata)
//     })
// }

// async function getData() {
//     const rollnodata = await pobj1;
//     console.log(rollnodata);
//     const biodatas = await getBiodata(rollnodata[1]);
//     console.log(biodatas);
// }
// getData();
//3333333333333333333333333333333333333333333333333333
// async function hello(){
//     console.log('in side hello function');
//     const response = await fetch(`https://api.github.com/users`);
//     var users =  await response.json();
//      // console.log(users);
//     let data1 = users.map(items=>{
//         return (`Name is ${items.login} id is ${items.id} `);
//     })
//     console.log(data1)

//     return users
// }
// const a = hello()
// console.log('outside of hello function ')
// console.log(a);
// a.then(data=>console.log(data));
// console.log('after calling hello function line of js file');
//4444444444444444444444444444444444444444


//  async function hello1()
//  {
//      const response = await fetch (`https://api.github.com/users`);
//      let  users = await response.json();
//      var data1 = users.map(items=>{document.write(`${items.login}<br>`,)} 
     
//      )
     
//  } 
 


