import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const TodoForm = ({value, setValue, addHandler}) => {
    return (
        <div className="todo__form">
            <MyInput
                value={value}
                type="text"
                placeholder="Your todo.."
                onChange={(e) => setValue(e.target.value)}
            />
            <MyButton onClick={() => addHandler()}>
                Add
            </MyButton>
        </div>
    );
};

export default TodoForm;