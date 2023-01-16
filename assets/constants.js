export function updateDateFormat(string) {
    const temp = string.split('-')
    const newDate = `${temp[1]}/${temp[2]}/${temp[0]}`
    
    return newDate
}

export const truncateText = (text, size) => {
    if(text?.length > size) return text.slice(0, size) + "..."
    else return text
}