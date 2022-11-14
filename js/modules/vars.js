"use strict";
console.log("vars.js");

// named export
export const username = "Mike";
export const town = "Jordan";

const user = {
  name: "James",
  age: 25,
};

function sayHi() {
  console.log("hello");
}

sayHi();

// default export
export default user;
