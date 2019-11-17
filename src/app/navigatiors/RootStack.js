import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/Home'
import NewItemScreen from '../screens/NewItem'

const RootStack = createStackNavigator({
  NewItem: {
    screen: NewItemScreen
  },
  Home: {
    screen: HomeScreen,
  },

})

export default RootStack
