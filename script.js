// script.js
document.getElementById('generate-btn').addEventListener('click', function(){
    const minInput = document.getElementById('min').value;
    const maxInput = document.getElementById('max').value;
    const resultDisplay = document.getElementById('result-display');

    const min = parseInt(minInput);
    const max = parseInt(maxInput);

    if(isNaN(min) || isNaN(max)) {
        resultDisplay.textContent = 'please enter valid numbers!';
        return;
    }

    if(min > max) {
        resultDisplay.textContent = 'Minimum cannot be greater than maximum!';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max-min + 1)) + min;
    resultDisplay.textContent = `Random Number: ${randomNumber}`;
});

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});