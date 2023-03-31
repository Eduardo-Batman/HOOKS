import { useState } from "react"


export const useForm = (estadoInicial = {}) => {

    const [valor, setValor] = useState(estadoInicial);

    const reiniciarValor = () => {
        setValor(estadoInicial);
    }


    const obternerValorInput = ({ target }) => {

        setValor({
            ...valor,
            [target.name]: target.value
        });

    }

    return [valor, obternerValorInput, reiniciarValor];

}