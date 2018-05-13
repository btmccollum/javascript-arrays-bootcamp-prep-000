var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  "array" = [`${element}, ...${array}`]
}
function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(`${element}`);
}
function addElementToEndOfArray(){

}
function destructivelyAddElementToEndOfArray(){
  array.unpush("tacos");
}
function accessElementInArray(array, index){
  console.log(chocolateBars[2]);
}
