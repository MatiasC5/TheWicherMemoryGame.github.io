const displayGrid = document.getElementById('grid')

const theWitcherCharacters = [
    {
        name: 'geralt',
        img: './images/geralt.png'
    },
    {
        name: 'ciri',
        img: './images/ciri.png'
    },
    {
        name: 'jaskier',
        img: './images/jaskier.png'
    },
    {
        name: 'yenefer',
        img: './images/yenefer.png'
    },
    {
        name: 'vesemir',
        img: './images/vesemir.png'
    },
    {
        name: 'triss',
        img: './images/triss.png'
    },
    {
        name: 'geralt',
        img: './images/geralt.png'
    },
    {
        name: 'ciri',
        img: './images/ciri.png'
    },
    {
        name: 'jaskier',
        img: './images/jaskier.png'
    },
    {
        name: 'yenefer',
        img: './images/yenefer.png'
    },
    {
        name: 'vesemir',
        img: './images/vesemir.png'
    },
    {
        name: 'triss',
        img: './images/triss.png'
    },
]


theWitcherCharacters.sort(() => 0.5 - Math.random())


let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < theWitcherCharacters.length; i++) {
        const cards = document.createElement('img')
        cards.setAttribute('src', './images/fondo.png')
        cards.setAttribute('data-id', i)
        displayGrid.append(cards)
        cards.addEventListener('click', flipBoard)
    }
}

function flipBoard() {
    const cardId = this.getAttribute('data-id')
    cardsChosenId.push(cardId)
    cardsChosen.push(theWitcherCharacters[cardId].name)
    this.setAttribute('src', `./images/${theWitcherCharacters[cardId].name}.png`)
    if (cardsChosen.length === 2) {
        setTimeout(checkEqual, 500)
    }

}


function checkEqual() {
    const card = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId === optionTwoId) {
        Alert('You have chosen the same image');
        card[optionOneId].setAttribute('src', './images/fondo.png')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        card[optionOneId].setAttribute('src', `./images/${cardsChosen[0]}.png`)
        card[optionTwoId].setAttribute('src', `./images/${cardsChosen[1]}.png`)
        card[optionOneId].removeEventListener('click', flipBoard)
        card[optionTwoId].removeEventListener('click', flipBoard)
        cardsWon.push(cardsChosen)
    }
    else {
        card[optionOneId].setAttribute('src', './images/fondo.png')
        card[optionTwoId].setAttribute('src', './images/fondo.png')
    }
    cardsChosen = []
    cardsChosenId = []

    if (theWitcherCharacters.length / 2 === cardsWon.length) {
        alert('You found them all')
    }
}


createBoard()