export const formatDate = (date) => {
    const newDate = new Date(date)
 
    const [day, month, year] = [newDate.getDate(), newDate.getMonth(), newDate.getFullYear()];

    return `${day} ${monthName(month)} ${year}`
}

const monthName = (month) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
}