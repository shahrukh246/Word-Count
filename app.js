function countWords(sentence) {
 
    var words = sentence.trim().split(' ');
      
    let wordCount = 0;
    
    for (let i = 0; i < words.length; i++) {
    
      if (words[i] !== '') {
        wordCount++;
      }
    }
  
    return wordCount;
  }
  
  var userInput = prompt("Enter a sentence:");
  
  var totalWords = countWords(userInput);
  
  alert("The total number of words in the sentence is: " + totalWords);