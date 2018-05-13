var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  
  return [element, ...array];
  
}

function destructivelyAddElementToBeginningOfArray(array, element){

const array = [1]

return array.unshift(element);
  
}
