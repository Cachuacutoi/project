document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        alert(`Key ${key.textContent.trim()} pressed`);
    });
});