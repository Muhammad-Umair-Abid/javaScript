// // 1. Closure function to add a specific number to another specific number.


// function add(num) {
//     return function (yourNum) {
//         console.log(yourNum + num)
//         console.log(yourNum + " is adding to " + num)
//     }
// }

// let innerFunction = add(10)

// let yourNum = +prompt("enter any number to add 10 on it")
// innerFunction(yourNum);



// // 2. Recursive function to find a value in an array.

// let found = false;

// function find(dataArr , number) {  // array and the searching value provided in agruments.

//     if(dataArr.length === 0) {   // 1st chech if the array is empty or not,
//         found = false;
//     } else if ( dataArr[0] === number ) {  2nd simple chech the array's 1st value is equal to user's number
//         found = true;  // if the array's 1st value is equal to user's number then set the val of found as true.

//     }    //   if the array's 1st value is not equal to user's number then run the function arr.shift() on array and keep the recursion go on.
//     return dataArr.shift() , number
// }

// let dataArr = [1, 8, 10, 13, 11, 17, 6, 14, 9, 12];

// let number = +prompt("Enter a number to find")

// find(dataArr,number);

// console.log(found);



// // 3. Add a paragraph element with DOM and add a paragraph in it.


// let p = document.getElementById('para');
// function addPara (){  // this function only runs when the button having "addPara()" function, clicked

//     let para = prompt('Enter Text to add');
//     p.style.position = 'absolute';
//     p.style.right = '50%';
//     p.style.bottom = '10px';
//     p.innerText =  para;
//     alert('Done')
// };




// // 4. Add a list element with DOM and add a paragraph in it.


// function addList() {  // this function only runs when the button having "addList()" function clicked
//     let listText = prompt('Enter an Item to add to the list')
//     let list = document.getElementById('list');
//     let newItem = document.createElement('li');
//     let textNode = document.createTextNode(listText);

//     newItem.appendChild(textNode);
//     list.appendChild(newItem)
//     console.log("DONE : " + listText );

// }





// // 5. crete a function that change background colour of an element of HTML.


// function changeColor() {
//     let element = prompt(" Enter an Element to change it's colour ");
//     let color = prompt("Enter a colour name");

//     document.querySelector(element).style.backgroundColor = color ;
//     console.log(element + ":" + color);
// }





// // 6. Write a function that can store an object in to local storage.

// let usersArr = []
// let user = {}

// function store() {
//     let userName = prompt("Enter any name");
//     let userAge = +prompt("Enter your age");
//     let userClass = prompt("Enter your Class name");

//     user.name = userName;
//     user.age = userAge;
//     user.class = userClass;

//     usersArr.push(user);
// }

// function storeInLocal(name , data) {
//     localStorage.setItem(name, JSON.stringify(data))

//     console.log(user)
// }

// storeInLocal("users", usersArr );



// // 7. Write a function that can get the object from local storage.

// function retriveData(key) {

//     let data = localStorage.getItem(key);

//     let usersArr = data ? JSON.parse(data) : [];

//     console.log(usersArr);

// };



// // 8. Write a function that takes anobject and save it in local storage (object's properties as key & object's value as value).


// let user1 = {
//     name: 'Atif',
//     email: 'a@a.com',
//     age: 20,
//     cellNo: +92008815121
// };

// function setData(user) {

//     let previousData = localStorage.length
//     if (previousData === 0) {

//         for (let keys in user) { // for in loop returns the all keys of object
//             localStorage.setItem(keys, user[keys]) // in this step : all the keys found were store to local askeys and its value as value

//             // console.log(keys + " : " + user[keys] )        
//         }
//         console.log("Data Stored in localStorage");

//     } else {
//         console.log("Data Alraedy Found");
//     }

//     let localStorageData = {};
//     localStorageData.name = localStorage.getItem('name')
//     localStorageData.email = localStorage.getItem('email')
//     localStorageData.age = localStorage.getItem('age')
//     localStorageData.CellNo = localStorage.getItem('cellNo')

//     console.log(localStorageData)

//     // console.log(Object.keys(user));
//     // console.log(Object.values(user));

// };

// setData(user1);






