var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  
  return [element, ...array];
  
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
  const Array = [1];
  
  [element, ...array];
  
  return [element, ...array];
  
}
