export const generateId = () => {
  const uuidv4 = require('uuid/v4')

  return uuidv4()
}

export const truncate = (text) => {
  const textLength = 25

  return text.length > textLength ? text.slice(0, textLength) + ' ...' : text
}
