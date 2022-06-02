import { FC } from "react"



interface ICounterActions {
    increment: () => void;
    decrement: () => void;
}

interface ICounter extends ICounterActions{
    name: string;
    number?: number | null;
    isCounter: boolean
}

type TCounter = {
    name: string;
    number: number;
    isCounter: boolean
}

// const ragaca = (bool:boolean):boolean => {
//     return bool
// }


const Counter = ({ name, number, isCounter,increment,decrement }: ICounter) => {
    return (
        <>
            <h1>{name}</h1>
            <h1>{number}</h1>
            {isCounter ? <h1>this is counter</h1> : <h1>This is not counter</h1>}

            <button onClick={increment}>+</button>
            <button onClick={decrement}> - </button>

        </>
    )
}

export default Counter