import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/Home'
import NewItemScreen from '../screens/NewItem'
import CommentsScreen from '../screens/Comments'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },

  NewItem: {
    screen: NewItemScreen
  },

  Comments: {
    screen: CommentsScreen
  },
})

export default RootStack
