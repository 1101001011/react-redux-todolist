import {useState} from "react";

export const useChooseColor = (category) => {
    const [color, setColor] = useState('')
    switch (category) {
        case 'Study':
            setColor('#fff9f0')
            break
        case 'Sports':
            setColor('#f0f4ff')
            break
        case 'Daily':
            setColor('#f0fff0')
            break
        case 'Job':
            setColor('#fff0f0')
            break
        default:
            return color
    }
    return {
        color
    }
}