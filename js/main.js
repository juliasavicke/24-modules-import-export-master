"use strict";
console.log("main.js");

// praktine-1

const htmlEl = {
  pr1Div: document.getElementById("praktine1"),
  pr2Div: document.getElementById("praktine2"),
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
    console.log("userInStorage ===", userInStorage);
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

function initPr2(age) {
  let totalDaysLived = 365 * age;
  const totalDaysLivedEl = document.createElement("h2");
  totalDaysLivedEl.textContent = `${totalDaysLived} days lived.`;
  htmlEl.pr2Div.append(totalDaysLivedEl);

  return totalDaysLived;
}
initPr2(36);
