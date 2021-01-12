//FizzBuzz...But: You may heard FizzBuzz task. Here we have the same rule. You will write a function fizzBuzz that receive a single parameter it will return the value base on these rule
// If the input is divisable by 3, return 'Fizz'
// If the input is divisable by 5, return 'Buzz'
// If the input is divisable by both 3 and 5, return 'FizzBuzz'

var output = [];

function FizzAndBuzz (count){

  for(var i=0; i < count; count-- ){
    if(count % 3 === 0 && count % 5 === 0){
      output.push("FizzBuzz");
    }else if(count % 3 === 0){
      output.push("Fizz");
    }else if (count % 5 === 0){
      output.push("Buzz");
    }else{
      output.push(count);
    }
  }
  return output;
}

console.log(FizzAndBuzz(50));
