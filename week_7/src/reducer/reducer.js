

export const TYPES = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    USER_INPUT: 'user_input'
}

export const reducer = (state, action) => {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { ...state, count: state.count + 1 }
        case TYPES.DECREMENT:
            return { ...state, count: state.count - 1 }
        case TYPES.RESET:
            return { ...state, count: 0 }
        case TYPES.USER_INPUT:
            return { ...state, user_input: action.payload }
        default:
            return state
    }
}