// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => {
  return `Hello, ${name}!`;
};
//greet("Shahad");
console.log(greet("Shahad"));

// Write a simple arrow function that takes two parameters and returns their sum.

const addition = (firstNum, secondNum) => firstNum + secondNum;

console.log(addition(2, 3));

//const funSum = (sum, par1, par2) => {
// return sum(par1 + par2);
//};
//
/*const sum = (par1, par2) => {
  return par1 + par2;
};
console.log(
  funSum(
    (a, b) => {
      return a + b;
    },
    15,
    3
  )
);*/

// Write a simple arrow function that squares a number.

const square = (firstNum) => firstNum * firstNum;
console.log(square(3));

/*const funSqu = (result, par1) => {
  return result(par1 * par1);
};
const result = (par1) => {
  return par1 * par1;
};
console.log(
  funSqu(
    (c) => {
      return c * c;
    },
    3,
    3
  )
);*/
