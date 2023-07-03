
// pizza toppings
let toppings=[]



// Adding to the array
// direct adding based on index
toppings[0]='peppers'   
// push adds to the end of the array
 toppings.push('pineapples')
 toppings.push('olives')

 toppings.unshift('mushrooms')
console.log (toppings)
// pop removes last value from the array
toppings.pop()
toppings.shift()
console.log(toppings)

/*push/pop - work on the last indexes
unshift/shift -work on index 0, first element
*/

let myNums=[2, 5, 7, 13, 42]
console.log(myNums)
console.log('Remove the 7 from the middle')

// splice to delete and remove the element from array
myNums.splice(2, 1)
console.log(myNums)
// we can also use splice to add element
myNums.splice (2 , 0 , 13)

let array2= [1, 2, 3, 4 , 5, 6]
let slice = array2.slice (1, 4)     //indexes 1-3
console.log(array2)
console.log(slice)

console.log(array2.length)



/* Spread Operator*/
let values =['purple', 'orange' ,'yellow' , 'green']
console.log(values)
console.log (...values)

values.push('red', 'blue', 'brown')
console.log(values)
// similar adding using spread operator ...
let newColors = ['indigo', 'violet']
values.push (...newColors)
console.log(values)