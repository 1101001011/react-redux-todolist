import React from 'react';
import TodoList from "./components/TodoList";
import './styles/App.scss'
import TodoForm from "./components/TodoForm";

const App = () => {
    return (
        <div className="App">
            <h1 className="App__title">TodoList</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default App;

