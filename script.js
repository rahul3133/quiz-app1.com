let username = prompt("Hi, Sir Enter your Name")
const Questions = [{
    'que': "Which type of JavaScript language is ___",
    'a': "Object-Oriented",
    'b': "Object-Based",
    'c': "Assembly-language",
    'd': "High-level",
    'correct': "b"
},
{
    'que': "Which one of the following also known as Conditional Expression:",
    'a': "Alternative to if-else",
    'b': "Switch statement",
    'c': "If-then-else statement",
    'd': "immediate if",
    'correct': "d"
},
{
    'que': "In JavaScript, what is a block of statement?",
    'a': "Conditional block",
    'b': "block that combines a number of statements into a single compound statement",
    'c': "both conditional block and a single statement",
    'd': "block that contains a single statement",
    'correct': "b"
},
{
    'que': "When interpreter encounters an empty statements, what it will do:",
    'a': "Shows a warning",
    'b': "Prompts to complete the statement",
    'c': "Throws an error",
    'd': "Ignores the statements",
    'correct': "d"
},
{
    'que': "Which one of the following is the correct way for calling the JavaScript code?",
    'a': "Preprocessor",
    'b': "Triggering Event",
    'c': "RMI",
    'd': "Function/Method",
    'correct': "d"
}
]

let index = 0;
let total = Questions.length;
let option = document.querySelectorAll(".options")
let ques = document.getElementById("que")
let right = 0,
    wrong = 0;

const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = Questions[index]
    console.log(data)
    ques.innerHTML = `${index + 1}) ${data.que}`;
    option[0].nextElementSibling.innerHTML = data.a
    option[1].nextElementSibling.innerHTML = data.b
    option[2].nextElementSibling.innerHTML = data.c
    option[3].nextElementSibling.innerHTML = data.d
}


let submitQuiz = document.getElementById("submit");
submitQuiz.addEventListener("click", function () {
    const data = Questions[index]
    let ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
})

const getAnswer = () => {
    let answer;
    option.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    option.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementsByClassName("box")[0].innerHTML = `
    <h1 class="resut1">Congruction ${username} You done your quiz contest.</h1><br>
    <hr>
    <h1 class="resut2">You got ${right} point out of ${total}</h1><br>
    <p>We will send your Quiz Certificate very soon by Rahul</p>
    `
}

// initial Call
loadQuestion(index)