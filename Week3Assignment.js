
//Question 1 Subtract the first element in the array from the last, programatatically 
const ages = [ 3, 9, 23, 64, 2, 8, 28, 93];

const firstLast = (arrayAny) => console.log( arrayAny[arrayAny.length - 1] - ages[0]);

firstLast(ages);

ages.push(100); // Push a new number to the array to test if the function works

firstLast(ages);

let sumOfAges = ages.reduce( (accumulator, currentValue) => accumulator + currentValue );

let ageAverage = ( sumOfAges / ages.length);

console.log(ageAverage);



//Question 2, 

const names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names.join(' '));

//Question 3 How do you access the last element of an array?
// You can acces the last element of an array with    array[array.length - 1];

//Question 4 How do you access the first element of an array?
//You can access the first element of an array with    array[0];

//Question 5 make an array of numbers based on array 'names'

const nameLength = [];

for(i = 0; i < names.length; i++){
    lengthName = names[i];
    nameLength.push(lengthName.length); // this pushes the length of each element in 'name' to the array 'nameLength' 
}

console.log( nameLength); 

//Question 6 calculate the sum of all the elements in an array

const initialValue = 0;
const sumOfLengths = nameLength.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue );

console.log( sumOfLengths); // this function now gives the sum of all the lengths in the nameLength array

//Back to Question 2 heres a function that will find the average length of name in array 'names'
const averageLength = ( sumOfLengths / names.length);

console.log(averageLength);


//Question 7 This function returns paramater 'word', 'n' number of time

wordCounter = (word, n) => word.repeat(n);

console.log(wordCounter( 'Hello', 3));


//Question 8 This function returns a full name with a space, given 2 paramters first and last name


const fullName = ( firstName, lastName ) => console.log( firstName + ' ' + lastName);

fullName('James', 'Smith');


//Question 9

function hundredArray(array1){
   let var1 = array1.reduce((accumulator, currentValue) => accumulator + currentValue );
   return var1 > 100;
}

console.log(hundredArray(nameLength));

const test1 = [ 20, 50, 50, 30, 50];

console.log(hundredArray(test1));


//Question 10

function arrayAverage(array2){
    let var2 = array2.reduce((accumulator, currentValue) => accumulator + currentValue );
    console.log( var2 / array2.length);
}

arrayAverage(test1);

arrayAverage(nameLength);

//Question 11

function compareAverage(array3, array4){
    let var3 = array3.reduce((accumulator, currentValue) => accumulator + currentValue );
    let var4 = array4.reduce((accumulator, currentValue) => accumulator + currentValue );
    return var3 > var4;
}

console.log(compareAverage(nameLength, test1));
console.log(compareAverage(test1, nameLength));

//Question 12 

let isHotOutside = "";
let moneyInPocket = "";

function willBuyDrink( isHotOutside, moneyInPocket){
    return ( isHotOutside, ( moneyInPocket > 10.50));
}

console.log( willBuyDrink( true, 13));


//Question 13 a function that gives students encouragement based on their assignment scores
// chose this function for fun and encouragment

let wayToGo = (studentGrade) => {
if( studentGrade >= 90){
    console.log( 'You\'re a coding master!');
}else if (studentGrade >= 80){
    console.log("Excellent work, Keep it up!");
} else if( studentGrade >= 70){
    console.log('Not bad! Keep working hard!');
}else{
    console.log('You\'re doing great work! Continue working hard and it will pay off!');
}
}

wayToGo(92);
wayToGo(84);
wayToGo(75);
wayToGo(43);
