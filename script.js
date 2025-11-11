const images = [
    { src: 'https://randomuser.me/api/portraits/men/1.jpg', type: 'linkedin' },
    { src: 'https://randomuser.me/api/portraits/men/2.jpg', type: 'interpol' },
    { src: 'https://randomuser.me/api/portraits/women/1.jpg', type: 'linkedin' },
    { src: 'https://randomuser.me/api/portraits/women/2.jpg', type: 'interpol' },
    { src: 'https://randomuser.me/api/portraits/men/3.jpg', type: 'linkedin' },
    { src: 'https://randomuser.me/api/portraits/men/4.jpg', type: 'interpol' },
    { src: 'https://randomuser.me/api/portraits/women/3.jpg', type: 'linkedin' },
    { src: 'https://randomuser.me/api/portraits/women/4.jpg', type: 'interpol' },
];

let score = 0;
let total = 0;
let currentImage;

const profilePicture = document.getElementById('profile-picture');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');
const linkedinButton = document.getElementById('linkedin-button');
const interpolButton = document.getElementById('interpol-button');

function nextImage() {
    if (images.length === 0) {
        alert(`Game over! Your score is ${score}/${total}`);
        return;
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    currentImage = images.splice(randomIndex, 1)[0];
    profilePicture.src = currentImage.src;
    total++;
    totalSpan.textContent = total;
}

function checkAnswer(guess) {
    if (guess === currentImage.type) {
        score++;
        scoreSpan.textContent = score;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
    nextImage();
}

linkedinButton.addEventListener('click', () => checkAnswer('linkedin'));
interpolButton.addEventListener('click', () => checkAnswer('interpol'));

nextImage();