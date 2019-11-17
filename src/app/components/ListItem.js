import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GREY, DARK_BLUE } from '../colors'
import { DEFAULT_FONT_SIZE } from '../../constants'

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
    fontSize: DEFAULT_FONT_SIZE,
    color: DARK_BLUE
  }
})

export default ListItem
