import { testarAPI } from "./teste-api.js";
import { carregarDescobertas } from "./discoveries.js";
import {carregarSelects, capturarAniversario} from './birthday.js'
import { buscarAniversario } from "./api.js";
import { exibirResultado } from "./result.js";

//testarAPI();
carregarDescobertas();
carregarSelects();

document.querySelector('#birthday-search-button').addEventListener('click', async()=>{
    const aniversario = capturarAniversario();
    if(!aniversario) return;

    try {
        const descoberta = await buscarAniversario(aniversario.dia, aniversario.mes);
        exibirResultado(descoberta);
    } catch (error) {
        console.error('Erro ao buscar aniversário: ', error);
    }
})

