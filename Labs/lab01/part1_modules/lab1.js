import lodash from "lodash";

// Creates an array for holding the holiday objects
const holidays = [
    {name: "Christmas", date: new Date("2025-12-25")},
    {name: "Canada Day", date: new Date("2025-07-01")},
    {name: "April Fools", date: new Date("2025-04-01")},
]

// Sets up variable to hold today's date
let today = new Date();

//Iterates through the holidays array and prints out how many days till X holiday
holidays.forEach(holiday => {
    let dateDifference = holiday.date - today;
    console.log(Math.floor(dateDifference/(1000 * 60 * 60 * 24)) + " days till " + holiday.name);
});

//Prints out a random holiday using Lodash methods
let randomHoliday = lodash.sample(holidays)
console.log("The random holiday is: " + randomHoliday.name + " and it is happening on " + randomHoliday.date )

//Prints the index for Christmas
console.log(lodash.findIndex(holidays, {name: "Christmas"}))

//Prints the index for Canada Day
console.log(lodash.findIndex(holidays, {name: "Canada Day"}))

