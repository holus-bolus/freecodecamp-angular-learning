//string

let firstName: string = 'Oleksii';
console.log(firstName);

//number
let age: number = 31;

//Array

let emplist: string[];

emplist = ['John', 'Doe', 'Sean'];

let numlist: Array<number>;

numlist = [1, 2, 3, 4, 5];

//functions

let result = numlist.filter((num) => {
  return num > 2;
});

console.log(result);

//enum
const enum Color {
  red,
  blue,
  green,
}

let colorChoose: Color = Color.blue;

//tuple. tuple has only two numbers

let swapNum: [firstNum: number, secondNum: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num1, num2];
}

swapNum = swapNumbers(10, 20);

//any. Allows to use any type. It's better not to use it

let department: any;

department = 'it';
department = 10;


