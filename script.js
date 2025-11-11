const translations = {
    "en": {
        "title": "LinkedIn or Interpol",
        "subtitle": "Professional or Criminal? You decide!",
        "score": "Score",
        "total": "Total",
        "autoAdvance": "Auto-Advance",
        "linkedinButton": "LinkedIn",
        "interpolButton": "Interpol",
        "nextButton": "Next Image",
        "footerTitle": "LinkedIn or Interpol - A Deduction Game - Version 1.0",
        "footerDisclaimer": "Disclaimer: This website is a satirical and educational guessing game.",
        "privacyPolicy": "Privacy Policy",
        "termsOfService": "Terms of Service",
        "copyright": "© 2025 Jan Queralt. All rights reserved.",
        "correct": "Correct!",
        "wrong": "Wrong!",
        "imgDesc1": "This person is on LinkedIn.",
        "imgDesc2": "Iranian indicted for hacking by FBI.",
        "imgDesc3": "This person is on LinkedIn.",
        "imgDesc4": "Drug trafficking and distribution case by FBI.",
        "imgDesc5": "This person is on LinkedIn.",
        "imgDesc6": "Conspiracy and foreign agent charges.",
        "imgDesc7": "This person is on LinkedIn.",
        "imgDesc8": "Kulkov indicted for cybercrime.",
        "imgDesc9": "This person is on LinkedIn.",
        "imgDesc10": "Radovanovic charged with swatting conspiracy.",
        "imgDesc11": "This person is on LinkedIn.",
        "imgDesc12": "Sokolov indicted for credit card fraud.",
        "imgDesc13": "This person is on LinkedIn.",
        "imgDesc14": "Fentanyl and weapons trafficking conspiracy.",
        "imgDesc15": "This person is on LinkedIn.",
        "imgDesc16": "Drug distribution conspiracy charges.",
        "imgDesc17": "This person is on LinkedIn.",
        "imgDesc18": "is part of the PSOE criminal organization",
        "imgDesc19": "This person is on LinkedIn.",
        "imgDesc20": "Child abduction by Smrekar.",
        "imgDesc21": "This person is on LinkedIn.",
        "imgDesc22": "International arrest warrants issued for assassination plot.",
        "imgDesc23": "This person is on LinkedIn.",
        "imgDesc24": "Steffen van Khoa DO wanted for cocaine robbery.",
        "imgDesc25": "This person is on LinkedIn.",
        "imgDesc26": "wanted for corruption in Taiwan.",
        "imgDesc27": "This person is on LinkedIn.",
        "imgDesc28": "Terrorism and cybercrime charges.",
        "imgDesc29": "This person is on LinkedIn.",
        "imgDesc30": " wanted for murder and attempted murder.",
        "imgDesc31": "This person is on LinkedIn.",
        "imgDesc32": "Lester Eubanks wanted for murder and escape.",
        "imgDesc33": "This person is on LinkedIn.",
        "imgDesc35": "This person is on LinkedIn.",
        "imgDesc37": "This person is on LinkedIn.",
        "imgDesc39": "This person is on LinkedIn.",
        "imgDesc41": "This person is on LinkedIn.",
        "imgDesc43": "This person is on LinkedIn.",
        "imgDesc45": "This person is on LinkedIn.",
        "imgDesc47": "This person is on LinkedIn.",
        "imgDesc49": "This person is on LinkedIn.",
    }
};

const images = [
    // 50 imágenes reales con URLs corregidas
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc1' },
    { src: 'https://www.fbi.gov/wanted/cyber/mohammed-reza-sabahi/@@images/image/preview', type: 'interpol', descriptionKey: 'imgDesc2' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc3' },
    { src: 'https://www.fbi.gov/wanted/cei/john-joe-soto/@@images/image/preview', type: 'interpol', descriptionKey: 'imgDesc4' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc5' },
    { src: 'https://www.fbi.gov/wanted/counterintelligence/natalia-burlinova/@@images/image/preview', type: 'interpol', descriptionKey: 'imgDesc6' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc7' },
    { src: 'https://www.secretservice.gov/sites/default/files/styles/500px_width/public/2023-05/kulkov_200x.png.webp?itok=QEpJMkNO', type: 'interpol', descriptionKey: 'imgDesc8' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc9' },
    { src: 'https://www.secretservice.gov/sites/default/files/styles/webp_original_size/public/2024-08/RADOVANOVIC-Nemanja-Photo1.jpg.webp?itok=0C6RbHlg', type: 'interpol', descriptionKey: 'imgDesc10' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc11' },
    { src: 'https://www.secretservice.gov/sites/default/files/styles/webp_original_size/public/inline-images/sokolov-5.png.webp?itok=amNSVvhX', type: 'interpol', descriptionKey: 'imgDesc12' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc13' },
    { src: 'https://www.dea.gov/sites/default/files/2023-04/Nunez-Herrera%2C%20Alan%20Gabriel.jpg', type: 'interpol', descriptionKey: 'imgDesc14' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc15' },
    { src: 'https://www.dea.gov/sites/default/files/fugitives/fugitives/elp/hernandez-de-la-cruz.jpg', type: 'interpol', descriptionKey: 'imgDesc16' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc17' },
    { src: 'https://www.lamoncloa.gob.es/presidente/PublishingImages/SANCHEZ-BIOGRAFIA/080323-sanchez-biografia2.jpg', type: 'interpol', descriptionKey: 'imgDesc18' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc19' },
    { src: 'https://eumostwanted.eu/sites/default/files/styles/wanted_medium/public/wanted_pictures/Smrekar%20Melisa%203.jpg?itok=vDOAEXxQ', type: 'interpol', descriptionKey: 'imgDesc20' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc21' },
    { src: 'https://eumostwanted.eu/sites/default/files/styles/wanted_medium/public/wanted_pictures/eva.png?itok=5JJlDQPH', type: 'interpol', descriptionKey: 'imgDesc22' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc23' },
    { src: 'https://eumostwanted.eu/sites/default/files/styles/wanted_medium/public/wanted_pictures/4_dk_-_steffen-van-khoa-do.jpg?itok=yH_UD9cK', type: 'interpol', descriptionKey: 'imgDesc24' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc25' },
    { src: 'https://www.cib.npa.gov.tw/en/app/globalcase/image?module=globalcase&detailNo=782819431024717824&init=Y', type: 'interpol', descriptionKey: 'imgDesc26' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc27' },
    { src: 'https://eumostwanted.eu/sites/default/files/styles/wanted_medium/public/wanted_pictures/Imagen%202.png?itok=aEniB5aK', type: 'interpol', descriptionKey: 'imgDesc28' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc29' },
    { src: 'https://www.usmarshals.gov/sites/default/files/acquiadam/most-wanted-king-robert-lee-300-350.jpg', type: 'interpol', descriptionKey: 'imgDesc30' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc31' },
    { src: 'https://www.usmarshals.gov/sites/default/files/acquiadam/most-wanted-eubanks-lester-edward-300-350.jpg', type: 'interpol', descriptionKey: 'imgDesc32' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc33' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc35' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc37' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc39' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc41' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc43' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc45' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc47' },
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc49' },
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

function loadLanguage(lang) {
    currentTranslations = translations[lang];
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
