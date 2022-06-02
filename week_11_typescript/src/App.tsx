import './App.css';
import Counter from './components/Counter';
import { useState } from "react"
import CounterV1 from './components/CounterV1';



function App() {
    const [counter, setCounter] = useState<number>(0)

    return (
        <>
            <Counter
                name="Counter"
                isCounter={true}
                number={counter}
                increment={() => setCounter(prev => prev! + 1)}
                decrement={() => setCounter(prev => prev! - 1)}
            />

            <br />
            <br />


            <h1>CounterV1</h1>
            <CounterV1 >
                {
                    (counter,setCounter) => (
                        <div>
                            {counter}
                            <button onClick={() => setCounter(prev => prev! + 1)}>+</button>
                        </div>
                    )
                }
            </CounterV1>
        </>
    );
}

export default App;
