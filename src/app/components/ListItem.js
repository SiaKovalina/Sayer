import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import { GREY, DARK_BLUE } from '../colors'
import { DEFAULT_FONT_SIZE } from '../../constants'
import { connect } from 'react-redux'
import ItemActions from '../../store/actions/ItemActions'

const mapDispatchToProps = (dispatch) => {
  const removeItem = (id) => dispatch(ItemActions.removeItem(id))

  return {
    removeItem
  }
}

const ListItem = ({ children, removeItem, id }) => {
  return (
    <TouchableHighlight
      onPress={() => removeItem(id)}
      style={styles.item}>
        <Text style={styles.item__text}>
          {children}
        </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 80,
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

export default connect(null, mapDispatchToProps)(ListItem)
