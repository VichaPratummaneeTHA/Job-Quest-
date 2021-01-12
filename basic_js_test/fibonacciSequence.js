//Fibonacci Sequence: Write a function fib that return the value of n-th order of fibonacci sequence.
// In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones:

function fib (n){
  var output = [];

  if(n === 1){
    output = [0];
  }else if ( n === 2){
    output = [1];
  }else{
    output = [0, 1];

    for(var i = 2; i < n; i++){
      output.push(output[output.length-2] + output[output.length-1]);
    }
  }

  return output;
}

output = fib(4);

console.log(output);