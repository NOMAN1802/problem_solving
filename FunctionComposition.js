// Function to square a number
const square =(num)  =>{
    return num * num;
  }
  
  // Function to double a number
  const double =(num) => {
    return num * 2;
  }
  
  // Function to add 5 to a number
  const addFive = (num) => {
    return num + 5;
  }
  
  //Compose the functions into a new function
  const composedFunction =(num) =>{
    // Apply the functions in the specified order
    return addFive(double(square(num)));
  }
  
  
  const result = composedFunction(2); 
  console.log(result);
  