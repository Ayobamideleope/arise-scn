/**
 *
 * @param {Date} date date to convert
 */
export const formatDateToText = (date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
}
