
import {useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../../redux/counterSlice'


const Couter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)

    
    return (
        <>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>

            <br />
            <br />
            <button
                aria-label="incrementByAmount value"
                onClick={() => dispatch(incrementByAmount(Number(amount)))}
            >
                incrementByAmount
            </button>
            
            <br />
            <input type="text"  value={amount} onChange={(e) => setAmount(e.target.value)}/>
            
        </>
    )
}

export default Couter