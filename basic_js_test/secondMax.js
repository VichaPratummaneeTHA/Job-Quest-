//Second max: Write a function secondMax that receive an array of number. The function will return the second maximum value of the array. If there is no second max, return max instead. If an array is empty, throw and error.

var number = [1, 2 , 3];

function selectMax (arr){

  try { 

    if(arr === "")  throw "empty";
  
    // fiter for max value
    var max = Math.max.apply(null, arr);

    // splice first max value 
    arr.splice(number.indexOf(max), 1);

    // return second max value
    return Math.max.apply(null, arr);
   }
  catch(err) {
    console.log(err);
  }

}

console.log(selectMax (number));