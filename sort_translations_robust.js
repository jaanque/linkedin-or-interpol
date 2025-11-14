const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'script.js');
const tempScriptPath = path.join(__dirname, 'script.temp.js');

// 1. Read the original script
let originalScriptContent = fs.readFileSync(scriptPath, 'utf8');

// 2. Create a temporary copy and append exports
fs.copyFileSync(scriptPath, tempScriptPath);
fs.appendFileSync(tempScriptPath, '\\nmodule.exports = { translations };');

let translations;
try {
    // 3. Require the temp module to get the object
    const tempModule = require(tempScriptPath);
    translations = tempModule.translations;
} catch (e) {
    console.error("Failed to load translations from temp module:", e);
    fs.unlinkSync(tempScriptPath); // Clean up
    process.exit(1);
}

// 4. Clean up the temporary file immediately
fs.unlinkSync(tempScriptPath);

// 5. Sort the translations object
const sortedKeys = Object.keys(translations).sort();
const sortedTranslations = {};
sortedKeys.forEach(key => {
    sortedTranslations[key] = translations[key];
});

// 6. Convert the sorted object back to a string
const sortedTranslationsString = JSON.stringify(sortedTranslations, null, 4);

// 7. Create the new 'const translations = ...' statement
const newTranslationsDeclaration = `const translations = ${sortedTranslationsString}`;

// 8. Replace the old translations object in the original script content
const regex = /const translations = \{[\s\S]*?\};/;
const newScriptContent = originalScriptContent.replace(regex, newTranslationsDeclaration);

// 9. Write the updated content back to the original script.js
fs.writeFileSync(scriptPath, newScriptContent, 'utf8');

console.log('Successfully sorted translations in script.js using the robust method.');
