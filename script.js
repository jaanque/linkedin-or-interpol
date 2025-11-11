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
let remainingImages = [...images];

const profilePicture = document.getElementById('profile-picture');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');
const linkedinButton = document.getElementById('linkedin-button');
const interpolButton = document.getElementById('interpol-button');
const feedbackEl = document.getElementById('feedback');

function nextImage() {
    feedbackEl.textContent = '';
    feedbackEl.className = '';

    if (remainingImages.length === 0) {
        feedbackEl.textContent = `Game over! Your final score is ${score}/${total}`;
        linkedinButton.disabled = true;
        interpolButton.disabled = true;
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingImages.length);
    currentImage = remainingImages.splice(randomIndex, 1)[0];
    profilePicture.src = currentImage.src;
    total++;
    totalSpan.textContent = total;
}

function checkAnswer(guess) {
    if (guess === currentImage.type) {
        score++;
        scoreSpan.textContent = score;
        feedbackEl.textContent = 'Correct!';
        feedbackEl.className = 'correct';
    } else {
        feedbackEl.textContent = 'Wrong!';
        feedbackEl.className = 'incorrect';
    }

    linkedinButton.disabled = true;
    interpolButton.disabled = true;

    setTimeout(() => {
        nextImage();
        if (remainingImages.length > 0) {
            linkedinButton.disabled = false;
            interpolButton.disabled = false;
        }
    }, 1500);
}

linkedinButton.addEventListener('click', () => checkAnswer('linkedin'));
interpolButton.addEventListener('click', () => checkAnswer('interpol'));

nextImage();
