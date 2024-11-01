const people = [
    { name: "Shirmin", age: 25, gender: "female" },
    { name: "Mustakim", age: 28, gender: "male" },
    { name: "Maria", age: 27, gender: "female" },
    { name: "Noman", age: 30, gender: "male" },
    { name: "Sheak Hasina", age: 77, gender: "female" }
  ];
  
 
  const getMaleNames =(peopleArray) => {
    return peopleArray
      .filter(person => person.gender === "male")  
      .map(person => person.name);                
  }
  
 
  const maleNames = getMaleNames(people);
  console.log(maleNames);
  