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

function init() {
    const cover = document.querySelector('.cover');

    for (let i = 0; i < img.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.background = `url("./images/${img[i]}")`;
        card.style.backgroundSize = 'cover';
        cover.append(card);
    };
};

init();