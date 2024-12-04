const questions = [
    {
        question: "Which type of JavaScript language is",
        options: ["High-level", "Assembly-language", "Object-Based", "Object-Oriented"],
        answer: 1
    },
    {
        question: " ما هي عاصمة اليابان",
        options: ["سيدني", "نيودلهي", "بكين", "طوكيو"],
        answer: 3
    },
    {
        question: "عاصمة فينزويلا ",
        options: ["موسكو", "هاڤانا", "براغا ", "كراكاس"],
        answer: 3
    },
    {
        question: " ماهي عاصمة المغرب",
        options: ["طنجة", "مراكش", "الرباط", "فاس "],
        answer: 2
    },
    {
        question: "ما هي عاصمة اليمن",
        options: ["صنعاء", "عمان", "بيروت", "اليمن"],
        answer: 2
    },
    {
        question: "ما هي عاصمة الهند",
        options: ["مومباي", "نيو ديلهي", "كابول", "سيدني"],
        answer: 1
    },
    {
        question: "ما هي عاصمة البرازيل",
        options: ["برازيليا", "ريو دبجانيرو", "هاڤانا", "بنما"],
        answer: 0
    },
    {
        question: "ما هي عاصمة بولندا",
        options: ["ساراييڤو", "ڤيينا", "ميونيخ", "وارسو"],
        answer: 3
    },
    {
        question: " ما هي عاصمة اليونان",
        options: ["أثينا", "أوهريد", "براغ", "كراكوف"],
        answer: 0
    },
    {
        question: "ما هي عاصمة الجزائر ",
        options: ["وهران", "عنابة", "الجزائر", "طرابلس"],
        answer: 2
    }
    ,
    {
        question: "ماهي عاصمة مالي",
        options: ["طهران", "دكار", "باماكو", "أبيدجان"],
        answer: 2
    }
    
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option-btn");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("result");

function loadQuestion(questionIndex) {
    const q = questions[questionIndex];
    questionElement.textContent = q.question;
    options.forEach((option, index) => {
        option.textContent = q.options[index];
    });
    resultContainer.style.display = "none";
}

function checkAnswer(optionIndex) {
    if (optionIndex === questions[currentQuestion].answer) {
        score++;
        resultText.textContent = "صحيح";
    } else {
        resultText.textContent = "خطأ";
    }
    resultContainer.style.display = "block";
}

function loadNextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        alert(`لقد إنتهيت ! حصلت على : ${score}/${questions.length}`);
        resetQuiz();
    } else {
        loadQuestion(currentQuestion);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
