//2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:

function loopingTriangle() {
    pattern=""
    for (let i = 1; i <= 7; i++) {
        for (let j = 0; j < i; j++) {
          pattern += "#";
        }
        pattern += "\n";
      }
      return pattern
}
 console.log(loopingTriangle())



 //2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

 function sevenRandomNumbers() {
    var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 10) ;
    if(arr.indexOf(r) === -1) arr.push(r);
}
return arr;
}
 console.log(sevenRandomNumbers())


 //2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.


