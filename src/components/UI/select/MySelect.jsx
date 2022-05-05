import React, {useState} from "react";
import {useSelector} from "react-redux";
import "./MySelect.scss"

const MySelect = () => {
    const [active, setActive] = useState(false)
    const [defaultValue, setDefaultValue] = useState('Categories')
    const categories = useSelector(state => state.todos.categories)

    const CategoryHandler = (c) => {
        setDefaultValue(c)
        setActive(false)
    }

    return (
        <div className="select">
            <div
                className="select__title"
                onClick={active ? () => setActive(false) : () => setActive(true)}
            >
                <p>{defaultValue}</p>
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
                        onClick={() => CategoryHandler(category)}
                    >
                        {category}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MySelect
