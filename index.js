var moment = require("moment"); // require
moment().format();

console.log("Hello!");

console.log(moment().startOf("day").fromNow());
console.log(moment().endOf("day").fromNow());
