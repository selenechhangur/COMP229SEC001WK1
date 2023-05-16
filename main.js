//import { halfOf, multiply } from "/lib.js";
//console.log(halfOf(84));
//console.log(multiply(42, 2));

//function sum1(a, b) {
//  return a + b;
//}
//let result = sum1(1, 2);
//console.log(result);

//const sum1 = (a, b) => {
//  return a + b;
//};
//let result = sum1(1, 2);
//console.log(result);

//const sum1 = (a, b) => a + b;
//let result = sum1(1, 2);
//console.log(result);

//How LET and CONST work
//function reinitConst() {
//  let me = 1;
//  console.log(me);
//  me = 2;
//  console.log(me);
//}
//reinitConst();

//Default Value
//function add(x, y = 0) {
//  console.log(x + y);
//}
//add(1);
//add(1, 2);

//Rest
//function userFriends(user, ...friends) {
//  console.log(user + " has " + friends.length + " friends");
//}
//userFriends("User", "Bob", "Alice", "Cal");

//Spread - turns array into call argument
//function userTopFriends(firstFriend, secondFriend, thirdFriends) {
//  console.log(firstFriend);
//  console.log(secondFriend);
//  console.log(thirdFriends);
//}
//userTopFriends(...["Alice", "Bob", "Michelle"]);

//Closures
function parent() {
  const message = "Hello World";
  function child() {
    alert(message);
  }
  child();
}
parent();
