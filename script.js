const images = [
    { src: 'https://randomuser.me/api/portraits/men/1.jpg', type: 'linkedin', descriptionKey: 'imgDesc1' },
    { src: 'https://randomuser.me/api/portraits/men/2.jpg', type: 'interpol', descriptionKey: 'imgDesc2' },
    { src: 'https://randomuser.me/api/portraits/women/1.jpg', type: 'linkedin', descriptionKey: 'imgDesc3' },
    { src: 'https://randomuser.me/api/portraits/women/2.jpg', type: 'interpol', descriptionKey: 'imgDesc4' },
    { src: 'https://randomuser.me/api/portraits/men/3.jpg', type: 'linkedin', descriptionKey: 'imgDesc5' },
    { src: 'https://randomuser.me/api/portraits/men/4.jpg', type: 'interpol', descriptionKey: 'imgDesc6' },
    { src: 'https://randomuser.me/api/portraits/women/3.jpg', type: 'linkedin', descriptionKey: 'imgDesc7' },
    { src: 'https://randomuser.me/api/portraits/women/4.jpg', type: 'interpol', descriptionKey: 'imgDesc8' },
    { src: 'https://randomuser.me/api/portraits/men/5.jpg', type: 'linkedin', descriptionKey: 'imgDesc9' },
    { src: 'https://randomuser.me/api/portraits/women/5.jpg', type: 'linkedin', descriptionKey: 'imgDesc10' },
    { src: 'https://randomuser.me/api/portraits/men/6.jpg', type: 'linkedin', descriptionKey: 'imgDesc11' },
    { src: 'https://randomuser.me/api/portraits/women/6.jpg', type: 'linkedin', descriptionKey: 'imgDesc12' },
    { src: 'https://randomuser.me/api/portraits/men/7.jpg', type: 'linkedin', descriptionKey: 'imgDesc13' },
    { src: 'https://randomuser.me/api/portraits/women/7.jpg', type: 'interpol', descriptionKey: 'imgDesc14' },
    { src: 'https://randomuser.me/api/portraits/men/8.jpg', type: 'interpol', descriptionKey: 'imgDesc15' },
    { src: 'https://randomuser.me/api/portraits/women/8.jpg', type: 'interpol', descriptionKey: 'imgDesc16' },
    { src: 'https://randomuser.me/api/portraits/men/9.jpg', type: 'interpol', descriptionKey: 'imgDesc17' },
    { src: 'https://randomuser.me/api/portraits/women/9.jpg', type: 'interpol', descriptionKey: 'imgDesc18' },
    { src: 'https://randomuser.me/api/portraits/men/10.jpg', type: 'linkedin', descriptionKey: 'imgDesc19' },
    { src: 'https://randomuser.me/api/portraits/women/10.jpg', type: 'linkedin', descriptionKey: 'imgDesc20' },
    { src: 'https://randomuser.me/api/portraits/men/11.jpg', type: 'interpol', descriptionKey: 'imgDesc21' },
    { src: 'https://randomuser.me/api/portraits/women/11.jpg', type: 'linkedin', descriptionKey: 'imgDesc22' },
    { src: 'https://randomuser.me/api/portraits/men/12.jpg', type: 'linkedin', descriptionKey: 'imgDesc23' },
    { src: 'https://randomuser.me/api/portraits/women/12.jpg', type: 'interpol', descriptionKey: 'imgDesc24' },
    { src: 'https://randomuser.me/api/portraits/men/13.jpg', type: 'linkedin', descriptionKey: 'imgDesc25' },
    { src: 'https://randomuser.me/api/portraits/women/13.jpg', type: 'interpol', descriptionKey: 'imgDesc26' },
    { src: 'https://randomuser.me/api/portraits/men/14.jpg', type: 'linkedin', descriptionKey: 'imgDesc27' },
    { src: 'https://randomuser.me/api/portraits/women/14.jpg', type: 'interpol', descriptionKey: 'imgDesc28' },
    { src: 'https://randomuser.me/api/portraits/men/15.jpg', type: 'linkedin', descriptionKey: 'imgDesc29' },
    { src: 'https://randomuser.me/api/portraits/women/15.jpg', type: 'linkedin', descriptionKey: 'imgDesc30' },
    { src: 'https://randomuser.me/api/portraits/men/16.jpg', type: 'interpol', descriptionKey: 'imgDesc31' },
    { src: 'https://randomuser.me/api/portraits/women/16.jpg', type: 'linkedin', descriptionKey: 'imgDesc32' },
    { src: 'https://randomuser.me/api/portraits/men/17.jpg', type: 'interpol', descriptionKey: 'imgDesc33' },
    { src: 'https://randomuser.me/api/portraits/women/17.jpg', type: 'linkedin', descriptionKey: 'imgDesc34' },
    { src: 'https://randomuser.me/api/portraits/men/18.jpg', type: 'linkedin', descriptionKey: 'imgDesc35' },
    { src: 'https://randomuser.me/api/portraits/women/18.jpg', type: 'interpol', descriptionKey: 'imgDesc36' },
    { src: 'https://randomuser.me/api/portraits/men/19.jpg', type: 'linkedin', descriptionKey: 'imgDesc37' },
    { src: 'https://randomuser.me/api/portraits/women/19.jpg', type: 'interpol', descriptionKey: 'imgDesc38' },
    { src: 'https://randomuser.me/api/portraits/men/20.jpg', type: 'interpol', descriptionKey: 'imgDesc39' },
    { src: 'https://randomuser.me/api/portraits/women/20.jpg', type: 'linkedin', descriptionKey: 'imgDesc40' },
    { src: 'https://randomuser.me/api/portraits/men/21.jpg', type: 'linkedin', descriptionKey: 'imgDesc41' },
    { src: 'https://randomuser.me/api/portraits/women/21.jpg', type: 'interpol', descriptionKey: 'imgDesc42' },
    { src: 'https://randomuser.me/api/portraits/men/22.jpg', type: 'linkedin', descriptionKey: 'imgDesc43' },
    { src: 'https://randomuser.me/api/portraits/women/22.jpg', type: 'interpol', descriptionKey: 'imgDesc44' },
    { src: 'https://randomuser.me/api/portraits/men/23.jpg', type: 'interpol', descriptionKey: 'imgDesc45' },
    { src: 'https://randomuser.me/api/portraits/women/23.jpg', type: 'linkedin', descriptionKey: 'imgDesc46' },
    { src: 'https://randomuser.me/api/portraits/men/24.jpg', type: 'linkedin', descriptionKey: 'imgDesc47' },
    { src: 'https://randomuser.me/api/portraits/women/24.jpg', type: 'interpol', descriptionKey: 'imgDesc48' },
    { src: 'https://randomuser.me/api/portraits/men/25.jpg', type: 'interpol', descriptionKey: 'imgDesc49' },
    { src: 'https://randomuser.me/api/portraits/women/25.jpg', type: 'linkedin', descriptionKey: 'imgDesc50' }
];

let score = 0;
let total = 0;
let currentImage;
let remainingImages = [...images];
let autoAdvance = true;
let currentTranslations = {};

const profilePicture = document.getElementById('profile-picture');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');
const linkedinButton = document.getElementById('linkedin-button');
const interpolButton = document.getElementById('interpol-button');
const feedbackEl = document.getElementById('feedback');
const descriptionEl = document.getElementById('description');
const nextButton = document.getElementById('next-button');
const autoAdvanceSwitch = document.getElementById('auto-advance-switch');
const languageSelector = document.getElementById('language-selector');

async function loadLanguage(lang) {
    const response = await fetch(`locales/${lang}.json`);
    currentTranslations = await response.json();
    translatePage();
}

function translatePage() {
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
        const key = el.getAttribute('data-i18n-key');
        if (currentTranslations[key]) {
            el.textContent = currentTranslations[key];
        }
    });
}

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
        feedbackEl.textContent = currentTranslations.correct;
        feedbackEl.className = 'correct';
    } else {
        feedbackEl.textContent = currentTranslations.wrong;
        feedbackEl.className = 'incorrect';
    }

    descriptionEl.textContent = currentTranslations[currentImage.descriptionKey];
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

function handleLanguageChange() {
    loadLanguage(languageSelector.value);
}

linkedinButton.addEventListener('click', () => checkAnswer('linkedin'));
interpolButton.addEventListener('click', () => checkAnswer('interpol'));
nextButton.addEventListener('click', nextImage);
autoAdvanceSwitch.addEventListener('change', handleAutoAdvanceChange);
languageSelector.addEventListener('change', handleLanguageChange);

// Initial load
loadLanguage('en');
nextImage();
