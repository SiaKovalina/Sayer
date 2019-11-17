import types from '../types/items'

const setItem = (item) => ({
  type: types.SET_ITEM,
  item
})

const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  id
})

const setComment = (comment) => ({
  type: types.SET_COMMENT,
  comment
})

const removeComments = (itemId) => ({
  type: types.REMOVE_COMMENTS
})

export default {
  setItem,
  removeItem,
  setComment,
  removeComments
}
