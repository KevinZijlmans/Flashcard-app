let questions = [['first question', 'first answer'],['second question', 'second answer'],['third question','third answer'],['fourth question','fourth answer'],['fifth questions','fifth answer']]


// Java Script Object Notation
console.log(JSON.stringify(questions))


let card = document.getElementById('flashcard')
let flip = 0
let randomCard = 0
function flipCard() {
    if(flip === 0) {
        flip = 1
        card.innerHTML = questions[randomCard][flip]
        randomCard = Math.floor(Math.random()*questions.length)
    } else {
        flip = 0
        card.innerHTML = questions[randomCard][flip]
    }
}
function input() {
    const question = document.getElementById('question')
    const answer = document.getElementById('answer')
    const questionInput = question.value
    const answerInput = answer.value
    console.log(questionInput, answerInput)
    questions.push([questionInput, answerInput])
    console.log(questions)
}