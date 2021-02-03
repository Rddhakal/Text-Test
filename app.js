// Selectors
const text = document.querySelector('textarea');
const alignOptions = document.querySelectorAll('.align-option');
alignOptions.forEach(option => {
    option.addEventListener('click', () => {
        text.style.textAlign = option.classList[1];
        alignOptions.forEach(opt=>{
            opt.classList.remove('active')
        })
        option.classList.add('active')
    })
})
// Event Listener
text.addEventListener('input', () => {
    const lengthDisplay = document.querySelector('.length-display');
    lengthDisplay.innerHTML = text.value.length;
})