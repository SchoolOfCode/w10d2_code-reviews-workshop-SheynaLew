function wave(str) {
  for (i=0, i<str.length, i++) {
    let newStr = str.charAt(i.toUppderCase);
    console.log(newStr);
  }

  //go through the array, converting one letter at a time to a capital and back again
    //use a for loop on the string 
    //create a second variable to equal the first string but with a letter capitalised. 
      //str.charAt(i).toUpperCase + str.Slice(i+1)  
        //this capitalises the letter and then adds it to the word
    //push the new string into an array
    //if there is whitespace, the for loop needs to skip it
      //if i=" " i++ else do the above
      //Maybe need to use str.split to seperate each word? and then .join to join the array with " " to maintain the whitespace?

}
wave("hello world")
export default wave;
