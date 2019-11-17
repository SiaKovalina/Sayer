import types from '../types/items'

const setItem = (item) => ({
  type: types.SET_ITEM,
  item
})

export default {
  setItem
}
