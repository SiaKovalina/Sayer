import { combineReducers } from 'redux'
import DeviceReducer from './DeviceReducer'
import ItemsReducer from './ItemsReducer'

const rootReducer = combineReducers({
  device: DeviceReducer,
  items: ItemsReducer
})

export default rootReducer
