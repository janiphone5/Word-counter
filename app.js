const input = document.getElementById("input-box");
const btn = document.getElementById("btn");
const allWords = document.getElementById("all-words");
const allChars = document.getElementById("all-chars");
const firstWord = document.getElementById("first-word");
const frequentChar = document.getElementById("frequent-char");
const errorMsg = document.getElementById("error-message");


function getAllWords() {
  const inputValue = input.value;
  let words = inputValue.split(" ");
  allWords.innerHTML = input.value ? `All words: <b>${words.length}</b>` : "All words: Empty";
  
  const chars = inputValue.length;
  allChars.innerHTML = `All characters: <b>${chars}</b>`;
}

function mostFrequentsWords() {
  const inputValue = input.value;
  const words = inputValue.split(/[\s\.,!?]+/);
  let obj= {};
  let firstWordInArray = [];
  let firstWordCounter = 0;
  words.forEach((item) => {
    if (item.length < 4) {
      return;
    
    
    }
    if(!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
    if (obj[item] === firstWordCounter) {
    firstWordInArray.push(item);
      
    }else if(obj[item] > firstWordCounter) {
      firstWordCounter = obj[item];
      firstWordInArray = [item];
    }
    
    
  });
  
    firstWord.innerHTML = input.value ? `Most frequent word: <b>${firstWordInArray}</b>: <b>${firstWordCounter}</b>` : "Most frequent word: Empty";
    
    
  
}

function getMostFrequentChar() {
  let inputValue = input.value;
  inputValue = inputValue.replace(/[^A-Za-z]+/g, '');
  let obj = {};
  let mostfrequentChar = "";
  let mostfrequentCharCounter = 0;
  let chars = Array.from(inputValue);
  let result = chars.forEach((item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
    if(obj[item] > mostfrequentCharCounter) {
      mostfrequentCharCounter = obj[item];
      mostfrequentChar = [item];
    }
  });
  frequentChar.innerHTML = `Most frequent letter: <b>${mostfrequentChar}</b>: <b>${mostfrequentCharCounter}</b>`;
}

btn.addEventListener('click', function() {
    
  getAllWords();
  mostFrequentsWords();
  getMostFrequentChar();
});

