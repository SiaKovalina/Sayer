import types from '../types/items'

const setItem = (item) => ({
  type: types.SET_ITEM,
  item
})

const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  id
})

export default {
  setItem,
  removeItem
}
