let count = 0;
let cards = [];
let deckId

const shuffleURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

//Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
function getCard(){
    axios
    .get(shuffleURL)
    .then(shuffle => {
        deck_id = shuffle.data.deck_id
        counter ++
        return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    })
    axios
    .get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    .then(card => {
        let cardNum = card.data.cards[0].value
        let suit = card.data.cards[0].suit

        console.log(`${cardNum} of ${suit}`)
    })
}

//Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.
function getCardThenAnother(){
    axios
    .get(shuffleURL)
    .then(shuffle => {
        deck_id = shuffle.data.deck_id

        return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    })
    .then(card1 => {
        let cardNum = card1.data.cards[0].value
        let suit = card1.data.cards[0].suit

        console.log(`${cardNum} of ${suit}`)
        return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    })
    .then(card2 => {
        let cardNum = card2.data.cards[0].value
        let suit = card2.data.cards[0].suit

        console.log(`${cardNum} of ${suit}`)
    })
}

//Function to shuffle cards, & get the DeckId.
function shuffleCards(){
    document.getElementById('card-pile').innerHTML = '';
    axios
    .get(shuffleURL)
    .then(shuffle => {
        console.log(shuffle.data.deck_id)
        deckId = shuffle.data.deck_id
        count ++
    })
}

function drawCard(){
    axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(card => {
        let remaining = card.data.remaining
        let cardImg = card.data.cards[0].image
        let img =  document.createElement('img');
        let done = document.createElement('p');

        cards.push(remaining)
        console.log(cards)
        document.getElementById('card-pile').append(img)
        img.src = cardImg
        img.className = "card"
    });
};

function gameOver(){
        if (cards.length == 52){
            let done = document.createElement('p');
            console.log('All Cards Drawn')
            cards = [];
            count = [];
            document.getElementById('card-pile').innerHTML = '';
            document.getElementById('card-pile').append(done)
            done.innerHTML = 'All 52 Cards Have been Drawn. Please click Button Above to Resuffle Deck & Start Over'
    };
};

//This function shiffles first, then gets a random card from the same deck each time. It adds the card image each time the function is executed.
function getCardAddImg(){
if(count == 0){
    shuffleCards()
 } else {
    drawCard()
        if (cards.length == 52){
            gameOver()
        };
    };
};