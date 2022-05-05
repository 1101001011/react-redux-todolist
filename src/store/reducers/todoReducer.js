import {createSlice} from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        categories: ['Study', 'Sports', 'Daily', 'Job']
    },
    reducers: {
        addTodo(state, action) {
            state.todos.unshift(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        changeColor(state, action) {
            state.todos.color = action.payload
        }
    }
})

export default todoReducer.reducer
export const {addTodo, removeTodo, changeColor} = todoReducer.actions