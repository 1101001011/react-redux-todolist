import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectValue} from "../../../store/reducers/todoReducer";
import {chooseColor} from "./chooseColor";
import MyCategory from "./MyCategory";
import "./MySelect.scss"

const MySelect = ({setColor}) => {
    const [active, setActive] = useState(false)
    const categories = useSelector(state => state.todos.categories)
    const selectValue = useSelector(state => state.todos.selectValue)
    const dispatch = useDispatch()

    const categoryHandler = (category) => {
        const color = chooseColor(category)
        setColor(color)
        dispatch(setSelectValue(category))
        setActive(false)
    }

    return (
        <div className="select">
            <div
                className="select__title"
                onClick={active ? () => setActive(false) : () => setActive(true)}
            >
                <p>{selectValue}</p>
                {active
                    ? <img style={{transform: 'rotate(180deg)'}} src="https://img.icons8.com/ios-glyphs/90/000000/expand-arrow--v1.png" alt=''/>
                    : <img src="https://img.icons8.com/ios-glyphs/90/000000/expand-arrow--v1.png" alt=''/>
                }
            </div>
            <div
                className={active ? "select__overlay active" : "select__overlay"}
                onClick={() => setActive(false)}
            >
            </div>
            <div className={active ? "select__modal active" : "select__modal"}>
                {categories.map(category =>
                    <MyCategory category={category} onClick={() => categoryHandler(category)} key={category}/>
                )}
            </div>
        </div>
    )
}

export default MySelect