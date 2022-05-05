import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import MySelect from "./UI/select/MySelect";
import {addTodo} from "../store/reducers/todoReducer";
import {useDispatch} from "react-redux";

const TodoForm = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const addHandler = () => {
        dispatch(addTodo({id: Date.now(), title: value}))
        setValue('')
    }

    return (
        <div className="todo__form">
            <MyInput
                value={value}
                type="text"
                placeholder="Your todo.."
                onChange={(e) => setValue(e.target.value)}
            />
            <MySelect/>
            <MyButton onClick={() => addHandler()}>
                Add
            </MyButton>
        </div>
    );
};

export default TodoForm;