import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import MySelect from "./UI/select/MySelect";
import {addTodo, setSelectValue} from "../store/reducers/todoReducer";
import {useDispatch, useSelector} from "react-redux";

const TodoForm = () => {
    const [value, setValue] = useState('')
    let todo = useSelector(state => state.todos.todo)
    const dispatch = useDispatch()

    const setColor = (color) => todo = {...todo, color: color}

    const addHandler = () => {
        dispatch(addTodo({...todo, id: Date.now(), title: value}))
        setValue('')
        dispatch(setSelectValue())
    }

    return (
        <div className="todo__form">
            <MyInput
                value={value}
                type="text"
                placeholder="Your todo.."
                onChange={(e) => setValue(e.target.value)}
            />
            <MySelect setColor={setColor}/>
            <MyButton onClick={() => addHandler()}>
                Add
            </MyButton>
        </div>
    );
};

export default TodoForm;