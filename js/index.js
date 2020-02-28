let year = prompt('Enter year');

while (year.length > 4 || isNaN(year)) {
    alert('Year is not correct');
    year = prompt('Enter year');
 }

 yearNum = parseInt(year);

 if ((year % 4 === 0 && year % 100 != 0) || year % 400 ===0) {
     alert('Leap year');
 } else {
     alert('Normal year');
 }
 


 
 
