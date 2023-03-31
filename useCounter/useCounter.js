import { useState } from 'react';


export const useCounter = (valorInicial = 10) => {

    const [contador, setContador] = useState(valorInicial); // 10

    const reiniciar = () => {
        setContador(valorInicial);
    }

    const incremento = () => {
        setContador(contador + 1);
    }

    const decremento = () => {
        setContador(contador - 1);
    }

    return {
        contador,
        incremento,
        decremento,
        reiniciar
    };

}
