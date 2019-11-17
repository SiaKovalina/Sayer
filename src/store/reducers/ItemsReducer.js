import types from '../types/items'

const initialState = {
  list: []
}

const ItemsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_ITEM:
      return {
        ...state,
        list: [
          action.item,
          ...state.list
        ]
      }
    case types.REMOVE_ITEM:
      return {
        ...state,
        list: [
          ...state.list.filter(item => item.id != action.id)
        ]
      }
    default:
      return state
  }
}

export default ItemsReducer
