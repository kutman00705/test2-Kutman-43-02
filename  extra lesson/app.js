const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", updateCounter);


updateCounter();

function updateCounter() {
    const maxLength = parseInt(textareaEl.getAttribute("maxLength")) || 100; // устанавливаем значение по умолчанию
    const currentLength = textareaEl.value.length;

    totalCounterEl.innerText = currentLength;
    remainingCounterEl.innerText = String(maxLength - currentLength);
}