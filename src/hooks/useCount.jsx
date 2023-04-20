import { useState } from "react"

export const useCount = (initial=1, max=5, min=1) => {

    if(initial < min || initial > max) initial = min

    let [contador, setContador] = useState(initial)

    let increment = () => {
        if (contador < max)
        setContador(contador + 1)
    }

    let decrement = () => {
        if (contador > min)
        setContador(contador - 1)
    }

    let reset = () =>{
        setContador(initial)
    }

    return { contador, increment, decrement, reset }
}