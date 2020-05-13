const img = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg'
];

let count = img.length;

function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

function init() {
    const cover = document.querySelector('.cover');

    for (let i = 0; i < img.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.background = `url("./images/${img[i]}")`;
        card.style.backgroundSize = 'cover';
        card.style.transform = `rotate(${randInt(-15, 15)}deg) translate(${randInt(-40, 40)}px, ${randInt(-40, 40)}px)`;
        cover.append(card);
    };
};

init();