import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)

    return (
        <div>
            <h1 className="todo__title">TodoList</h1>
            <TodoForm/>
            {todos.map(todo =>
                <TodoItem todo={todo} key={todo.id}/>
            )}
        </div>
    );
};

export default TodoList;