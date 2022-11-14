"use strict";
console.log("main.js");

// praktine-1

const htmlEl = {
  pr1Div: document.getElementById("praktine1"),
  pr2Div: document.getElementById("praktine2"),
  pr3Div: document.getElementById("praktine3"),
};

function initPr1() {
  const user = {
    firstName: "Julia",
    lastName: "Savicke",
    desc: "Some text...",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQFEGHFzk3GjnQ/profile-displayphoto-shrink_400_400/0/1633943298807?e=1674086400&v=beta&t=azyYVL_QC6-1mW63zDdGv2SQyik96o1wJiTcNFlYYHw",
  };
  const userInStorage = localStorage.getItem("user");

  if (userInStorage !== null) {
    const userDivEl = document.createElement("div");
    userDivEl.className = "card";
    userDivEl.innerHTML = `
    <h2>${user.firstName} ${user.lastName}</h2>
    <p>${user.desc}</p>
    <img src=${user.img}></img>
    `;
    htmlEl.pr1Div.append(userDivEl);
  } else {
    console.log("user not found");
    localStorage.setItem("user", JSON.stringify(user, null, 2));
  }
}
initPr1();

// praktine-2

export default function initPr2(age) {
  let totalDaysLived = 365 * age;
  const totalDaysLivedEl = document.createElement("h2");
  totalDaysLivedEl.textContent = `${totalDaysLived} days lived.`;
  htmlEl.pr2Div.append(totalDaysLivedEl);

  return totalDaysLived;
}
initPr2(36);

// praktine-3

function getFetched(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .catch((err) => console.warn("klaida getFetched", err));
}

function getData() {
  const url = "https://randomuser.me/api/";
  return getFetched(url).then((data) => data.results);
}
function renderList(data) {
  const userDivEl = document.createElement("div");
  userDivEl.className = "card userDiv";
  //   userDivEl.innerHTML = `
  //     <h2>${data.name.title} ${data.name.first} ${data.name.last}</h2>
  //     <p>Age: ${data.dob.age}</p>
  //     <p>Email: ${data.email}</p>
  //     <img src=${data.picture.large}></img>
  //     `;
  htmlEl.pr3Div.append(userDivEl);
  //  top div for image
  const topDivEl = document.createElement("div");
  topDivEl.className = "top";
  const imgEl = document.createElement("img");
  imgEl.src = data.picture.large;
  topDivEl.append(imgEl);
  //  bottom div for text
  const bottomDivEl = document.createElement("div");
  bottomDivEl.className = "bottom";

  // append top and botttom
  userDivEl.append(topDivEl, bottomDivEl);
  //   name h2 element
  const h2NameEl = document.createElement("h2");
  h2NameEl.textContent = `${data.name.title} ${data.name.first} ${data.name.last}`;
  const h3AgeEl = document.createElement("h3");
  h3AgeEl.textContent = `${data.dob.age} years old`;
  const pEmailEl = document.createElement("p");
  pEmailEl.textContent = `Email: ${data.email}`;

  bottomDivEl.append(h2NameEl, h3AgeEl, pEmailEl);
}

function initPr3() {
  let userData = "";
  getData().then((data) => {
    userData = data[0];
    console.log("userData ===", userData);
    renderList(userData);
  });
}

initPr3();
