import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { StyleSheet, StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation'
import RootStack from './src/app/navigatiors/RootStack'

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        {/* <StatusBar /> */}
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
