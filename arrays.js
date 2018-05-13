var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  chocolateBars = [`${element}, ...chocolateBars`]
}
function destructivelyAddElementToBeginningOfArray(array, element){
chocolateBars.unshift(`${element}`);
}
function addElementToEndOfArray(){
chocolateBars = [...chocolateBars, "tacos"]
}
function destructivelyAddElementToEndOfArray(){
  chocolateBars.unpush("tacos");
}
function accessElementInArray(array, index){
  console.log(chocolateBars[2]);
}
