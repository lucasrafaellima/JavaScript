const grid = document.querySelector('.grid')

const characters = [

    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy'

]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''
let secondCard = ''

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length === 20) {
        alert('Parabens, voce conseguiu!')
    }
}

const checkCards = () => {
    const firstcharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')
    
    if (firstcharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard = ''

        checkEndGam()

    } else {
        setTimeout(() =>{
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard = ''
        }, 500)
    }
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkCards()

    }

    target.parentNode.classList.add('reveal-card')   
}

const createCard = (character) => {

    const card = document.createElement('div', 'card')
    const front = document.createElement('div', 'face front')
    const back = document.createElement('div', 'face back')

    front.style.backgroundImage = `url('images-memory/${character}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card
}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters]

    const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5)



    shuffledArray.forEach((character) => {

        const card = createCard(character)
        grid.appendChild(card)

    })
}

loadGame()