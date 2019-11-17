import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { GREY, DARK_BLUE } from '../colors'
import { DEFAULT_FONT_SIZE } from '../../constants'
import { connect } from 'react-redux'
import ItemActions from '../../store/actions/ItemActions'
import { withNavigation } from 'react-navigation'

const mapDispatchToProps = (dispatch) => {
  const removeItem = (id) => dispatch(ItemActions.removeItem(id))

  return {
    removeItem
  }
}

const ListItem = ({ children, removeItem, id, navigation }) => {

  const goToComments = () => {
    navigation.navigate('Comments', { itemId: id })
  }

  return (
    <TouchableOpacity
      onPress={goToComments}
      style={styles.item}>
        <React.Fragment>
          <Text style={styles.item__text}>
            {children}
          </Text>
          <Text onPress={() => removeItem(id)}>Delete</Text>
      </React.Fragment>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: GREY,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40
  },

  item__text: {
    flexGrow: 2,
    fontSize: DEFAULT_FONT_SIZE,
    color: DARK_BLUE
  }
})

export default withNavigation(connect(null, mapDispatchToProps)(ListItem))
