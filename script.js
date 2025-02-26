const radioButtons = document.querySelectorAll('input[name="unit"]');
const totalElement = document.querySelector('.total');
const offerBoxes = document.querySelectorAll('.offer-box');

// handling price border color and size and colour update logic
function updateSelection() {
    offerBoxes.forEach((box, index) => {
        const radio = box.querySelector('input[name="unit"]');
        const selection = box.querySelector('.selection');
        if (radio.checked) {
            totalElement.textContent = `Total: $${radio.value}.00 USD`;
            box.style.border = "2px solid #ff6584";
            box.style.background="rgb(247, 242, 243)";
            selection.style.display = "block";
        } else {
            box.style.border = "1px solid #ddd";
            selection.style.display = "none";
        }
    });
}

radioButtons.forEach(radio => {
    radio.addEventListener('change', updateSelection);
});

updateSelection();