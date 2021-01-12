//Array shift: Write a function shift that shifts the elements of array to left or right by n elements in an infinite loop.

//The function receives 3 parameters
// - 1st is an array, 
// - 2nd is the direction ('left' or 'right'), 
// - 3rd is the number of elements which will be shifted. For example,

// > shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
// ['sarah', 'alex', 'john', 'jane']


// > shift([1, 2, 3, 4 ,5], 'right', 3)
//    [3, 4, 5, 1, 2]


const sampleArray = [1, 2, 3, 4, 5];

const direction = "right";

const numShifts = 4;


function shift (sampleArray, direction, numShifts) {

  if(direction === "left" ){
    return shiftLeft(sampleArray, numShifts);
  }else{
    return shiftRight(sampleArray, numShifts);
  }
}

function shiftLeft(sampleArray, numShifts) {

  const rotatedArray = sampleArray.concat();
  for(var i = 0; i < numShifts; i++){
    const frontItem = rotatedArray.shift();
    rotatedArray.push(frontItem);
  }
  return rotatedArray;
}

function shiftRight(sampleArray, numShifts){

  const rotatedArray = sampleArray.concat();
  for(var i = 0; i < numShifts; i++){
    const endItem = rotatedArray.pop();
    rotatedArray.unshift(endItem);
  }
  return rotatedArray;
}

console.log(shift (sampleArray, direction, numShifts));

