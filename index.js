let questions = ['first question', 'first answer']
let card = document.getElementById('flashcard')
let flip = 0
console.log(flip)
function flipCard() {
    if(flip === 0) {
        card.innerHTML = questions[flip]
        flip = 1
        console.log(flip)
        return flip
    }
}
card.onclick = flipCard()
console.log(flip)