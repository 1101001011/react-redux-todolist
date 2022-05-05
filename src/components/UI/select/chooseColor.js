export const chooseColor = (category) => {
    switch (category) {
        case 'Study': return '#fff9f0'
        case 'Sports': return '#f0f4ff'
        case 'Daily': return '#f0fff0'
        case 'Job': return '#fff0f0'
        default:
            return ''
    }
}
