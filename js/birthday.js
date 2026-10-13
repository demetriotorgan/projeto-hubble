
export function carregarSelects() {
    const diaSelect = document.querySelector('#birthday-day');
    const mesSelect = document.querySelector('#birthday-month');

    for (let dia = 1; dia <= 31; dia++) {
        diaSelect.add(new Option(dia, dia));
    }

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    meses.forEach((mes, indice) => {
        mesSelect.add(new Option(mes, indice + 1));
    });
};

export function capturarAniversario() {
    const dia = document.querySelector('#birthday-day').value;
    const mes = document.querySelector('#birthday-month').value;

    if (!dia || !mes) {
        console.log('Selecione o dia e o mês.');
        return null;
    }

    return {
        dia: Number(dia),
        mes: Number(mes)
    };
}
