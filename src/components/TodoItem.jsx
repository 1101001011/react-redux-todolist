import React from "react";

const TodoItem = ({todo, ...props}) => (
    <div
        style={ todo.color ? { backgroundColor: todo.color} : { border: '1px solid #ccc' }}
        className="todo__item"
        {...props}
    >
        <p className="todo__title">{todo.title}</p>
        <p className="todo__date">{(todo.date).slice(0,10)}</p>
    </div>
)

export default TodoItem;