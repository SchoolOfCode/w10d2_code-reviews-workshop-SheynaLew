function wave(str) {
  let waveStrArray = [];
  for (let i=0; i<str.length; i++) {
    let letter = str[i];
    //console.log(letter);
    if (letter ===" ") {
      continue;
    } else {
      letter.toUpperCase();
      console.log(letter);
    }
    // let newStr = str.charAt(i).toUpperCase;
    // console.log(newStr);
  }

  //go through the array, converting one letter at a time to a capital and back again
    //use a for loop on the string 
    //separate each letter curently selected by the for loop into a variable (use let so you can recycle te variable)
    //if there is whitespace, the for loop needs to skip it
        //if the letter variable is empty, continue
      //capitalise the letter variable and push into the empty array
      




//This was almost right but not quite:
//create a second variable to equal the first string but with a letter capitalised. 
//str.charAt(i).toUpperCase + str.Slice(i+1)  
//this capitalises the letter and then adds it to the word
 //push the new string into an array
 //Maybe need to use str.split to seperate each word? and then .join to join the array with " " to maintain the whitespace?
//if i=" " i++ else 
}
export default wave;