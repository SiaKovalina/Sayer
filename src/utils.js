export const generateId = () => {
  const uuidv4 = require('uuid/v4')

  return uuidv4()
}
