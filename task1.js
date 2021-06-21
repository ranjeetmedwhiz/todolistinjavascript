var arry = [

    { emp_id: 123, emp_name: 'ranjeet', emp_addres: 'bhopal', emp_no: 124332323 },
   
    { emp_id: 234, emp_name: 'kumar', emp_addres: 'katni', emp_no: 2342424242 },
    { emp_id: 476, emp_name: 'jayswal', emp_addres: 'satana', emp_no: 33222223 },
    { emp_id: 123, emp_name: 'ranjeet', emp_addres: 'bhopal', emp_no: 124332323 },
    { emp_id: 123, emp_name: 'ranjeet', emp_addres: 'bhopal', emp_no: 124332323 },
    { emp_id: 123, emp_name: 'ranjeet', emp_addres: 'bhopal', emp_no: 124332323 },
    { emp_id: 123, emp_name: 'ranjeet', emp_addres: 'bhopal', emp_no: 124332323 },
    { emp_id: 123, emp_name: 'ranjeet', emp_addres: 'bhopal', emp_no: 124332323 },
    { emp_id: 476, emp_name: 'prasanta', emp_addres: 'karanataka', emp_no: 42342423243 }
    


]



// function removeDuplicateObjectFromArray(a, b) {
//     return a.filter((obj, index, self) =>
//         index === self.findIndex((el) => (
//             el[b] === obj[b]
//         )
//         )
//     )

// }
// //console.log(removeDuplicateObjectFromArray(arry, 'emp_id'))

///4333333333333333333333333333333
// function removeDuplicateObjectFromArray(a, b) {
//     return a.filter((obj, index, self) => {
//         //console.log(JSON.stringify(obj));
//         console.log(JSON.stringify(index));
//         //console.log(JSON.stringify(self));


//     }
//         // index === self.findIndex((el) => (
//         //     el[b] === obj[b]
//         // ) )
//     )

// }

// //console.log(removeDuplicateObjectFromArray(arry, 'emp_id'))
// var hello = removeDuplicateObjectFromArray(arry, 'emp_id');
// //document.write(JSON.stringify(hello))


//44444444444444444444444444444444444444444








let unique = [...new Set(arry.map(item => {
   return (`${item.emp_id}  ${item.emp_name} ${item.emp_addres}`)
   //console.log(JSON.stringify(item));

}))]

console.log(unique)
//9888888888888888888888888989999999999999


//54544444444444444444444444444444444444444
// function removeDuplicateObjectFromArray(array, key) {
//     var check = new Set();
//     return array.filter(obj => !check.has(obj[key]) && check.add(obj[key]));
//   }

//   console.log(removeDuplicateObjectFromArray(arry, 'emp_id'))

//22222222222222222222222222222222222222222222222222
// function removeDuplicateObjectFromArray(a, b) {
//     var check = {};
//     var res = [];
//         a.forEach(element => {
//         if(!check[element[b]]) {
//             check[element[b]] = true;
//             res.push(element);
//         }
//     });
//     return res;
// }

// console.log(removeDuplicateObjectFromArray(arry, 'emp_name'))
///4444444444444444444444444444444444444444












//777777777777777777777777777777777777777777777
// var uniqueArray = arry.reduce((filter, current) => {
//     var data = filter.find(item => item.emp_name === current.emp_name);
//     if (!data) {
//       return filter.concat([current]);
//     } else {
//       return filter;
//     }
//   }, []);

//  console.log(uniqueArray)


