import types from '../types/items'

const initialState = {
  list: [],
  comments: {}
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
      const comments = {...state.comments}
      delete comments[action.id]

      return {
        ...state,
        list: [
          ...state.list.filter(item => item.id != action.id)
        ],
        comments
      }

    case types.SET_COMMENT:
      const { itemId } = action.comment

      if (!state.comments) {
        return {
          ...state,
          comments: {
            [itemId]: [action.comment]
          }
        }
      } else if (!state.comments[itemId]) {
        return {
          ...state,
          comments: {
            ...state.comments,
            [itemId]: [action.comment]
          }
        }
      } else {
        return {
          ...state,
          comments: {
            ...state.comments,
            [itemId]: [action.comment, ...state.comments[itemId]]
          }
        }
      }

    case types.REMOVE_COMMENTS:
      const newState = {...state}
      delete newState.comments[action.itemId]
      console.log('newState :', newState);
      return newState

    default:
      return state
  }
}

export default ItemsReducer
