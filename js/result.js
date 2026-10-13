export function exibirResultado(descoberta) {
    const section = document.querySelector('#birthday-result');

    section.querySelector('img').src = descoberta.imageUrl;
    section.querySelector('img').alt = descoberta.name;
    section.querySelector('h2').textContent = descoberta.name;

    section.querySelector('.result-description').textContent =
        descoberta.date;
    section.querySelector('.result-date').textContent =
        `${descoberta.day}/${descoberta.month}`;
    section.querySelector('.result-caption').textContent =
        descoberta.caption;

    section.hidden = false;

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}