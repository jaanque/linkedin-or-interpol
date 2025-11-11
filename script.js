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
        "imgDesc2": "Wanted by the authorities of Russia for Murder.",
        "imgDesc3": "This person is on LinkedIn.",
        "imgDesc4": "Wanted by the authorities of the United States for Conspiracy to commit fraud.",
        "imgDesc5": "This person is on LinkedIn.",
        "imgDesc6": "Wanted by the authorities of Brazil for Drug trafficking and organized crime.",
        "imgDesc7": "This person is on LinkedIn.",
        "imgDesc8": "Wanted by the authorities of Canada for Murder.",
        "imgDesc9": "This person is on LinkedIn.",
        "imgDesc10": "Wanted by the authorities of Spain for Terrorism.",
        "imgDesc11": "This person is on LinkedIn.",
        "imgDesc12": "Wanted by the authorities of the United Arab Emirates for Fraud.",
        "imgDesc13": "This person is on LinkedIn.",
        "imgDesc14": "Wanted by the authorities of Sweden for Murder.",
        "imgDesc15": "This person is on LinkedIn.",
        "imgDesc16": "Wanted by the authorities of Norway for Drug trafficking.",
        "imgDesc17": "This person is on LinkedIn.",
        "imgDesc18": "Wanted by the authorities of Qatar for Forgery and fraud.",
        "imgDesc19": "This person is on LinkedIn.",
        "imgDesc20": "Wanted by the authorities of Pakistan for Corruption and bribery.",
        // ... (resto de descripciones)
    },
    "es": {
        "title": "LinkedIn o Interpol",
        "subtitle": "¿Profesional o Criminal? ¡Tú decides!",
        "score": "Puntuación",
        "total": "Total",
        "autoAdvance": "Avance Automático",
        "linkedinButton": "LinkedIn",
        "interpolButton": "Interpol",
        "nextButton": "Siguiente Imagen",
        "footerTitle": "LinkedIn o Interpol - Un Juego de Deducción - Versión 1.0",
        "footerDisclaimer": "Aviso legal: Este sitio web es un juego de adivinanzas satírico y educativo.",
        "privacyPolicy": "Política de Privacidad",
        "termsOfService": "Términos de Servicio",
        "copyright": "© 2025 Jan Queralt. Todos los derechos reservados.",
        "correct": "¡Correcto!",
        "wrong": "¡Incorrecto!",
        "imgDesc1": "Esta persona está en LinkedIn.",
        "imgDesc2": "Buscado por las autoridades de Rusia por Asesinato.",
        "imgDesc3": "Esta persona está en LinkedIn.",
        "imgDesc4": "Buscado por las autoridades de Estados Unidos por Conspiración para cometer fraude.",
        "imgDesc5": "Esta persona está en LinkedIn.",
        "imgDesc6": "Buscado por las autoridades de Brasil por Tráfico de drogas y crimen organizado.",
        "imgDesc7": "Esta persona está en LinkedIn.",
        "imgDesc8": "Buscado por las autoridades de Canadá por Asesinato.",
        "imgDesc9": "Esta persona está en LinkedIn.",
        "imgDesc10": "Buscado por las autoridades de España por Terrorismo.",
        "imgDesc11": "Esta persona está en LinkedIn.",
        "imgDesc12": "Buscado por las autoridades de los Emiratos Árabes Unidos por Fraude.",
        "imgDesc13": "Esta persona está en LinkedIn.",
        "imgDesc14": "Buscado por las autoridades de Suecia por Asesinato.",
        "imgDesc15": "Esta persona está en LinkedIn.",
        "imgDesc16": "Buscado por las autoridades de Noruega por Tráfico de drogas.",
        "imgDesc17": "Esta persona está en LinkedIn.",
        "imgDesc18": "Buscado por las autoridades de Qatar por Falsificación y fraude.",
        "imgDesc19": "Esta persona está en LinkedIn.",
        "imgDesc20": "Buscado por las autoridades de Pakistán por Corrupción y soborno.",
        // ...
    },
    "fr": {
        "title": "LinkedIn ou Interpol",
        "subtitle": "Professionnel ou Criminel? À vous de décider!",
        "score": "Score",
        "total": "Total",
        "autoAdvance": "Avance Automatique",
        "linkedinButton": "LinkedIn",
        "interpolButton": "Interpol",
        "nextButton": "Image Suivante",
        "footerTitle": "LinkedIn ou Interpol - Un Jeu de Déduction - Version 1.0",
        "footerDisclaimer": "Avis de non-responsabilité: Ce site web est un jeu de devinettes satirique et éducatif.",
        "privacyPolicy": "Politique de Confidentialité",
        "termsOfService": "Conditions d'Utilisation",
        "copyright": "© 2025 Jan Queralt. Tous droits réservés.",
        "correct": "Correct!",
        "wrong": "Faux!",
        "imgDesc1": "Cette personne est sur LinkedIn.",
        "imgDesc2": "Recherché par les autorités de la Russie pour Meurtre.",
        "imgDesc3": "Cette personne est sur LinkedIn.",
        "imgDesc4": "Recherché par les autorités des États-Unis pour Complot en vue de commettre une fraude.",
        "imgDesc5": "Cette personne est sur LinkedIn.",
        "imgDesc6": "Recherché par les autorités du Brésil pour Trafic de drogue et crime organisé.",
        "imgDesc7": "Cette personne est sur LinkedIn.",
        "imgDesc8": "Recherché par les autorités du Canada pour Meurtre.",
        "imgDesc9": "Cette personne est sur LinkedIn.",
        "imgDesc10": "Recherché par les autorités de l'Espagne pour Terrorisme.",
        "imgDesc11": "Cette personne est sur LinkedIn.",
        "imgDesc12": "Recherché par les autorités des Émirats arabes unis pour Fraude.",
        "imgDesc13": "Cette personne est sur LinkedIn.",
        "imgDesc14": "Recherché par les autorités de la Suède pour Meurtre.",
        "imgDesc15": "Cette personne est sur LinkedIn.",
        "imgDesc16": "Recherché par les autorités de la Norvège pour Trafic de drogue.",
        "imgDesc17": "Cette personne est sur LinkedIn.",
        "imgDesc18": "Recherché par les autorités du Qatar pour Falsification et fraude.",
        "imgDesc19": "Cette personne est sur LinkedIn.",
        "imgDesc20": "Recherché par les autorités du Pakistan pour Corruption et pots-de-vin.",
        // ...
    }
};

const images = [
    // 10 perfiles de LinkedIn + 10 fugitivos de alto perfil
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc1' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2022-48446/images', type: 'interpol', descriptionKey: 'imgDesc2' }, // Russia, Murder
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc3' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2023-14988/images', type: 'interpol', descriptionKey: 'imgDesc4' }, // USA, Fraud
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc5' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2023-43978/images', type: 'interpol', descriptionKey: 'imgDesc6' }, // Brazil, Drug trafficking
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc7' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2024-21447/images', type: 'interpol', descriptionKey: 'imgDesc8' }, // Canada, Murder
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc9' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2024-1925/images', type: 'interpol', descriptionKey: 'imgDesc10' }, // Spain, Terrorism
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc11' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2023-38885/images', type: 'interpol', descriptionKey: 'imgDesc12' }, // UAE, Fraud
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc13' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2024-34355/images', type: 'interpol', descriptionKey: 'imgDesc14' }, // Sweden, Murder
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc15' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2021-46344/images', type: 'interpol', descriptionKey: 'imgDesc16' }, // Norway, Drug trafficking
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc17' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2023-7458/images', type: 'interpol', descriptionKey: 'imgDesc18' }, // Qatar, Forgery
    { src: 'https://thispersondoesnotexist.com/', type: 'linkedin', descriptionKey: 'imgDesc19' },
    { src: 'https://ws-public.interpol.int/notices/v1/red/2023-44849/images', type: 'interpol', descriptionKey: 'imgDesc20' }, // Pakistan, Corruption

    // ... (resto de imágenes originales para llegar a 50)
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
