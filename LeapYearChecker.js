const isLeapYear = (year) => {
    // Check the leap year conditions
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return `${year} is a leap year! Happy New Year 🎉`;
    } else {
      return `${year} is not a leap year.`;
    }
  }
  
  
  const year = 2024;
  console.log(isLeapYear(year));  
  