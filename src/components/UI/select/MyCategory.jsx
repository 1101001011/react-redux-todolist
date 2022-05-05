import React from 'react';

const MyCategory = ({category, ...props}) => (
    <div className="select__category" {...props}>
        {category}
    </div>
)

export default MyCategory;