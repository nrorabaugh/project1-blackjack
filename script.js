let deck = [
    {rank: 2, suit: 'Clubs', val: 2, img: 'cards/2C.jpg'},
    {rank: 3, suit: 'Clubs', val: 3, img: 'cards/3C.jpg'},
    {rank: 4, suit: 'Clubs', val: 4, img: 'cards/4C.jpg'},
    {rank: 5, suit: 'Clubs', val: 5, img: 'cards/5C.jpg'},
    {rank: 6, suit: 'Clubs', val: 6, img: 'cards/6C.jpg'},
    {rank: 7, suit: 'Clubs', val: 7, img: 'cards/7C.jpg'},
    {rank: 8, suit: 'Clubs', val: 8, img: 'cards/8C.jpg'},
    {rank: 9, suit: 'Clubs', val: 9, img: 'cards/9C.jpg'},
    {rank: 10, suit: 'Clubs', val: 10, img: 'cards/10C.jpg'},
    {rank: 'Jack', suit: 'Clubs', val: 10, img: 'cards/JC.jpg'},
    {rank: 'Queen', suit: 'Clubs', val: 10, img: 'cards/QC.jpg'},
    {rank: 'King', suit: 'Clubs', val: 10, img: 'cards/KC.jpg'},
    {rank: 'Ace', suit: 'Clubs', val: 11, img: 'cards/AC.jpg'},
    {rank: 2, suit: 'Hearts', val: 2, img: 'cards/2H.jpg'},
    {rank: 3, suit: 'Hearts', val: 3, img: 'cards/3H.jpg'},
    {rank: 4, suit: 'Hearts', val: 4, img: 'cards/4H.jpg'},
    {rank: 5, suit: 'Hearts', val: 5, img: 'cards/5H.jpg'},
    {rank: 6, suit: 'Hearts', val: 6, img: 'cards/6H.jpg'},
    {rank: 7, suit: 'Hearts', val: 7, img: 'cards/7H.jpg'},
    {rank: 8, suit: 'Hearts', val: 8, img: 'cards/8H.jpg'},
    {rank: 9, suit: 'Hearts', val: 9, img: 'cards/9H.jpg'},
    {rank: 10, suit: 'Hearts', val: 10, img: 'cards/10H.jpg'},
    {rank: 'Jack', suit: 'Hearts', val: 10, img: 'cards/JH.jpg'},
    {rank: 'Queen', suit: 'Hearts', val: 10, img: 'cards/QH.jpg'},
    {rank: 'King', suit: 'Hearts', val: 10, img: 'cards/KH.jpg'},
    {rank: 'Ace', suit: 'Hearts', val: 11, img: 'cards/AH.jpg'},
    {rank: 2, suit: 'Diamonds', val: 2, img: 'cards/2D.jpg'},
    {rank: 3, suit: 'Diamonds', val: 3, img: 'cards/3D.jpg'},
    {rank: 4, suit: 'Diamonds', val: 4, img: 'cards/4D.jpg'},
    {rank: 5, suit: 'Diamonds', val: 5, img: 'cards/5D.jpg'},
    {rank: 6, suit: 'Diamonds', val: 6, img: 'cards/6D.jpg'},
    {rank: 7, suit: 'Diamonds', val: 7, img: 'cards/7D.jpg'},
    {rank: 8, suit: 'Diamonds', val: 8, img: 'cards/8D.jpg'},
    {rank: 9, suit: 'Diamonds', val: 9, img: 'cards/9D.jpg'},
    {rank: 10, suit: 'Diamonds', val: 10, img: 'cards/10D.jpg'},
    {rank: 'Jack', suit: 'Diamonds', val: 10, img: 'cards/JD.jpg'},
    {rank: 'Queen', suit: 'Diamonds', val: 10, img: 'cards/QD.jpg'},
    {rank: 'King', suit: 'Diamonds', val: 10, img: 'cards/KD.jpg'},
    {rank: 'Ace', suit: 'Diamonds', val: 11, img: 'cards/AD.jpg'},
    {rank: 2, suit: 'Spades', val: 2, img: 'cards/2S.jpg'},
    {rank: 3, suit: 'Spades', val: 3, img: 'cards/3S.jpg'},
    {rank: 4, suit: 'Spades', val: 4, img: 'cards/4S.jpg'},
    {rank: 5, suit: 'Spades', val: 5, img: 'cards/5S.jpg'},
    {rank: 6, suit: 'Spades', val: 6, img: 'cards/6S.jpg'},
    {rank: 7, suit: 'Spades', val: 7, img: 'cards/7S.jpg'},
    {rank: 8, suit: 'Spades', val: 8, img: 'cards/8S.jpg'},
    {rank: 9, suit: 'Spades', val: 9, img: 'cards/9S.jpg'},
    {rank: 10, suit: 'Spades', val: 10, img: 'cards/10S.jpg'},
    {rank: 'Jack', suit: 'Spades', val: 10, img: 'cards/JS.jpg'},
    {rank: 'Queen', suit: 'Spades', val: 10, img: 'cards/QS.jpg'},
    {rank: 'King', suit: 'Spades', val: 10, img: 'cards/KS.jpg'},
    {rank: 'Ace', suit: 'Spades', val: 11, img: 'cards/AS.jpg'}
]

let dealer = {
    seat: document.getElementsByClassName('dealerHand')[0],
    points: 0 
}
let player = {
    seat: document.getElementsByClassName('playerHand')[0],
    points: 0
}


let hit = function() {
    let draw = deck.shift()
    player.points += draw.val 
    points.textContent = player.points
    let card = document.createElement('img')
    card.setAttribute('src', draw.img)
    card.className = 'card'
    player.seat.appendChild(card)
}

let points = document.getElementsByClassName('points')[0]

let dealerHit = function() {
    let draw = deck.shift()
    dealer.points += draw.val 
    let card = document.createElement('img')
    card.setAttribute('src', draw.img)
    card.className = 'card'
    dealer.seat.appendChild(card)
}

let dealButton = document.getElementsByClassName('deal')[0]

let deal = function() {
    let draw = deck.shift()
    dealer.points += draw.val 
    let card = document.createElement('img')
    card.setAttribute('src', 'cards/Red_back.jpg')
    card.className = 'card'
    dealer.seat.appendChild(card)
    hit()
    dealerHit()
    hit()
    dealButton.innerHTML = 'Redeal'
}

dealButton.addEventListener('click', deal)

// I found this function, I did not come up with this shuffle method. 
// I didn't copy it down, either: I just looked it over and composed this later that day.

let shuffle = function() {
    for(let i = 0; i < 1000; i++) {
        let card1 = Math.floor((Math.random() * deck.length))
        let card2 = Math.floor((Math.random() * deck.length))
        let holdVal = deck[card1]
        deck[card1] = deck[card2]
        deck[card2] = holdVal
    }
}

shuffle()

let hitButton = document.getElementsByClassName('hit')[0]
hitButton.addEventListener('click', hit)

let standButton = document.getElementsByClassName('stand')[0]
standButton.addEventListener('click', dealerHit)

