import {useState} from "react"



interface ICounterV1 {
    children: (counter: number, setCounter: React.Dispatch<React.SetStateAction<number>>) => JSX.Element | null
}


const CounterV1 = ({ children }: ICounterV1) => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <>
            {children(counter,setCounter)}
        </>
    )
}

export default CounterV1