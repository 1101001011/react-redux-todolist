import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {removeTodo} from "../store/reducers/todoReducer";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 className="todo__title">TodoList</h1>
            <TodoForm/>
            {todos.map(todo =>
                <TodoItem
                    todo={todo}
                    onClick={() => dispatch(removeTodo(todo.id))}
                    key={todo.id}
                />
            )}
        </div>
    );
};

export default TodoList;