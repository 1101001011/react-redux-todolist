import React from "react";
import "./MyButton.scss"

const MyButton = ({todoTitle, children, ...props}) => (
    <button className={todoTitle ? "btn active" : "btn"} {...props}>
        {children}
    </button>
)

export default MyButton;