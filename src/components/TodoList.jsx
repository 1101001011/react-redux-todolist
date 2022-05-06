import React from "react";
import TodoItem from "./TodoItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TodoList = ({todos, loading, firebase, dispatch}) => {
    if (!todos.length && !loading) return <p className="todo__absence">No todos</p>

    return (
        <div>
            <TransitionGroup>
                {todos.map(todo =>
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="todo"
                    >
                        <TodoItem
                            todo={todo}
                            onClick={() => firebase.removeTodoFB(todo.id, dispatch)}
                            key={todo.id}
                        />
                    </CSSTransition>)
                }
            </TransitionGroup>
        </div>
    );
};

export default TodoList;