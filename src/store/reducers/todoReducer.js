import {createSlice} from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        loading: false,
        categories: ['Study', 'Sports', 'Daily', 'Job'],
        selectValue: 'Categories',
    },
    reducers: {
        showLoader(state) {
            state.loading = true
        },
        addTodo(state, action) {
            state.loading = false
            state.todos.unshift(action.payload)
        },
        fetchTodos(state, action) {
            state.loading = false
            state.todos = (action.payload).reverse()
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        setSelectValue(state, action) {
            state.selectValue = action.payload || 'Categories'
        }
    }
})

export default todoReducer.reducer
export const {showLoader, addTodo, fetchTodos, removeTodo, setSelectValue} = todoReducer.actions