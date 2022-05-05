import React from 'react';
import {removeTodo} from "../store/reducers/todoReducer";

const TodoItem = ({todo, dispatch}) => {
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