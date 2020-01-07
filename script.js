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
// this forces preloaded images on page load
for(let i=0; i < deck.length; i++) {
    const preLoadedImage = new Image()
    preLoadedImage.src = deck[i].img
}

let dealer = {
    name: 'dealer',
    seat: document.getElementsByClassName('dealerHand')[0],
    hand: [],
    points: 0,
    high: false,
    aces: [],
    cardNum: 0
}
let player = {
    name: 'player',
    seat: document.getElementsByClassName('playerHand')[0],
    hand: [],
    points: 0,
    high: false,
    aces: [],
    cardNum: 0
}

let betAmt = document.getElementsByClassName('betAmt')[0]
let cash = document.getElementsByClassName('cash')[0]
let standingBet = document.getElementsByClassName('standingBet')[0]
let finalBet = document.getElementsByClassName('bet')[0]
let playerName = document.getElementsByClassName('playerName')[0]
let dealerName = document.getElementsByClassName('dealerName')[0]

let bet = function() {
    if(finalBet.innerHTML !== '') {
        log.innerHTML = "You cannot change your bet now..."
        betAmt.value = ''
        setTimeout( () => {
            log.innerHTML = ''
        }, 1200)
        return
    }
    if(typeof(parseInt(betAmt.value)) !== 'number'){
        log.innerHTML = "Choose a number to bet..."
        betAmt.value = ''
        return
    }
    if(parseInt(betAmt.value) > parseInt(cash.innerHTML)) {
        log.innerHTML = "You don't have that much cash!"
        betAmt.value = ''
        return
    }
    if(parseInt(betAmt.value) < 10) {
        log.innerHTML = "Bet bigger, cheapskate."
        betAmt.value = ''
        return
    }
    finalBet.innerHTML = betAmt.value
    standingBet.innerHTML = "Bet: $" +finalBet.innerHTML
    betAmt.value = ''
}

let win = function() {
    cash.innerHTML = parseInt(cash.innerHTML) + parseInt(finalBet.innerHTML)
    standingBet.innerHTML = ''
    finalBet.innerHTML = ''
}
let lose = function() {
    cash.innerHTML = parseInt(cash.innerHTML) - parseInt(finalBet.innerHTML)
    standingBet.innerHTML = ''
    finalBet.innerHTML = ''
    if(parseInt(cash.innerHTML) === 0) {
        setTimeout( () => {
            broke.style.display = 'flex'
            clear()
            dealerName.style.color = 'green'
            playerName.style.color = 'green'
        }, 2000) 
    }
}

let log = document.getElementsByClassName('log')[0]

let standoff = function() {
    flip()
    if(dealer.points > player.points) {
        log.innerHTML = 'Dealer wins...'
        lose()
        return
    }
    if(dealer.points < player.points) {
        log.innerHTML = 'You win!'
        win()
        return
    }
    if(dealer.points === player.points) {
        log.innerHTML = 'Wow...a tie!'
        standingBet.innerHTML = ''
        finalBet.innerHTML = ''
    }
}

let check = function() {
    if(player.points > 21) {
        flip()
        log.innerHTML = 'You busted...</br>Dealer wins.'
        lose()
        return
    }
    if(player.points === 21) {
        flip()
        if(dealer.points === 21) {
            log.innerHTML = 'Dealer blackjack trumps...</br>Dealer wins.'
            lose()
            return
        } else {
        log.innerHTML = 'You win!'
        win()
        return
        }
    }
    if(dealer.points > 21) {
        flip()
        log.innerHTML = 'Dealer busted!</br>You win!'
        win()
        return
    }
    if(dealer.points === 21){
        flip()
        log.innerHTML = 'Dealer wins...'
        lose()
        return
    }
    if(dealer.high === true && player.high === true) {
        standoff()  
    }
}

let screenSize = function() {
    let body = document.getElementsByTagName('html')[0]
    let bodyRect = body.getBoundingClientRect()
    console.log(bodyRect.width)
    console.log(bodyRect.height)
}

screenSize()

let dealCard = function(el) {
    let draw = deck.shift()
    el.hand.push(draw)
    el.cardNum++
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
    let anim = `${el.name}Card${el.cardNum}`
    card.style.animationName = anim;
    card.style.webkitAnimationName = anim;
    el.seat.appendChild(card)
    let cardArr = document.getElementsByClassName('card')
    let dealDeck = document.getElementsByClassName('deck')[0]
    let deckRect = dealDeck.getBoundingClientRect()
    for(let i = 0; i < cardArr.length; i++){
        let thisCard = cardArr[i]
        let cardRect = thisCard.getBoundingClientRect()
        console.log('Card' + i + 'Diff: ' + (deckRect.left - cardRect.left) + ', ' + (cardRect.top-deckRect.top))
    }
}

let hit = function() {
    if(log.innerHTML !== ''){
    log.innerHTML = 'You have to deal first!'
    return
    }
    dealCard(player)
    setTimeout( () => {
        dealerHit()
    }, 420)
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
    dealerHit()
    while(dealer.points <= 16){
        dealerHit()
    }
}

let points = document.getElementsByClassName('points')[0]

let dealerHit = function() {
    if(dealer.points > 16) {
        dealer.high = true
    }
    if(dealer.high === true && player.high === true){
        check()
        return
    } 
    if(dealer.high === true) {
        check()
        return
    } else {
        dealCard(dealer)
        if(dealer.points > 16) {
            dealer.high = true
        }  
    }
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
    player.cardNum = 0
    dealer.cardNum = 0
    player.points = 0
    dealer.points = 0
    points.textContent = player.points
    dealer.high = false
    player.high = false
    log.innerHTML = ''
}

let dealButton = document.getElementsByClassName('deal')[0]

let deal = function() {
    if(finalBet.innerHTML === '') {
        log.innerHTML = 'You have to bet first!'
        return
    }
    clear()
    shuffle()
    dealButton.innerHTML = 'Redeal'
    playerName.style.color = 'goldenrod'
    dealerName.style.color = 'goldenrod'
    dealCard(player)
    setTimeout( () => {
        dealCard(dealer)
    }, 300)
    setTimeout( () => {
        let upsideDown = dealer.seat.getElementsByClassName('card')[1]
        dealer.hidden = upsideDown.getAttribute('src')
        upsideDown.setAttribute('src', 'cards/Red_back.jpg')
    }, 300)
    setTimeout( () => {
        dealCard(player)
    }, 600)
    setTimeout( () => {
        dealCard(dealer)
    }, 900)
    setTimeout( () => {
        check()
    }, 1000)
}

let begin = function() {
    let welcome = document.getElementsByClassName('welcome')[0]
    welcome.style.display = 'none'
}

let broke = document.getElementsByClassName('broke')[0]

let buyIn = function() {
    broke.style.display = 'none'
    cash.innerHTML = 500
}

let betButton = document.getElementsByClassName('betButton')[0]
betButton.addEventListener('click', bet)

dealButton.addEventListener('click', deal)

let hitButton = document.getElementsByClassName('hit')[0]
hitButton.addEventListener('click', hit)

let standButton = document.getElementsByClassName('stand')[0]
standButton.addEventListener('click', stand)

let playButton = document.getElementsByClassName('play')[0]
playButton.addEventListener('click', begin)

let buyInButton = document.getElementsByClassName('buyIn')[0]
buyInButton.addEventListener('click', buyIn)
