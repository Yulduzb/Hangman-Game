const wordElement=document.getElementById("word");
const popupContainer=document.getElementById("popup-container");
const wrongletterElement=document.getElementById("wrong-letters");
const successMessage=document.querySelector(".success-message");
const items=document.querySelectorAll(".item");


const correctLetters=[];
const wrongLetters=[];

const getRandomWords=() => {
    const words = ["html", "css", "javaScript", "react"]
    
    //, "Responsive", 
// "Animation", "Framework", "Interface", "Template", "Browser", "Component",
//  "Front-end", "User", "Mobile", "Design", "Debugging", "Element", "Content",
//   "Layout", "React"]
  return words[Math.floor(Math.random()*words.length)]
}





const selectedWord=getRandomWords();
const displayWords=()=>{
  
    wordElement.innerHTML=`
    ${selectedWord.split('').map(letter =>`<div class="letter">${correctLetters.includes(letter) ? letter: ''}</div>`).join('')}
    
    `
  
   const word=wordElement.innerText.replace(/\n/g,'');
   console.log(word)
   if(word===selectedWord){
    popupContainer.style.display="flex"
    successMessage.innerText = "Congratulations ! You won :)"
   }
}
const updateWrongLetters = ()=>{
    wrongletterElement.innerHTML=`
    ${wrongLetters.map(letter => `<span>${letter}</span>`).join('')}`;




}

window.addEventListener("keydown",function(event){
if(event.keyCode >= 65 && event.keyCode <=90){
   const letter=event.key;
   console.log(letter)

   if(selectedWord.includes(letter)){
      if(!correctLetters.includes(letter)){
        correctLetters.push(letter);
        displayWords();
        console.log(correctLetters)
      }else{
        console.log("harf var")
          }
   }else{
      if(!wrongLetters.includes(letter)){
        wrongLetters.push(letter);
       updateWrongLetters();
      }
    }
}
}
)




displayWords()