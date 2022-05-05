import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectValue} from "../../../store/reducers/todoReducer";
import "./MySelect.scss"

const MySelect = ({setColor}) => {
    const [active, setActive] = useState(false)
    const categories = useSelector(state => state.todos.categories)
    const selectValue = useSelector(state => state.todos.selectValue)
    const dispatch = useDispatch()

    const chooseColor = (category) => {
        if (category === 'Study') return '#fff9f0'
        if (category === 'Sports') return '#f0f4ff'
        if (category === 'Daily') return '#f0fff0'
        if (category === 'Job') return '#fff0f0'
    }

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
            <div className={active ? "select__modal active" : "select__modal"}>
                {categories.map(category =>
                    <div
                        className="select__category"
                        key={category}
                        onClick={() => categoryHandler(category)}
                    >
                        {category}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MySelect
