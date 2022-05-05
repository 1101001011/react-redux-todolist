import React from 'react';
import './MyInput.scss'

const MyInput = ({...props}) => (
    <input className="input" {...props}/>
)

export default MyInput;