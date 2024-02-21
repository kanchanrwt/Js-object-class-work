let newDate = new Date(3020,9,31,0,1,1,100);
console.log(newDate);

let year = newDate.getFullYear();
console.log(`The year is ${year}`);

let month = newDate.getMonth();
console.log(`the month is ${month}`);

let date = newDate.getDate();
console.log(date);

let day = newDate.getDate();
console.log(day);

let hours = newDate.getHours();
console.log(`the hours are ${hours}`);

let minutes = newDate.getMinutes();
console.log(`the minutes are ${minutes}`);

let seconds = newDate.getSeconds();
console.log(`the minutes are ${seconds}`);

let milliseconds = newDate.getMilliseconds();
console.log(`the milliseconds are ${milliseconds}`);

let now = Date.now();
console.log(`the total milliseconds passed are: ${now}`);

newDate.setFullYear(3000);
console.log();
newDate.setMonth(1);
newDate.getDate(7);
newDate.getHours(8);
newDate.getMinutes(12);























