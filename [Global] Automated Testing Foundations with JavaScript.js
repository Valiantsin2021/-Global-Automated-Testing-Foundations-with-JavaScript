//Conditional Statements and Data Types//

/*Perform addition of various types (string + boolean, string + number, number + boolean)
Perform multiplication of various types (string * boolean, string * number, number * boolean)
Divide different types (string / boolean, string / number, number / Boolean)
Perform explicit conversion (number, string, boolean)
*/

alert("1" + true);
alert("25" + 2);
alert(5 + true);

alert("34" * false);
alert("22" * 2);
alert(5 * false);

alert("3" / false);
alert("6" / 2);
alert(8 / false);

alert(Boolean("str"));
alert(Boolean(""));
alert(Number("123"));
alert(String(123));

//Objects and Functions//

//Create a car object, add a color property to it with the value equals 'black'//

let car = {
    color: "black",
};

//Change the color property of the car object to 'green'//

car.color = "green";

//Add the power property to the car object, which is a function and displays the engine power to the console//

car.power = function() {
    console.log('230hp');
}

/*Pears and apples are accepted to the warehouse, write a function 
that returns the result of adding the number of accepted pears and apples*/

function fruitCount (apples, pears) {
    apples = prompt("write number of apples");
    pears = prompt("write number of pears");
    return (alert(+apples + +pears));
}

fruitCount()

/*Your name is saved in the payment terminal, write a function to define the name in the terminal 
(if you entered your name, then hello + name, if not, then there is no such name)*/

function nameTerminal(name) {
    if(name) {
        alert("Hello " + name);
    }
    else {
        alert('There is no such name')
    }
}

nameTerminal('Oleg');

//Write a function for calculating the type of argument and type output to the console//

function argumentType (argument) {
    console.log(typeof(argument));
}
argumentType("sdf")

// Write a function that determines whether a number is prime or not//

function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return (console.log(false));
    }
    return (console.log(true));
};

isPrime(7);

//Arrays and Cycles//

/*Given an array consisting of movie names, iterate over the array with the output 
of the names of each movie to the console*/

let movies = ["terminator", "rambo", "robocop"];
for (let movie of movies) {
    console.log(movie);
}

//Given an array of car manufacturers, convert the array to a string and back to an array//

let carManufacturers = ['ford', 'bmw', 'opel'];
let string = carManufacturers.toString();
alert(string);
carManufacturers = string.split(",");
alert(carManufacturers);

//Given an array of the names of your friends, add the words hello to each element of the array//

let names = ['oleg', 'pedro', 'pablo'];
names.forEach((n, i, a) => a[i] += ' hello ');
alert(names);

//Convert numeric array to Boolean//

let numeric = [1, 2, 0, 4];
boolNumeric = [];
for (num of numeric) {
  boolNumeric.push(Boolean(num));
};
alert(boolNumeric);

//Sort the array [1,6,7,8,3,4,5,6] in descending order//

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
};

let unsorted = [1,6,7,8,3,4,5,6];
unsorted.sort(compareNumeric)
alert(unsorted);

//Filter array [1,6,7,8,3,4,5,6] by value> 3//

let sortedThree = unsorted.filter(item => item > 3);
alert(sortedThree);

/*Write a function that takes two parameters - an array and a number and outputs the 
index of an array element equal to a number*/

let arr =  [1,6,7,8,3,4,5,6];

function equal(arr, num) {
    for(n of arr) {
        if(n === num) {
            alert(arr.indexOf(n));
        }
    }
}
equal(arr, 5);

//Implement a loop that will print the number 'a' until it is less than 10//

let a = 0;
while(a<10) {
    alert(a);
    a++;
}

//Implement a loop that prints prime numbers to the console//

let b = +prompt("introduce a number");

for (let i = 2; i < b; i++) {
    if ( b % i == 0) continue;
  
    else alert(b);
}

//Implement a loop that prints odd numbers to the console//

for (let n = 0; n < 5; n++) {
    if (n % 2 == 0) continue;
    else alert(n); 
  }

  //Prototype and Inheritance, Classes, Constructor//

  /*Create 2 objects: animal and cat, add move property to animal object, 
  cat object must inherit move property from object animal */

  let animal = {
    move: true
};
let cat = {
  meow: true
};
cat.__proto__ = animal;
alert(cat.move);

//String, RegExp, DataTime//

/*Given the string 'ahb acb aeb aeeb adcb axeb'. 
Write a regular expression that matches the strings ahb, acb, aeb 
by pattern: letter 'a', any character, letter 'b'*/

let str = 'ahb acb aeb aeeb adcb axeb';
alert(str.match(/a.b/g));

//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest//

let string1 = '2 + 3 223 2223';
alert(string1.match(/\d \+\ \d/));

//Get the day, month and year of the current date and output it to the console separately//

let date = Date();
alert(date.match(/\b\d\d\b/));
alert(date.match(/\b \w{3}\b/));
alert(date.match(/\d{4}/));

//Exception handling//

/*In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - 
‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'*/


try {
    console.log (a);
    let a = 3;
} catch(err) {
    alert("let must be declared before use " + err);
}
function div(a, b) {
	if (b !== 0) {
		return a / b;
	} else {
		throw new Error('cannot be divided by zero');
	}
};

try {
	alert(div(1, 0));
} catch (error) {
	alert('you are trying to divide by zero ' + error);
}