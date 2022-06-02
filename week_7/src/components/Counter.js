import { useReducer } from 'react'
import { reducer } from '../reducer/reducer';
import { TYPES } from '../reducer/reducer';

const initialState = {
    count: 0,
    user_input: ""
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>{state.count}</h1>
            <h1>{state.user_input}</h1>

            <input
                type="text"
                value={state.user_input}
                onChange={(e) => dispatch({ type: TYPES.USER_INPUT,payload:e.target.value })}
            />


            <button onClick={() => dispatch({ type: TYPES.INCREMENT })}>increment</button>
            <button onClick={() => dispatch({ type: TYPES.DECREMENT })}>decrement</button>
            <button onClick={() => dispatch({ type: TYPES.RESET })}>reset</button>
        </>
    )
}

export default Counter