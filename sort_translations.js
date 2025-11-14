const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Use regex to find and extract the translations object.
const regex = /const translations = (\{[\s\S]*?\});/;
const match = scriptContent.match(regex);

if (!match || !match[1]) {
    console.error("Could not find the translations object in script.js");
    process.exit(1);
}

const objectString = match[1];
const fullMatchString = match[0];

let translations;
try {
    // Use eval since it's a JavaScript object literal, not strict JSON.
    translations = eval('(' + objectString + ')');
} catch (e) {
    console.error("Failed to parse the translations object:", e);
    process.exit(1);
}

// Get keys, sort them, and build a new sorted object.
const sortedKeys = Object.keys(translations).sort();
const sortedTranslations = {};
sortedKeys.forEach(key => {
    sortedTranslations[key] = translations[key];
});

// Convert the sorted object back to a nicely formatted string.
// The '4' argument adds indentation.
let sortedTranslationsString = JSON.stringify(sortedTranslations, null, 4);

// Reconstruct the 'const translations = ...;' statement.
const newTranslationsVar = `const translations = ${sortedTranslationsString};`;

// Find the position of the old object to replace it.
const startIndex = scriptContent.indexOf(fullMatchString);
const endIndex = startIndex + fullMatchString.length;

// Build the new full script content.
const newScriptContent = scriptContent.substring(0, startIndex) + newTranslationsVar + scriptContent.substring(endIndex);

fs.writeFileSync(scriptPath, newScriptContent, 'utf8');

console.log('Successfully sorted translations in script.js');
