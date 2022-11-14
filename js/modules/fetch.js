"use strict";
console.log("fetch.js");

function getFetched(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .catch((err) => console.warn("klaida getFetched", err));
}

export default function getData() {
  const url = "https://reqres.in/api/users?page=1";
  return getFetched(url).then((data) => console.log("data ===", data.data));
}
