
import { buscarAniversario } from './api.js';

export async function carregarDescobertas() {
    const cards = document.querySelectorAll('.discoveries .card');

    for (const card of cards) {
        try {
            const mes = Math.floor(Math.random() * 12) + 1;
            const dia = Math.floor(Math.random() * 28) + 1;

            const descoberta = await buscarAniversario(dia, mes);

            const imagem = card.querySelector('img');
            const titulo = card.querySelector('h2');
            const descricao = card.querySelector('p');

            imagem.src = descoberta.imageUrl;
            imagem.alt = descoberta.name;

            titulo.textContent = descoberta.name;
            descricao.textContent = descoberta.caption;
        } catch (erro) {
            console.error('Erro ao carregar descoberta:', erro);
        }
    }
}
