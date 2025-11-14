const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Regex with lookbehind to get ONLY the object literal string.
// It finds 'const translations = ' and then captures the object that follows.
const extractRegex = /(?<=const translations = )(\{[\s\S]*?\})(?=;)/;
const match = scriptContent.match(extractRegex);

if (!match || !match[0]) {
    console.error("Could not find and extract the translations object with the lookbehind regex.");
    process.exit(1);
}

// With this regex, the desired object string is the entire match.
const objectString = match[0];

let translations;
try {
    // Wrap in parentheses to ensure it's evaluated as an expression, not a block.
    translations = eval('(' + objectString + ')');
} catch (e) {
    console.error("Failed to parse the extracted object string with eval:", e);
    process.exit(1);
}

// Sort the object keys alphabetically.
const sortedKeys = Object.keys(translations).sort();
const sortedTranslations = {};
sortedKeys.forEach(key => {
    sortedTranslations[key] = translations[key];
});

// Convert the sorted object back to a nicely formatted JSON string.
const sortedTranslationsString = JSON.stringify(sortedTranslations, null, 4);

// Create the new full 'const translations = ...;' declaration.
const newTranslationsDeclaration = `const translations = ${sortedTranslationsString};`;

// Use a broader regex to find the entire old declaration and replace it.
const replaceRegex = /const translations = \{[\s\S]*?\};/;
const newScriptContent = scriptContent.replace(replaceRegex, newTranslationsDeclaration);

fs.writeFileSync(scriptPath, newScriptContent, 'utf8');

console.log('Successfully sorted translations in script.js using the final, robust method.');
