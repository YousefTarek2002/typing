const wordText = document.querySelector(".word"),
    score = document.querySelector(".score span"),
    f_score = document.querySelector(".f-score span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word"),
    message = document.querySelector(".message"),
    message_show = document.querySelector(".message-show"),
    end = document.querySelector(".end"),
    contain = document.getElementById("cont"),
    main_cont = document.getElementById("main-cont"),
    fir_cont = document.getElementById("fir-cont"),
    play_again = document.getElementById("play-again"),
    easy = document.getElementById("easy"),
    medium = document.getElementById("medium"),
    hard = document.getElementById("hard");

let total = 0,
    num = 0,
    i = 0,
    n = 0,
    sco = 20,
    f = 0,
    isPaused = false;
let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (!isPaused && maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        message.classList.add('hide');
        i = i + f;
        num = num + 1;
        initGame();
    }, 1000);
}

const initGame = (eo) => {
    if(i === 21){
        contain.classList.remove('hide'),
        main_cont.classList.add('hide'),
        f_score.innerText = total;
        eo.stopPropagation();
        isPaused = true;
    }else {
        initTimer(n);
        let randomObj = words[Math.floor(Math.random() * words.length)];
        let wordArray = randomObj.word.split("");
        wordText.innerText = wordArray.join("");
        score.innerText = total;
        correctWord = randomObj.word.toLowerCase();;
        inputField.value = "";
        inputField.setAttribute("maxlength", correctWord.length);
    }
}
initGame();

const checkWord = (e) => {

    if (num == 9) {
        contain.classList.remove('hide'),
        main_cont.classList.add('hide'),
        f_score.innerText = total + sco,
        e.preventDefault(),
        isPaused = true,
        f = 0;
    }

    let userWord = inputField.value.toLowerCase();
    if (!userWord) {
        message.classList.remove('hide');
        message_show.innerHTML = "Please enter the word to check!";
    }
    if (userWord !== correctWord) {
        message.classList.remove('hide');
        message_show.innerHTML = `Oops! " ${userWord} " is not a correct word`;
    } else {
        total = total + sco,
            num = num + 1;
        message.classList.add('hide');
        initGame();
    }
}

const playAgain = () => {
    fir_cont.classList.remove('hide'),
    contain.classList.add('hide'),
    f = 0;
}

const playEasy = () => {
    fir_cont.classList.add('hide'),
    main_cont.classList.remove('hide'),
    i = 0,
    num = 0,
    n = 30,
    f = 1,
    sco = 1,
    initGame();
}
const playMedium = () => {
    fir_cont.classList.add('hide'),
    main_cont.classList.remove('hide'),
    i = 0,
    num = 0,
    n = 20,
    f = 1,
    sco = 1,
    initGame();
}
const playHard = () => {
    fir_cont.classList.add('hide'),
    main_cont.classList.remove('hide'),
    i = 0,
    num = 0,
    n = 10,
    f = 1,
    sco = 1,
    initGame();
}

end.addEventListener('click', function(){
    fir_cont.classList.remove('hide'),
    main_cont.classList.add('hide'),
    total = 0,
    f = 0,
    num = 0;
})

checkBtn.addEventListener("click", checkWord);
play_again.addEventListener("click", playAgain);
easy.addEventListener("click", playEasy);
medium.addEventListener("click", playMedium);
hard.addEventListener("click", playHard);