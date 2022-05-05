import React from 'react';
import './MyInput.scss'

const MyInput = ({...props}) => {
    return (
        <input className="input" {...props}/>
    );
};

export default MyInput;