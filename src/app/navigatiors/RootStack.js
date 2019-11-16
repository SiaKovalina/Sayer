import HomeScreen from '../screens/Home'
import { createStackNavigator } from 'react-navigation-stack'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({

    })
  },
})

export default RootStack
