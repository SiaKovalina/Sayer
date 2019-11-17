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
    default:
      return state
  }
}

export default ItemsReducer
