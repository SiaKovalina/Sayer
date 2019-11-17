import React, { Component } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { BLACK, DARK_BLUE } from '../colors'
import { DEFAULT_FONT_SIZE } from '../../constants'
import { generateId } from '../../utils'
import ItemActions from '../../store/actions/ItemActions'
import SubmitBtn from '../components/SubmitBtn'

const mapDispatchToProps = (dispatch) => {
  const addItem = (item) => dispatch(ItemActions.setItem(item))

  return {
    addItem
  }
}

class NewItem extends Component {
  state = {
    text: ''
  }

  onTextChange = (text) => {
    this.setState({ text })
  }

  addItem = () => {
    const { addItem, navigation } = this.props
    const id = generateId()
    const item = {
      text: this.state.text,
      id
    }

    addItem(item)
    navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='New item title ...'
          style={styles.input}
          onChangeText={this.onTextChange}/>
        <SubmitBtn onBtnPress={this.addItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 10,
    paddingTop: 25
  },

  input: {
    marginRight: 20,
    borderBottomColor: BLACK,
    borderBottomWidth: 1,
    flexGrow: 2,
    fontSize: DEFAULT_FONT_SIZE,
    color: DARK_BLUE
  }
})

export default connect(null, mapDispatchToProps)(NewItem)
