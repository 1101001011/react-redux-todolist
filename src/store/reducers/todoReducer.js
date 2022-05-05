import {createSlice} from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        todo: {},
        categories: ['Study', 'Sports', 'Daily', 'Job'],
        selectValue: 'Categories'
    },
    reducers: {
        addTodo(state, action) {
            state.todos.unshift(action.payload)
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
export const {addTodo, removeTodo, setSelectValue} = todoReducer.actions