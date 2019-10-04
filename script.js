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
    {rank: 'Ace', suit: 'Spades', val: 11, img: 'cards/AS.jpg'},
]

let dealer = {
    seat: document.getElementsByClassName('dealerHand')[0],
    hand: [],
    points: 0,
    high: false,
    aces: []
}
let player = {
    seat: document.getElementsByClassName('playerHand')[0],
    hand: [],
    points: 0,
    high: false,
    aces: []
}

let log = document.getElementsByClassName('log')[0]

let standoff = function() {
    flip()
    if(dealer.points > player.points) {
        log.innerHTML = 'Dealer wins...'
    }
    if(dealer.points < player.points) {
        log.innerHTML = 'You win!'
    }
    if(dealer.points === player.points) {
        log.innerHTML = 'Wow...a tie!'
    }
}

let check = function() {
    if(player.points > 21) {
        flip()
        log.innerHTML = 'You busted...</br>Dealer wins.'
        return
    }
    if(player.points === 21) {
        flip()
        log.innerHTML = 'You win!'
        return
    }
    if(dealer.points > 21) {
        flip()
        log.innerHTML = 'Dealer busted!</br>You win!'
        return
    }
    if(dealer.points === 21){
        flip()
        log.innerHTML = 'Dealer wins...'
        return
    }
}



let dealCard = function(el) {
    let draw = deck.shift()
    el.hand.push(draw)
    el.points += draw.val
    if(draw.val === 11) {
        el.aces.push(draw)
    }
    for(let i = 0; i < el.aces.length; i++){
        if(el.points > 21){
            el.points -= 10
            el.aces.shift()
        }
    }
    points.innerHTML = player.points
    let card = document.createElement('img')
    card.setAttribute('src', draw.img)
    card.className = 'card'
    el.seat.appendChild(card)
}

let hit = function() {
    if(log.innerHTML !== ''){
    log.innerHTML = 'You have to deal first!'
    return
    }
    dealCard(player)
    check()
    dealerHit()
}

let flip = function() {
    let upsideDown = dealer.seat.getElementsByClassName('card')[1]
    upsideDown.setAttribute('src', dealer.hidden)
}

let stand = function() {
    if(log.innerHTML !== ''){
        log.innerHTML = 'You have to deal first!'
        return
    }
    player.high = true
    if(dealer.high === true) {
        flip()
        standoff()
        return
    }
    while(dealer.points <= 16){
        dealerHit()
    }
    standoff()
}

let points = document.getElementsByClassName('points')[0]

let dealerHit = function() {
    if(dealer.points > 16) {
        dealer.high = true
        if(player.high === true){
            flip()
            standoff()
        }
        return
    }
    dealCard(dealer)
    check()
}

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

let clear = function() {
    for(let i = 0; i < dealer.hand.length; i++) {
        dealer.seat.removeChild(dealer.seat.lastChild)
    }
    for(let i = 0; i < player.hand.length; i++)  {
        player.seat.removeChild(player.seat.lastChild)
    }
    for(let i = 0; i < dealer.hand.length; i++){
       deck.push(dealer.hand[i])
    }
    for(let i = 0; i < player.hand.length; i++){
        deck.push(player.hand[i]) 
    }
    player.hand = []
    dealer.hand = []
    dealer.aces = []
    player.aces = []
    player.points = 0
    dealer.points = 0
    points.textContent = player.points
    dealer.high = false
    player.high = false
    log.innerHTML = ''

}

let dealButton = document.getElementsByClassName('deal')[0]

let deal = function() {
    clear()
    shuffle()
    dealButton.innerHTML = 'Redeal'
    dealCard(player)
    dealCard(dealer)
    let upsideDown = dealer.seat.getElementsByClassName('card')[1]
    dealer.hidden = upsideDown.getAttribute('src')
    upsideDown.setAttribute('src', 'cards/Red_back.jpg')
    dealCard(player)
    dealCard(dealer)
    check()
}

dealButton.addEventListener('click', deal)

let hitButton = document.getElementsByClassName('hit')[0]
hitButton.addEventListener('click', hit)

let standButton = document.getElementsByClassName('stand')[0]
standButton.addEventListener('click', stand)

