
export function exibirResultado(descoberta) {
    const section = document.querySelector('#birthday-result');
    const imagem = section.querySelector('img');

    section.querySelector('h2').textContent = descoberta.name;
    section.querySelector('.result-description').textContent =
        descoberta.date;
    section.querySelector('.result-date').textContent =
        `${descoberta.day}/${descoberta.month}`;
    section.querySelector('.result-caption').textContent =
        descoberta.caption;

    const imagemCarregada = new Image();

    imagemCarregada.onload = () => {
        imagem.src = imagemCarregada.src;
        imagem.alt = descoberta.name;
        section.querySelector('.result-image').classList.remove('loading');
    };

    imagemCarregada.onerror = () => {
        section.querySelector('.result-image').classList.remove('loading');
        console.error('Não foi possível carregar a imagem.');
    };

    section.querySelector('.result-image').classList.add('loading');

    imagemCarregada.src = descoberta.imageUrl;

    section.hidden = false;

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
