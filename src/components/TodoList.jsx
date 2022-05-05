import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {addTodo} from "../store/reducers/todoReducer";

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)

    const [value, setValue] = useState('')

    const addHandler = () => {
        dispatch(addTodo({id: Date.now(), title: value}))
        setValue('')
    }

    return (
        <div>
            <h1 className="todo__title">TodoList</h1>
            <TodoForm
                value={value}
                setValue={setValue}
                addHandler={addHandler}
            />
            {todos.map(todo =>
                <TodoItem todo={todo} dispatch={dispatch} key={todo.id}/>
            )}
        </div>
    );
};

export default TodoList;