
const BASE_URL = 'https://hubble-api-iota.vercel.app/api/';

export async function buscarAniversario(dia, mes) {
    const resposta = await fetch(
        `${BASE_URL}birthday/${mes}/${dia}`
    );

    if (!resposta.ok) {
        throw new Error(`Erro na API: ${resposta.status}`);
    }

    return await resposta.json();
}
