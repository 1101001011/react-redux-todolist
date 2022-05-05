import React from 'react';
import {removeTodo} from "../store/reducers/todoReducer";
import {useDispatch} from "react-redux";

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()

    return (
        <div
            className='todo__item'
            onClick={() => dispatch(removeTodo(todo.id))}
        >
            {todo.title}
        </div>
    );
};

export default TodoItem;