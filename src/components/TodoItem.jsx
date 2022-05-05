import React from 'react';
import {removeTodo} from "../store/reducers/todoReducer";
import {useDispatch} from "react-redux";

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()

    return (
        <div
            style={ todo.color ? { backgroundColor: todo.color} : { border: '1px solid #ccc' }}
            className='todo__item'
            onClick={() => dispatch(removeTodo(todo.id))}
        >
            {todo.title}
        </div>
    );
};

export default TodoItem;