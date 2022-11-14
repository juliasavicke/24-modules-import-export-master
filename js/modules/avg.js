"use strict";
console.log("avg.js");

export default function getAvg(n1, n2, n3) {
  const avg = (n1 + n2 + n3) / 3;
  console.log("avg ===", avg);
  return avg;
}
