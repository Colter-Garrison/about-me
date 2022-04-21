// grab DOM elements
const aboutButton = document.getElementById('about-button');
const aboutSection = document.getElementById('about-section');
const aboutName = document.getElementById('name');

const animalDiv = document.getElementById('animal-div');
const animalButton = document.getElementById('animal-button');

// set event listeners 
animalButton.addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
});

aboutButton.addEventListener('click', () => {
    if (aboutName.textContent === '____') {
        aboutName.textContent = 'Colter';
    } else {
        aboutName.textContent = '____';
    }

    aboutSection.classList.toggle('my-style');
})