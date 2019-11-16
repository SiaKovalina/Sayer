import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GREY, DARK_BLUE } from '../colors'

const ListItem = ({ children }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.item__text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: GREY,
    justifyContent: 'center',
    paddingLeft: 40
  },

  item__text: {
    fontSize: 24,
    color: DARK_BLUE
  }
})

export default ListItem
