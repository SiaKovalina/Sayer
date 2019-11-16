import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <StatusBar />
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Text>Bla bla</Text>
          </View>
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
