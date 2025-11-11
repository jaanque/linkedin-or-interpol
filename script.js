const images = [
    // 50 images...
    { src: 'https://randomuser.me/api/portraits/men/1.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/2.jpg', type: 'interpol', description: 'Wanted for international pastry theft.' },
    { src: 'https://randomuser.me/api/portraits/women/1.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/2.jpg', type: 'interpol', description: 'Wanted for replacing all the office coffee with decaf.' },
    { src: 'https://randomuser.me/api/portraits/men/3.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/4.jpg', type: 'interpol', description: 'Wanted for masterminding a global network of illegal rubber duck smuggling.' },
    { src: 'https://randomuser.me/api/portraits/women/3.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/4.jpg', type: 'interpol', description: 'Wanted for teaching squirrels how to commit bank fraud.' },
    { src: 'https://randomuser.me/api/portraits/men/5.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/5.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/6.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/6.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/7.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/7.jpg', type: 'interpol', description: 'Wanted for questioning in the great maple syrup heist of 2012.' },
    { src: 'https://randomuser.me/api/portraits/men/8.jpg', type: 'interpol', description: 'Suspected of leading a secret society of competitive nappers.' },
    { src: 'https://randomuser.me/api/portraits/women/8.jpg', type: 'interpol', description: 'Accused of orchestrating a series of well-mannered flash mobs.' },
    { src: 'https://randomuser.me/api/portraits/men/9.jpg', type: 'interpol', description: 'Wanted for distributing counterfeit compliments.' },
    { src: 'https://randomuser.me/api/portraits/women/9.jpg', type: 'interpol', description: 'Allegedly responsible for a city-wide outbreak of uncontrollable polka dancing.' },
    { src: 'https://randomuser.me/api/portraits/men/10.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/10.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/11.jpg', type: 'interpol', description: 'Wanted for leaving pineapple on pizza at an international summit.' },
    { src: 'https://randomuser.me/api/portraits/women/11.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/12.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/12.jpg', type: 'interpol', description: 'Suspected of replacing all the pens in the city with invisible ink pens.' },
    { src: 'https://randomuser.me/api/portraits/men/13.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/13.jpg', type: 'interpol', description: 'Accused of programming ducks to quack in morse code to organize heists.' },
    { src: 'https://randomuser.me/api/portraits/men/14.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/14.jpg', type: 'interpol', description: 'Wanted for questioning regarding the sudden appearance of garden gnomes on the moon.' },
    { src: 'https://randomuser.me/api/portraits/men/15.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/15.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/16.jpg', type: 'interpol', description: 'Mastermind behind a global network of competitive thumb wrestling.' },
    { src: 'https://randomuser.me/api/portraits/women/16.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/17.jpg', type: 'interpol', description: 'Suspected of illegally downloading a car.' },
    { src: 'https://randomuser.me/api/portraits/women/17.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/18.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/18.jpg', type: 'interpol', description: 'Wanted for replacing the national anthem with a kazoo solo.' },
    { src: 'https://randomuser.me/api/portraits/men/19.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/19.jpg', type: 'interpol', description: 'Accused of teaching pigeons to play chess and hustle tourists.' },
    { src: 'https://randomuser.me/api/portraits/men/20.jpg', type: 'interpol', description: 'Wanted for illegally constructing a pillow fort in a national monument.' },
    { src: 'https://randomuser.me/api/portraits/women/20.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/21.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/21.jpg', type: 'interpol', description: 'Suspected of unleashing an army of polite, apology-saying robots.' },
    { src: 'https://randomuser.me/api/portraits/men/22.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/22.jpg', type: 'interpol', description: 'Wanted for swapping all the sugar with salt in a major city\'s cafes.' },
    { src: 'https://randomuser.me/api/portraits/men/23.jpg', type: 'interpol', description: 'Accused of being the world\'s most notorious sock thief.' },
    { src: 'https://randomuser.me/api/portraits/women/23.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/men/24.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' },
    { src: 'https://randomuser.me/api/portraits/women/24.jpg', type: 'interpol', description: 'Wanted for organizing a synchronized swimming event in the Trevi Fountain.' },
    { src: 'https://randomuser.me/api/portraits/men/25.jpg', type: 'interpol', description: 'Suspected of replacing a CEO\'s presentation with cat videos.' },
    { src: 'https://randomuser.me/api/portraits/women/25.jpg', type: 'linkedin', description: 'This person is on LinkedIn.' }
];

let score = 0;
let total = 0;
let currentImage;
let remainingImages = [...images];
let autoAdvance = true;

const profilePicture = document.getElementById('profile-picture');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');
const linkedinButton = document.getElementById('linkedin-button');
const interpolButton = document.getElementById('interpol-button');
const feedbackEl = document.getElementById('feedback');
const descriptionEl = document.getElementById('description');
const nextButton = document.getElementById('next-button');
const autoAdvanceSwitch = document.getElementById('auto-advance-switch');

function nextImage() {
    feedbackEl.textContent = '';
    feedbackEl.className = '';
    descriptionEl.textContent = '';
    nextButton.classList.add('hidden');
    linkedinButton.disabled = false;
    interpolButton.disabled = false;

    if (remainingImages.length === 0) {
        // Reshuffle the images to play again
        remainingImages = [...images];
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

    descriptionEl.textContent = currentImage.description;
    linkedinButton.disabled = true;
    interpolButton.disabled = true;

    if (autoAdvance) {
        setTimeout(nextImage, 3000);
    } else {
        nextButton.classList.remove('hidden');
    }
}

function handleAutoAdvanceChange() {
    autoAdvance = autoAdvanceSwitch.checked;
}

linkedinButton.addEventListener('click', () => checkAnswer('linkedin'));
interpolButton.addEventListener('click', () => checkAnswer('interpol'));
nextButton.addEventListener('click', nextImage);
autoAdvanceSwitch.addEventListener('change', handleAutoAdvanceChange);

nextImage();
