const wordElement = document.getElementById("word");
const popupContainer = document.getElementById("popup-container");
const wrongletterElement = document.getElementById("wrong-letters");
const successMessage = document.querySelector(".success-message");
const items = document.querySelectorAll(".item");
const playAgainBtn = document.querySelector(".play-again");


let correctLetters = [];
let wrongLetters = [];

const getRandomWords = () => {
    const words = ["html", "css", "javaScript", "react", "angular"]
    return words[Math.floor(Math.random() * words.length)]
}





let selectedWord = getRandomWords();


const resetGame = () => {
    correctLetters = [];
    wrongLetters = [];
    selectedWord = getRandomWords();
    displayWords();
    updateWrongLetters();
    popupContainer.style.display = "none";
    successMessage.innerText = "";
    items.forEach((item) => {
        item.style.display = "none"
    });
}


const displayWords = () => {

    wordElement.innerHTML = `
    ${selectedWord.split('').map(letter =>
        `<div class="letter">${correctLetters.includes(letter) ? letter : ''}</div>`).join('')}
    
    `
    const word = wordElement.innerText.replace(/\n/g, '');

    if (word === selectedWord) {
        popupContainer.style.display = "flex"
        successMessage.innerText = "Congratulations ! You won :) "
    }
}



const updateWrongLetters = () => {
    wrongletterElement.innerHTML = `
    ${wrongLetters.map(letter => `<span>${letter}</span>`).join('')}`;

    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;

        if (index < errorCount) {
            item.style.display = "block"
            if (errorCount === 6) {
                popupContainer.style.display = "flex"
                successMessage.innerText =
                    `Unfortunately you lost  :(  Not found term: ${selectedWord}`
            }
        } else {
            item.style.display = "none"
        }
    })


}

window.addEventListener("keydown", function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        const letter = event.key;


        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWords();

            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters();
            }
        }
    }
}
)


playAgainBtn.addEventListener("click", resetGame)

displayWords()


const fruits=["elma", "armut"];
fruits.push("kivi");
console.log(fruits);