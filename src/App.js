import React, {useEffect} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import MyLoader from "./components/UI/loader/MyLoader";
import {useDispatch, useSelector} from "react-redux";
import {firebaseState} from "./store/firebase/firebaseState";
import "./styles/App.scss"
import "./styles/todo.scss"

const App = () => {
    const {todos, loading} = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const firebase = firebaseState()

    useEffect(() => {
        firebase.fetchTodosFB(dispatch)
    }, [])

    return (
        <div className="App">
            <h1 className="App__title">TodoList</h1>
            <TodoForm/>
            {loading
                ? <div className="todo__loader">
                    <MyLoader/>
                  </div>
                : <TodoList todos={todos} loading={loading} firebase={firebase} dispatch={dispatch}/>
            }
        </div>
    );
};

export default App;

