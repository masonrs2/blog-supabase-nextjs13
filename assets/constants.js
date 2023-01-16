export function updateDateFormat(string) {
    const temp = string.split('-')
    const newDate = `${temp[1]}/${temp[2]}/${temp[0]}`
    
    return newDate
}