

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!*/


const inputElement = document.getElementById('name');
const formElement = inputElement.parentElement;
// console.log(formElement);

// console.log(inputElement);

formElement.addEventListener("submit",(e)=>{
e.preventDefault();
let inputValue = inputElement.value;
// console.log(inputValue);

let inp=inputValue.split('\n');
// console.log(inp);


for (let [index,name] of Object.entries(inp)){
  // console.log(name)
  // index++;
  // console.log(index)
  
 let trimInp=name.trim().toLowerCase();
  // console.log(trimInp)
  // console.log(trimInp.split("_"));
 let [first_name,last_name]=trimInp.split("_");
 let camelName=first_name+last_name[0].toUpperCase()+last_name.slice(1);
//  console.log(last_name[0].toUpperCase());
// console.log(camelName);
camelName.padEnd(20," ")+"✅".repeat(index);
// console.log(camelName.padEnd(20," ")+"✅".repeat((index)+1)); 

console.log(camelName.padEnd(20," ")+"✅".repeat(Number(index)+1)); 
// console.log(camelName.padEnd(20,"*"));

 }
//  console.log( trimInp.split("_"))
//  console.log(last_name)


// }

// trimInp=inp.trim();
// console.log(trimInp)
// inputValue[0]
// console.log(inputValue[0]);

// console.log(inputValue.trim());
/* 
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

})


