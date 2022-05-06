import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import {firebaseState} from "../store/firebase/firebaseState";
import MyLoader from "./UI/loader/MyLoader";

const TodoList = () => {
    const {todos, loading} = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const firebase = firebaseState()

    useEffect(() => {
        firebase.fetchTodosFB(dispatch)
    }, [])

    if (!todos.length && !loading) return <p className="todo__absence">No todos</p>

    return (
        <div>
            {loading
                ? <div className="todo__loader">
                    <MyLoader/>
                  </div>
                : todos.map(todo =>
                    <TodoItem
                        todo={todo}
                        onClick={() => firebase.removeTodoFB(todo.id, dispatch)}
                        key={todo.id}
                    />
                  )
            }

        </div>
    );
};

export default TodoList;