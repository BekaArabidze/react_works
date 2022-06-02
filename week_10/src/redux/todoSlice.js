import { createSlice, nanoid } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            },
            {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
            },
            {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
            },
            {
                "userId": 1,
                "id": 6,
                "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                "completed": false
            },
            {
                "userId": 1,
                "id": 7,
                "title": "illo expedita consequatur quia in",
                "completed": false
            },
            {
                "userId": 1,
                "id": 8,
                "title": "quo adipisci enim quam ut ab",
                "completed": true
            },
            {
                "userId": 1,
                "id": 9,
                "title": "molestiae perspiciatis ipsa",
                "completed": false
            },
            {
                "userId": 1,
                "id": 10,
                "title": "illo est ratione doloremque quia maiores aut",
                "completed": true
            },
            {
                "userId": 1,
                "id": 11,
                "title": "vero rerum temporibus dolor",
                "completed": true
            },
            {
                "userId": 1,
                "id": 12,
                "title": "ipsa repellendus fugit nisi",
                "completed": true
            },
            {
                "userId": 1,
                "id": 13,
                "title": "et doloremque nulla",
                "completed": false
            },
            {
                "userId": 1,
                "id": 14,
                "title": "repellendus sunt dolores architecto voluptatum",
                "completed": true
            },
            {
                "userId": 1,
                "id": 15,
                "title": "ab voluptatum amet voluptas",
                "completed": true
            },
            {
                "userId": 1,
                "id": 16,
                "title": "accusamus eos facilis sint et aut voluptatem",
                "completed": true
            },
            {
                "userId": 1,
                "id": 17,
                "title": "quo laboriosam deleniti aut qui",
                "completed": true
            },
            {
                "userId": 1,
                "id": 18,
                "title": "dolorum est consequatur ea mollitia in culpa",
                "completed": false
            },
            {
                "userId": 1,
                "id": 19,
                "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
                "completed": true
            },
            {
                "userId": 1,
                "id": 20,
                "title": "ullam nobis libero sapiente ad optio sint",
                "completed": true
            }
        ]
    },
    reducers: {
        deleteTodo: (state, action) => {
            const deletedTodos = state.todos.filter((todo) => todo.id !== action.payload)

            return {
                todos: deletedTodos
            }
        },
        deleteAllTodos: () => {
            return { todos: [] }
        },
        toggleTodo: (state, action) => {
            const toggledTodos = state.todos.map(todo => {
                return todo.id === action.payload ?
                    { ...todo, completed: !todo.completed }
                    : todo
            })

            return {
                todos: toggledTodos
            }
        },
        addTodo: {
            reducer(state, action) {
                state.todos.push(action.payload)
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false,
                        userId: Math.floor(Math.random() * 100)
                    }

                }
            }
        },
        updateTodo: (state, action) => {
            const updatedTodo = state.todos.map(todo => {
                return todo.id === action.payload.id ?
                    { ...todo, title: action.payload.title }
                    : todo
            })

            return {
                todos: updatedTodo
            }
        }
    }
})

export const selectAllTodos = (state) => state.todos ?? []


// Action creators are generated for each case reducer function
export const { deleteTodo, deleteAllTodos, toggleTodo, addTodo,updateTodo } = counterSlice.actions

export default counterSlice.reducer