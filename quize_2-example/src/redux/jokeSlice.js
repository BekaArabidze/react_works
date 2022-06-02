import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchJokes = createAsyncThunk('jokes/fetchJokes', async () => {
    try {
        const response = await fetch('https://icanhazdadjoke.com/search?limit=10', {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'dad jokes',
            },
        })
        const data = await response.json()
        return data.results
    } catch (err) {
        return err.message
    }
})


export const todoSlice = createSlice({
    name: 'jokes',
    initialState: {
        jokes: [],
        status: 'idle',
        error: null,
        favoriteJokes: []
    },
    reducers: {
        deleteJoke: (state, action) => {
            const filterJokes = state.jokes.filter((jokes) => jokes.id !== action.payload)

            return {
                ...state,
                jokes: filterJokes
            }
        },
        deleteAllJokes: () => {
            return { jokes: [] }
        },
        addJoke: {
            reducer(state, action) {
                state.jokes.push(action.payload)
            },
            prepare(joke) {
                return {
                    payload: {
                        id: nanoid(),
                        joke,
                    }
                }
            }
        },
        updateJoke: (state, action) => {
            const updetedJoke = state.jokes.map(joke => {
                return joke.id === action.payload.id ?
                    { ...joke, joke: action.payload.updatedJoke }
                    : joke
            })

            return {
                ...state,
                jokes: updetedJoke
            }
        },
        addToFavoriteJokes: {
            reducer(state, action) {
                const isAlreadyFavorite = state.favoriteJokes.find((joke) => joke.id === action.payload.id)

                if (isAlreadyFavorite) {
                    return {
                        ...state
                    }
                } else {
                    state.favoriteJokes.push(action.payload)
                }
            },
            prepare(id,joke) {
                return {
                    payload: {
                        id,
                        joke,
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchJokes.pending, (state, _) => {
                state.status = 'loading'
            })
            .addCase(fetchJokes.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.jokes = action.payload
            })
            .addCase(fetchJokes.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})



export const selectAllJokes = (state) => state.jokes.jokes ?? []
export const favJokes = (state) => state.jokes.favoriteJokes ?? []


// Action creators are generated for each case reducer function
export const { deleteJoke, deleteAllJokes, addJoke, updateJoke, addToFavoriteJokes } = todoSlice.actions

export default todoSlice.reducer