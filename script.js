script.js
const cardArray = [
    { name: 'dog', img: 'dog.jpeg' },
    { name: 'dog', img: 'dog.jpeg' },
    { name: 'horse', img: 'horse.png' },
    { name: 'horse', img: 'horse.png' },
    { name: 'cat', img: 'cat.png' },
    { name: 'cat', img: 'cat.png' },
    { name: 'fish', img: 'fish.jpeg' },
    { name: 'fish', img: 'fish.jpeg' },
    { name: 'bird', img:'images.jpeg'},
    { name: 'bird', img: 'images.jpeg'}
    ];
    const grid = document.getElementById('grid');
    let cardsChosen = [], cardsChosenId = [], cardsWon = [];
    cardArray.sort(() => 0.5 - Math.random());
    function createBoard() {
    cardArray.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-id', index);
    cardElement.addEventListener('click', flipCard);
    const front = document.createElement('div');
    front.classList.add('front');
    const back = document.createElement('div');
    back.classList.add('back');
    cardElement.appendChild(front);
    cardElement.appendChild(back);
    grid.appendChild(cardElement);
    });
    }
    function flipCard() {
    const id = this.getAttribute('data-id');
    cardsChosen.push(cardArray[id].name);
    cardsChosenId.push(id);
    this.classList.add('flip');
    this.querySelector('.front').textContent = cardArray[id].img;
    if (cardsChosen.length === 2) setTimeout(checkForMatch, 500);
    }
    function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const [firstId, secondId] = cardsChosenId;
    if (cardsChosen[0] === cardsChosen[1]) {
    cards[firstId].removeEventListener('click', flipCard);
    cards[secondId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
    } else {
    cards[firstId].classList.remove('flip');
    cards[secondId].classList.remove('flip');
    cards[firstId].querySelector('.front').textContent = '';
    cards[secondId].querySelector('.front').textContent = '';
    }
    cardsChosen = []; cardsChosenId = [];
    if (cardsWon.length === cardArray.length/2) alert('Parabéns! Todos os pares encontrados!');
    
    }
    createBoard();
