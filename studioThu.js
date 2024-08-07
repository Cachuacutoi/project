document.querySelectorAll('.title-button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Button ${button.textContent} clicked`);
    });
});