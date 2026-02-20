const form = document.querySelector('#paymentForm');
const errorBox = document.querySelector('.errors');
const successBox = document.querySelector('.success');

function displayError(msg) {
    errorBox.textContent = msg;
    errorBox.style.display = msg ? "block" : "none";
    successBox.style.display = "none";
}

function displaySuccess() {
    successBox.textContent = "Success!";
    successBox.style.display = "block";
    errorBox.style.display = "none";
}

function isCardNumberValid(number) {
    return number === '1234123412341234';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    displayError('');

    let errorMsg = '';

    const cardNumber = document.getElementById('cardNumber').value.trim();
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);

    if (!/^\d{16}$/.test(cardNumber)) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not valid\n';
    }

    const currentDate = new Date();
    const fullYear = 2000 + year;

    if (
        fullYear < currentDate.getFullYear() ||
        (fullYear === currentDate.getFullYear() && month <= currentDate.getMonth() + 1)
    ) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    // ⭐ Show the green success message
    displaySuccess();
});