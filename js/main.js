// importuoti {ka} from 'iskur'
// named export import
import { username as uname, town } from "./modules/vars.js";
import susumuoti from "./modules/sum.js";
import vidurkis from "./modules/avg.js";
import getData from "./modules/fetch.js";
import initPr2 from "./uzd.js";
// default export import
import user from "./modules/vars.js";

console.log(`main.js`);

console.log("uname ===", uname);
console.log("town ===", town);

console.log("user.name ===", user.name);

console.log("user ===", user);

const a = 10;
const b = 140;
const c = 9;

susumuoti(a, b);
vidurkis(a, b, c);
getData();
initPr2(22);
