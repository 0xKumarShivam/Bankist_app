'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);



/////////////////////////////////////////////////
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



movements.forEach(function(movement, index, array){
  if (movement > 0){console.log(`movement ${index + 1} : you have deposited ${movement}`);
} else {console.log(`movement ${index + 1} : you have withdrew ${Math.abs(movement)}`);
}
})*/


//coding challenge 1

//test data 1
// let juliaArr = [3,5,2,12,7];
// let kateArr = [4,1,15,8,3];

//test data 2
let juliaArr = [9,16,6,8,3];
let kateArr = [10,5,6,1,4];
    

const checkDogs = function(juliaArr, kateArr) {
  
  juliaArr.splice(-2); 
  juliaArr.splice(0,1);
  let dogsJulia = [...juliaArr]; 

  const dogsOfBoth = [...dogsJulia,...kateArr];
  //or use concat

  dogsOfBoth.forEach(function(age, i){
    if (age >= 3){console.log(`Dog number ${i+1} is an adult, and is ${age} years old `)}
    else {console.log(`Dog number ${i+1} is still a puppy 🐶`)};
  })
}

checkDogs(juliaArr, kateArr);





//.map

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1

const movementToUSD = movements.map(function(mov) {
  return mov * euroToUSD;
})

// const movementToUSD = movements.map(mov =>  mov * euroToUSD);
console.log(movementToUSD);
console.log(movements);


//.filter
const withdrawals = movements.filter(function(mov){
  return mov < 0;
})

console.log(withdrawals);


//.reduce
const balance = movements.reduce(function(acc, crr, i, arr){
  return acc + crr;
}, 0); //0 initial balance hai

console.log(balance);



//coding challenge 2

let testData1 = [5,2,4,1,15,8,3];
let testData2 = [16,6,10,5,6,1,4];

// const calcAverageHumanAge = function (ages){
// const humanAges = ages.map(age => (age <= 2 ? age*2 : 16 + 4*age));

// const adults = humanAges.filter(age => age >= 18);
// console.log(humanAges);
// console.log(adults);

// const average = adults.reduce((acc, age) => acc + age, 0)/ adults.length;
// console.log(average);
// return average;

// };

// calcAverageHumanAge(testData1);
// calcAverageHumanAge(testData2);



//coding challenge 3
//use of chaining
const calcAverageHumanAge = ages => ages
.map(age => (age <= 2 ? age*2 : 16 + 4*age))
.filter(age => age >= 18)
.reduce((acc, age, i, arr) => acc + age/arr.length, 0)

const avg1 = calcAverageHumanAge(testData1);
const avg2 = calcAverageHumanAge(testData2);

console.log(avg1, avg2);


//.fill method

const x = new Array(7);
x.fill(1, 0, 6); //end parameter is also not included here
console.log(x);


//Array.from method
//challenge
//arr for 100 random dice roll
const deiceRoll = Array.from({length : 100}, (_) => Math.trunc(6*Math.random()+1));
console.log(deiceRoll);



//coding challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

//recommendedFood = weight ** 0.75 * 28

//1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

console.log(`Sarah's dog is  eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`)

//or

// if(dogSarah.curFood >= 0.9*dogSarah.recFood && dogSarah.curFood <= 1.1*dogSarah.recFood){console.log(`optimum food provided`)} else if(dogSarah.curFood > 1.1*dogSarah.recFood){console.log('eating too much')} else if (dogSarah.curFood < 0.9*dogSarah.recFood ){console.log('less food provided')};

//3
const ownersEatTooMuch = dogs
.filter(dog => dog.curFood >= dog.recFood)
.flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
.filter(dog => dog.curFood <= dog.recFood)
.flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4
console.log(`Dogs of ${ownersEatTooMuch.join(' and ')}'s eats too much`);
console.log(`Dogs of ${ownersEatTooLittle.join(' and ')}'s eats too little`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6 okay amount 
console.log(dogs.some(dog => dog.curFood >= 0.9*dog.recFood && dog.curFood <= 1.1*dog.recFood))

//7
const eatOkayAmount = dogs
.filter(dog => dog => dog.curFood >= 0.9*dog.recFood && dog.curFood <= 1.1*dog.recFood)
.flatMap(dog => dog.owners);

console.log(eatOkayAmount);

//8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);


const now = new Date();
console.log(now);