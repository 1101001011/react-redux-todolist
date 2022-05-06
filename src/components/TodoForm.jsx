import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import MySelect from "./UI/select/MySelect";
import {setSelectValue} from "../store/reducers/todoReducer";
import {useDispatch} from "react-redux";
import {firebaseState} from "../store/firebase/firebaseState";

const TodoForm = () => {
    const [todo, setTodo] = useState({title: ''})
    const dispatch = useDispatch()
    const firebase = firebaseState(dispatch)

    const setColor = (color) => setTodo({...todo, color: color})

    const addHandler = () => {
        firebase.addTodoFB({...todo, date: new Date().toJSON()})
        dispatch(setSelectValue())
        setTodo({title: ''})
    }

    return (
        <div className="todo__form">
            <MyInput
                value={todo.title}
                type="text"
                placeholder="Your todo.."
                onChange={(e) => setTodo({...todo, title: e.target.value})}
            />
            <MySelect setColor={setColor}/>
            <MyButton disabled={!todo.title} onClick={() => addHandler()}>
                Add
            </MyButton>
        </div>
    );
};

export default TodoForm;