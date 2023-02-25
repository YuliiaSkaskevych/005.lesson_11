const numbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//task 1
const positiveNumbers = numbers.filter(number=>number>0);
const sumPositiveNumbers  = positiveNumbers.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
const countPositiveNumbers = positiveNumbers.length;

//task 2
const minNumber = Math.min(...numbers);
const idxMinNumber = numbers.indexOf(minNumber);

//task 3
const maxNumber = Math.max(...numbers);
const idxMaxNumber = numbers.indexOf(maxNumber);

//task 4
const negativeNumbers = numbers.filter(number=>number<0);
const countNegativeNumbers = negativeNumbers.length;

//task 5
const positiveOddNumbers = numbers.filter(number=>number>0 && number%2!==0);
const countOddPositiveNumbers = positiveOddNumbers.length;

//task 6
const positiveEvenNumbers = numbers.filter(number=>number>0 && number%2===0);
const countEvenPositiveNumbers = positiveEvenNumbers.length;

//task 7
const sumEvenPositiveNumbers  = positiveEvenNumbers.reduce(
    (accumulator, currentValue)=>accumulator+currentValue,0);

//task 8
const sumOddPositiveNumbers  = positiveOddNumbers.reduce(
    (accumulator, currentValue)=>accumulator+currentValue,0);

//task 9
const multPositiveNumbers  = positiveNumbers.reduce(
    (accumulator, currentValue)=>accumulator*currentValue,1);

//task 10
let num1 = numbers.fill(0,idxMaxNumber+1,numbers.length);
let newNumbers = num1.fill(0,0,idxMaxNumber);

alert(`1.Sum of positive numbers: ${sumPositiveNumbers}\r\nCount of positive numbers: ${countPositiveNumbers}
2.Minimal number: ${minNumber}\r\nIndex of minimal number: ${idxMinNumber}
3.Maximal number: ${maxNumber}\r\nIndex of maximal number: ${idxMaxNumber}
4.Count of negative numbers: ${countNegativeNumbers}
5.Count of odd positive numbers: ${countOddPositiveNumbers}
6.Count of even positive numbers: ${countEvenPositiveNumbers}
7.Sum of even positive numbers: ${sumEvenPositiveNumbers}
8.Sum of odd positive numbers: ${sumOddPositiveNumbers}
9.Multiplication of positive numbers: ${multPositiveNumbers}
10.The maximal number: ${maxNumber}\r\nNew array: ${newNumbers}`);
