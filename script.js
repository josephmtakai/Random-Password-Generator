// script.js

document.getElementById('generate-btn').addEventListener('click', generatePassword);

function generatePassword() {
    const passwordLength = document.getElementById('password-length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = generateRandomPassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

    displayPassword(password);
}

function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
    let charSet = '';
    let generatedPassword = '';

    if (uppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charSet += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charSet += '0123456789';
    if (symbols) charSet += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet[randomIndex];
    }

    return generatedPassword;
}

function displayPassword(password) {
    document.getElementById('password').textContent = password;
}
