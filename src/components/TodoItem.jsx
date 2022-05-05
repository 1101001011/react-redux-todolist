import React from 'react';

const TodoItem = ({todo, ...props}) => (
    <div
        style={ todo.color ? { backgroundColor: todo.color} : { border: '1px solid #ccc' }}
        className='todo__item'
        {...props}
    >
        {todo.title}
    </div>
)

export default TodoItem;