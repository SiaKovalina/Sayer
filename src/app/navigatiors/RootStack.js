import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/Home'
import NewItemScreen from '../screens/NewItem'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },

  NewItem: {
    screen: NewItemScreen
  }
})

export default RootStack
