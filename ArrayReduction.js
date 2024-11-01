// Step 1: Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 2: Write a function to sum all even numbers
const sumEvenNumbers =(arr)  =>{
  return arr.reduce((sum, num) => {
    // Check if the number is even
    if (num % 2 === 0) {
      return sum + num; 
    }
    return sum; 
  }, 0); 
}

// Step 3: Test the function
const result = sumEvenNumbers(numbers);
console.log(result);
