// // cp
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 84;
// const heightJohn = 1.88;

// const markBMI = massMark / (heightMark ** 2);
// const johnBMI = massJohn / (heightJohn * heightJohn);
// console.log(markBMI);
// console.log(johnBMI);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is Greater than John's BMI.`)
// } else {
//     console.log(`John's BMI is Greater than Marks's BMI.`)
// }


// const firstName = "Mohan";
// const age = 24;
// const job = "Trainee"

// const concateString = "I'm " + firstName + ", a " + age + " years " + job + ".";
// console.log(concateString);

// const newString = `I'm ${firstName}, a ${age} years ${job}.`;
// console.log(newString);


// // Assignment 2

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 89) / 3;
// console.log(dolphinsScore, koalasScore);

// if (dolphinsScore > koalasScore) {
//     console.log("Dolphins win the trophy.")
// } else if (koalasScore > dolphinsScore) {
//     console.log("Koalas win the trophy.")
// } else if (dolphinsScore === koalasScore) {
//     console.log("Boh win the trophy.")
// }



// const years = 20;

// const drink = years >= 20 ? "Wine" : "Water";
// console.log(drink)

// console.log(`I wd like to drink ${years >= 20 ? "Wine" : "Water"}`);

// function fruitJuice(carrots, beetroots) {
//     const juice = `A juice with ${carrots} carrots and ${beetroots} beetroots.`;
//     return juice;
// }

// console.log(fruitJuice(1, 2));

// const juices = function (carrots, beetroots) {
//     const juice2 = `A juice with ${carrots} carrots and ${beetroots} beetroots.`;
//     return juice2
// }

// console.log(juices(3, 4))

// const juices2 = (carrots, beetroots) => `A juice with ${carrots} carrots and ${beetroots} beetroots.`;
// console.log(juices2(3, 1))

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

// function fruitJuice(carrots, beetroots) {
//     const carrotPieces = cutFruitPieces(carrots);
//     const beetrootPieces = cutFruitPieces(beetroots);

//     const juice = `A juice with ${carrotPieces} pieces of carrots and ${beetrootPieces} pieces of beetroots.`;
//     return juice;
// }

// console.log(fruitJuice(3, 4));

// // coding challenge 

// const calAvg = (a, b, c) => (a + b + c) / 3;
// console.log(calAvg(30, 40, 50));

// let dolphinsScore = calAvg(44, 23, 71);
// let koalasScore = calAvg(65, 54, 49);
// // console.log(dolphinsScore, koalasScore);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log("No team wins...")
//     }
// }

// checkWinner(dolphinsScore, koalasScore);

// // t2
// dolphinsScore = calAvg(24, 22, 33);
// koalasScore = calAvg(45, 66, 70);

// checkWinner(dolphinsScore, koalasScore)

// let friends = ['Bharat', 'Babu', 'Pavan'];
// console.log(friends);

// const lee = ['Leela', 'Oduri', 2023 - 1998, friends];
// console.log(lee);

// friends[1] = 'Pari';
// console.log(friends);

// const years = [1996, 2000, 1992, 2004];

// const eachAge = function (year) {
//     return 2023 - year;
// }
// const age1 = eachAge(years[1]);
// console.log(age1)
// const age2 = eachAge(years[0]);
// console.log(age2)
// const age3 = eachAge(years[years.length - 1]);
// console.log(age3)


// //ADD
// let friends = ['Bharat', 'Babu', 'Pavan'];
// friends.push('siva', 'venkat', 'srikanth', 'abcd');
// console.log(friends);

// friends.unshift('efgh', 'Mohan');
// console.log(friends);

// //Remove
// friends.pop('abcd');
// console.log(friends);

// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('Pavan'));

// console.log(friends.indexOf('mjkilj'));

// console.log(friends.includes('Mohan'));
// console.log(friends.includes('Pari'));

// //coding 2
// const calTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 456, 45];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, tips)
// console.log(totalBill)

// const profile = {
//     firstName: 'Leela',
//     lastName: 'Oduri',
//     age: 2023 - 1998,
//     friends: ['Bharath', 'Babu', 'Pavan']
// }
// console.log(profile)
// console.log(profile.firstName)
// console.log(profile['firstName'])

// const searchId = prompt('what do you want ? Choose between firstName, lastName, age, friends.')
// if (profile[searchId]) {
//     console.log(profile[searchId])
// } else {
//     console.log('Wrong attempt ! Choose between firstName, lastName, age, friends.')
// }

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calBMI();
// john.calBMI();

// console.log(mark.bmi, john.bmi)

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}).`)

// }

// const years = [1998, 1995, 2001, 2004, 2000];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }
// console.log(ages)

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`rep number ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`rep number is ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`Rolled a dice number ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log(`Loop is about to End.`)
//     }
// }

// // coding 4

// const calTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals)

// const calAvg = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum / arr.length;
// }
// console.log(calAvg([4, 5, 6, 7, 8, 9]));
// console.log(calAvg(totals));
// console.log(calAvg(tips));

// coding 5

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// console.log(`... ${data1[0]}*C ... ${data1[1]}*C ... ${data1[2]}*C ...`);

// const printForecast = function (arr) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         str = str + `${arr[i]}*C in ${i + 1} days ...`;
//     }
//     console.log('...' + str);
// };
// printForecast(data1);