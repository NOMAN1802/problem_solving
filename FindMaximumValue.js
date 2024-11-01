// find the Find Maximum Value from an array

const FindMaximumValue = (arr) =>{

    if(arr.length === 0) {
      return null
    }
    let maximumValue =  arr[0];
    for(let i = 0 ; i< arr.length; i++){
      if(arr[i] > maximumValue){
        maximumValue = arr[i];
      }
    }
      return maximumValue;
  
  }
  
  console.log(FindMaximumValue([10,3, 7, 2, 5, 9,7,12 ])); 
  console.log(FindMaximumValue([]));