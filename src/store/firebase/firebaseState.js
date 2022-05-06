import {addTodo, fetchTodos, removeTodo, showLoader} from "../reducers/todoReducer";
import axios from "axios";

const url = 'https://react-todolist-aa676-default-rtdb.firebaseio.com/'

export const firebaseState = (dispatch) => {

    const addTodoFB = async (todo) => {
        dispatch(showLoader())
        const response = await axios.post(`${url}/todos.json`, todo)
        const payload = {
            ...todo,
            id: response.data.name,
        }
        dispatch(addTodo(payload))
    }

    const fetchTodosFB = async (dispatch) => {
        dispatch(showLoader())
        const response = await axios.get(`${url}/todos.json`)
        let payload
        if (response.data) {
            payload = Object.keys(response.data).map(key => {
                return {...response.data[key], id: key}
            })
        } else payload = []
        dispatch(fetchTodos(payload))
    }

    const removeTodoFB = async (id, dispatch) => {
        await axios.delete(`${url}/todos/${id}.json`)
        dispatch(removeTodo(id))
    }

    return {
        addTodoFB,
        fetchTodosFB,
        removeTodoFB
    }
}