
// 1) Only Odds
// let inputArr = [2, 4, 6, 8, 11, 20, 15, 22]
// let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let inputArr = [70, 42, 55, 81, 21, 91, 34]
let inputArr = [2, 4, 6, 8, 10, 11, 12] 
let answer =[ ] //any odd values should go in here

for(let i=0; i< inputArr .length; i++) {
console.log (inputArr[i])
if( inputArr [ i]% 2 !==0){
// pushing odd number into answer
answer.push (inputArr[i])
}
}
console.log ('Answer: ', answer)


// 2) Vowel vs Consonant
let vowels = ["a", "e", "i", "o", "u"];
let consonants = 0;
let vowelscount = 0; 
// let inputWord ="hello";
// let inputWord ="ukelele";
// let inputWord ="onomonopia";
// let inputWord ="awesome";
let inputWord ="textbook";

//i) using include method 
for( let i=0 ;  i<inputWord.length ;i++)
{
    if (vowels.includes(inputWord[i])){
        vowelscount++;
    }
    else{consonants++;}
}
// ii) using OR operator for comaprison 
{
    if ((inputWord [i]==='a') || 
    (inputWord[i]==='e')||
    inputWord[i]=== 'i'||
    (inputWord[i]=== 'o')|| 
    (inputWord[i]==='u'))
    {
        vowelscount++;
    }
    else{
   consonants++;
}
}
console.log(`${inputWord} has  ${consonants} consonants and  ${vowelscount} vowels`);


/* 3) Reverse Array 
using two variables
*/
// let initialArr=[1, 2, 3];
// let initialArr=[1, 3, 5, 7, 9, 11];
// let initialArr=[20, 50, 30, 60, 200];
let initialArr=[1, -1, 2, -3, 5, -8, 13];
let revArr= [ ];
// i) using unshift method- unshift adds an element to beginning of an array
for(i=0; i< initialArr.length; i++)
{
    revArr.unshift(initialArr[i]);
}
console.log(revArr);


// ii) using push method- adds an element to end of an array
for(let i= initialArr.length-1; i>=0 ; i--)
{
    revArr.push(initialArr[i]);
}
console.log(revArr);



/* 4) FizzBuzz 
Create code that prints each number from 1 to 100 on a new line.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/
for (let i = 1; i<=100; i++)
{
    if ((i %3 ===0) && (i%5 ===0)){
        console.log("FizzBuzz");
    }git 
    else if (i %3 ===0){
        console.log("Fizz");
    }
    else if (i %5 ===0){
        console.log("Buzz");
    }
    else {
      console.log(i)
    }
}
