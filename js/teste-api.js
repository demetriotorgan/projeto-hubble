
import { buscarAniversario } from './api.js';

export async function testarAPI(){
try {
    const dados = await buscarAniversario(3, 2);

    console.log('Dados recebidos da API:', dados);
} catch (erro) {
    console.error('Falha ao consultar a API:', erro);
}
}


