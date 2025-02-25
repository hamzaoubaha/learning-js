let attempts = 10;
let targetNumber = Math.floor(Math.random() * 15) + 1;

function checkGuess() {
    let guess = parseInt(document.getElementById("guess").value);
    let message = document.getElementById("message");
    
    if (isNaN(guess) || guess < 1 || guess > 15) {
        alert("يرجى إدخال رقم بين 1 و 15");
        return;
    }

    attempts--;
    document.getElementById("attempts").innerText = `المحاولات المتبقية: ${attempts}`;

    if (guess === targetNumber) {
        message.innerText = "🎉 مبروك! لقد خمنت الرقم الصحيح!";
        endGame();
    } else if (attempts === 0) {
        message.innerText = `😢 انتهت محاولاتك! الرقم الصحيح كان ${targetNumber}`;
        endGame();
    } else {
        message.innerText = guess > targetNumber ? "📉 الرقم أقل من تخمينك!" : "📈 الرقم أكبر من تخمينك!";
    }
}

function endGame() {
    document.querySelector(".btn-check").disabled = true;
    document.querySelector(".btn-restart").style.display = "inline-block";
}

function restartGame() {
    location.reload();
}