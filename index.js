let data = {
    questions: [['first question', 'first answer'],['second question', 'second answer'],['third question','third answer'],['fourth question','fourth answer'],['fifth questions','fifth answer']]
}
// Getting our localStorage on!
// let getData = JSON.parse(localStorage.getItem('storeObj'))
// data = getData
// Here we create a function that randomly shows the questions on the flashcard with the right answers after.
let card = document.getElementById('flashcard')
let flip = 0
let randomCard = 0
function flipCard() {
    if(flip === 0) {
        flip = 1
        card.innerHTML = data.questions[randomCard][flip]
        randomCard = Math.floor(Math.random()*data.questions.length)
    } else {
        flip = 0
        card.innerHTML = data.questions[randomCard][flip]
    }
}
//this function creates our input data!
function input() {
    const question = document.getElementById('question')
    const answer = document.getElementById('answer')
    const questionInput = question.value
    const answerInput = answer.value
    data.questions.push([questionInput, answerInput])
    question.value = null
    answer.value = null
    storeLocal()
}
//this is our local storage function!
function storeLocal() {
    localStorage.setItem('storeObj', JSON.stringify(data))
    let getData = JSON.parse(localStorage.getItem('storeObj'))
    data = getData
}

