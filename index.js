var moment = require("moment"); // require
moment().format();

var dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();

console.log("Hello!");

console.log(moment().startOf("day").fromNow());
console.log(moment().endOf("day").fromNow());
console.log(dayjs().format("{YYYY} MM-DDTHH:mm:ss SSS [Z] A"));

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

console.log(square(2, 4, 7.5, 8, 11.5, 21));
