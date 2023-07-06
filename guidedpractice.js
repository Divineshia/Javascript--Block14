/* Practice 1) create an array to include the following list items: Honda, Toyota, Ford, Subaru.
use array methods to transform it to:

["Hyundai", "Toyota", "Mercedes", "Ford", "Audi"]
*/
let carNames= ["Honda" , "Toyota" , "Ford" , "Subaru"];
console.log ("Old cars are "+carNames);
carNames.shift();  //removing first element from array
carNames.unshift("Hyundai");  // adding first element 
carNames.splice(2, 0,"Mercedes");  // removing middle element
/*
// i) Removing last element using slice 
carNames.splice(4,1,"Audi"); 
// ii) Removing last element using pop and push
*/
carNames.pop()
carNames.push("Audi")
console.log ("New cars are " +carNames);
/*Output is Old cars are Honda,Toyota,Ford,Subaru
New cars are Hyundai,Toyota,Mercedes,Ford,Audi
*/


/* Practice 
2) Using loops, count how many "e"s are in the sentence
*/
let sentence ="There once was a donkey named Eeyore. "
let countE= 0;
for( i=0 ; i< sentence.length ; i ++)
{ if( sentence[i] ==='e'  ||  sentence[i]==='E' ){
    countE++;
}
// there is no else statement 
}
console.log("No of 'e' in the sentence is " +countE);


/*
Practice 3) Combine the three arrays into a single array:
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const newArray = [...array1, ...array2, ...array3];
console.log(newArray);

// const newArray = [...array1 + ...array2 + ...array3]; - Error
// the below 2 shows array as [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// const newArray = [array1, array2, array3];
// const newArray = [array1 + array2 + array3];


/*
Practice 4) what method can we use to permanently remove the leter "f" at index 3.
*/
const alphabet = ["a", "b", "c", "f", "d", "e"];
alphabet.splice(3,1);
console.log (alphabet);
// Rssult is [ 'a', 'b', 'c', 'd', 'e' ] on using slice